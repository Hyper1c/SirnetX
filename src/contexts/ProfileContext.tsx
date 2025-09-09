// /contexts/ProfileContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  deleteDoc, 
  query, 
  where,
  getDocs 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  isAdult: boolean;
  isActive: boolean;
  pin?: string | null;
  requiresPin?: boolean;
  preferences: {
    language: string;
    autoplay: boolean;
    subtitles: boolean;
    quality: 'low' | 'medium' | 'high';
  };
}

interface ProfileContextType {
  profiles: Profile[];
  currentProfile: Profile | null;
  addProfile: (profile: Omit<Profile, 'id'>) => void;
  updateProfile: (id: string, updates: Partial<Profile>) => void;
  deleteProfile: (id: string) => void;
  selectProfile: (profile: Profile | null) => void;
  createDefaultProfiles: () => void;
  forceCreateDefaultProfiles: () => void;
  clearCurrentProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const defaultProfiles: Omit<Profile, 'id'>[] = [
  {
    name: 'Usuario 1',
    avatar: '👤',
    isAdult: true,
    isActive: true,
    pin: null,
    requiresPin: false,
    preferences: { language: 'es', autoplay: true, subtitles: false, quality: 'high' }
  },
  {
    name: 'Usuario 2',
    avatar: '👶',
    isAdult: false,
    isActive: false,
    pin: null,
    requiresPin: false,
    preferences: { language: 'es', autoplay: true, subtitles: true, quality: 'medium' }
  },
  {
    name: 'Usuario 3',
    avatar: '👨‍👩‍👧‍👦',
    isAdult: true,
    isActive: false,
    pin: null,
    requiresPin: false,
    preferences: { language: 'es', autoplay: false, subtitles: true, quality: 'high' }
  }
];

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  // Nota: ya no usamos estado de carga ni creación automática de defaults
  const isCleaningRef = React.useRef(false);

  // Sincronización en tiempo real con Firestore
  useEffect(() => {
    if (!currentUser) {
      setProfiles([]);
      setCurrentProfile(null);
      //
      return;
    }

    console.log('🔄 ProfileContext - Configurando listener para usuario:', currentUser.uid);

    // Listener en tiempo real para los perfiles del usuario
    const profilesQuery = query(
      collection(db, 'profiles'),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(profilesQuery, async (snapshot) => {
      const rawProfiles: Array<{ data: any; id: string }> = [];
      
      snapshot.forEach((d) => {
        const data = d.data();
        rawProfiles.push({ data, id: d.id });
      });

      // Ordenar por fecha de creación (createdAt) asc
      const sorted = rawProfiles.sort((a, b) => {
        const aTs = a.data?.createdAt?.seconds || 0;
        const bTs = b.data?.createdAt?.seconds || 0;
        return aTs - bTs;
      });

      // Deduplicar por (name + avatar) manteniendo el más antiguo
      const seenKeys = new Set<string>();
      const uniqueSorted: Array<{ data: any; id: string }> = [];
      for (const item of sorted) {
        const key = `${item.data?.name || ''}__${item.data?.avatar || ''}`;
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          uniqueSorted.push(item);
        }
      }

      // Limitar a 5 para mostrar
      const limitedList = uniqueSorted.slice(0, 5);

      const limited = limitedList.map(({ data, id }) => ({
        id,
        name: data.name,
        avatar: data.avatar,
        isAdult: data.isAdult,
        isActive: data.isActive,
        pin: data.pin,
        requiresPin: data.requiresPin,
        preferences: data.preferences
      } as Profile));

      console.log('🔄 ProfileContext - Perfiles sincronizados desde Firestore (máx 5):', limited);
      setProfiles(limited);

      // Limpieza en Firestore: borrar duplicados y/o excedentes más allá de los primeros 5 únicos
      if (!isCleaningRef.current) {
        const idsToKeep = new Set(limitedList.map((p) => p.id));
        const toDelete = sorted.filter((p) => !idsToKeep.has(p.id));
        if (toDelete.length > 0) {
          try {
            isCleaningRef.current = true;
            for (const item of toDelete) {
              await deleteDoc(doc(db, 'profiles', item.id));
            }
            console.log(`🧹 ProfileContext - Limpieza realizada. Eliminados ${toDelete.length} perfiles extra/duplicados.`);
          } catch (e) {
            console.error('Error durante limpieza de perfiles:', e);
          } finally {
            isCleaningRef.current = false;
          }
        }
      }

      // Ya NO crear perfiles por defecto automáticamente. Las cuentas nuevas empiezan sin perfiles.
    }, (error) => {
      console.error('Error en listener de perfiles:', error);
    });

    return () => {
      console.log('🔄 ProfileContext - Desconectando listener');
      unsubscribe();
    };
  }, [currentUser]);

  // Crear perfiles por defecto en Firestore
  const createDefaultProfilesInFirestore = async () => {
    if (!currentUser) return;

    try {
      // Verificar si ya existen perfiles para evitar duplicados
      const existing = await getDocs(query(collection(db, 'profiles'), where('userId', '==', currentUser.uid)));
      if (!existing.empty) {
        console.log('ℹ️ ProfileContext - Ya existen perfiles, no se crean defaults');
        return;
      }

      // Crear hasta 5 perfiles, usando IDs determinísticos para que no se dupliquen
      for (let index = 0; index < defaultProfiles.length; index++) {
        const profile = defaultProfiles[index];
        const profileId = `${currentUser.uid}_default_${index + 1}`;
        await setDoc(doc(db, 'profiles', profileId), {
          ...profile,
          userId: currentUser.uid,
          createdAt: new Date(),
          updatedAt: new Date()
        }, { merge: true });
      }
      console.log('✅ ProfileContext - Perfiles por defecto creados en Firestore');
    } catch (error) {
      console.error('Error creando perfiles por defecto:', error);
    }
  };

  // CRUD con sincronización en Firestore
  const addProfile = async (profile: Omit<Profile, 'id'>) => {
    if (!currentUser) return;
    if (profiles.length >= 5) {
      console.warn('⚠️ Límite de 5 perfiles alcanzado. No se puede agregar más.');
      return;
    }

    try {
      const profileId = `${currentUser.uid}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      await setDoc(doc(db, 'profiles', profileId), {
        ...profile,
        userId: currentUser.uid,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log('✅ ProfileContext - Perfil agregado a Firestore');
    } catch (error) {
      console.error('Error agregando perfil:', error);
    }
  };

  const updateProfile = async (id: string, updates: Partial<Profile>) => {
    if (!currentUser) return;

    try {
      const profileRef = doc(db, 'profiles', id);
      await setDoc(profileRef, {
        ...updates,
        updatedAt: new Date()
      }, { merge: true });
      
      // Actualizar perfil actual si es el mismo
      if (currentProfile?.id === id) {
        setCurrentProfile(prev => prev ? { ...prev, ...updates } : null);
      }
      
      console.log('✅ ProfileContext - Perfil actualizado en Firestore');
    } catch (error) {
      console.error('Error actualizando perfil:', error);
    }
  };

  const deleteProfile = async (id: string) => {
    if (!currentUser) return;

    try {
      await deleteDoc(doc(db, 'profiles', id));
      
      // Limpiar perfil actual si es el mismo
      if (currentProfile?.id === id) {
        setCurrentProfile(null);
        localStorage.removeItem('selected_profile_id');
      }
      
      console.log('✅ ProfileContext - Perfil eliminado de Firestore');
    } catch (error) {
      console.error('Error eliminando perfil:', error);
    }
  };

  const selectProfile = (profile: Profile | null) => {
    if (!profile) {
      setCurrentProfile(null);
      localStorage.removeItem('selected_profile_id');
      return;
    }
    
    // Clonar para evitar mutaciones
    setCurrentProfile({ ...profile, preferences: { ...profile.preferences } });
    localStorage.setItem('selected_profile_id', profile.id);
  };

  const createDefaultProfiles = async () => {
    console.log('🛠️ ProfileContext - createDefaultProfiles ejecutándose');
    await createDefaultProfilesInFirestore();
  };

  const clearCurrentProfile = () => setCurrentProfile(null);

  // Restaurar perfil seleccionado desde localStorage
  useEffect(() => {
    if (profiles.length > 0 && !currentProfile) {
      const savedProfileId = localStorage.getItem('selected_profile_id');
      if (savedProfileId) {
        const savedProfile = profiles.find(p => p.id === savedProfileId);
        if (savedProfile) {
          console.log('🔄 ProfileContext - Restaurando perfil guardado:', savedProfile.name);
          setCurrentProfile(savedProfile);
        }
      }
    }
  }, [profiles, currentProfile]);

  const forceCreateDefaultProfiles = async () => {
    console.log('🆕 ProfileContext - Forzando creación de perfiles por defecto');
    await createDefaultProfiles();
  };

  return (
    <ProfileContext.Provider value={{
      profiles,
      currentProfile,
      addProfile,
      updateProfile,
      deleteProfile,
      selectProfile,
      createDefaultProfiles,
      forceCreateDefaultProfiles,
      clearCurrentProfile,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfiles must be used within a ProfileProvider');
  return ctx;
};