// /components/ProfileSelector.tsx
import React, { useState } from "react";
import { useProfiles } from "../contexts/ProfileContext";
import { Plus, Trash2, Edit } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

// =======================
// Modal de PIN
// =======================
const PinModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (pin: string) => void;
  profileName?: string;
}> = ({ isOpen, onClose, onConfirm, profileName }) => {
  const [pinInput, setPinInput] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onConfirm(pinInput);
    setPinInput("");
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-sm w-full border border-blue-600/30">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ingresar PIN para {profileName}
        </h2>
        <input
          type="password"
          value={pinInput}
          onChange={(e) => setPinInput(e.target.value)}
          maxLength={6}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-blue-500 text-center tracking-widest text-xl"
          placeholder="••••"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!pinInput}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

// =======================
// Modal de confirmación con contraseña de la cuenta
// =======================
const PasswordConfirmModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (password: string) => void;
}> = ({ isOpen, onClose, onConfirm }) => {
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!password) return;
    setSubmitting(true);
    await onConfirm(password);
    setSubmitting(false);
    setPassword("");
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-sm w-full border border-blue-600/30">
        <h2 className="text-2xl font-bold text-white mb-4">Confirmar con tu contraseña</h2>
        <p className="text-sm text-gray-400 mb-4">Por seguridad, ingresa la contraseña de tu cuenta para editar el perfil.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-blue-500"
          placeholder="Contraseña de la cuenta"
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            disabled={submitting}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!password || submitting}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {submitting ? 'Verificando...' : 'Confirmar'}
          </button>
        </div>
      </div>
    </div>
  );
};

// =======================
// Modal de creación/edición
// =======================
const ProfileFormModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: (profile: { name: string; avatar: string; pin: string | null }) => void;
  initialData?: { name: string; avatar: string; pin: string | null };
}> = ({ isOpen, onClose, onSave, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [avatar, setAvatar] = useState(initialData?.avatar || "👤");
  const [pin, setPin] = useState(initialData?.pin || "");

  if (!isOpen) return null;

  const avatars = [
    "👤",
    "👶",
    "👨‍👩‍👧‍👦",
    "👨",
    "👩",
    "👴",
    "👵",
    "👨‍💻",
    "👩‍💻",
    "🎭",
    "🎨",
    "🎮",
    "🏃‍♂️",
    "🚴‍♀️",
  ];

  const handleSave = () => {
    onSave({ name, avatar, pin: pin || null });
    setName("");
    setAvatar("👤");
    setPin("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full border border-blue-600/30">
        <h3 className="text-xl text-white mb-4">
          {initialData ? "Editar perfil" : "Crear nuevo perfil"}
        </h3>

        {/* Avatares */}
        <label className="block text-white text-sm mb-2">Avatar</label>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {avatars.map((a) => (
            <button
              key={a}
              onClick={() => setAvatar(a)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
                avatar === a ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Nombre */}
        <label className="block text-white text-sm mb-2">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Nombre del perfil"
        />

        {/* PIN */}
        <label className="block text-white text-sm mb-2">PIN (opcional)</label>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength={6}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white mb-6 focus:outline-none focus:border-blue-500"
          placeholder="••••"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={!name.trim()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

// =======================
// Modal de eliminación
// =======================
const DeleteConfirmModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  profileName?: string;
}> = ({ isOpen, onClose, onConfirm, profileName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 max-w-sm w-full border border-blue-600/30 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Eliminar perfil</h2>
        <p className="text-gray-300 mb-6">
          ¿Seguro que quieres eliminar el perfil{" "}
          <span className="text-blue-400 font-semibold">{profileName}</span>?<br />
          Perderás avatar, nombre y configuraciones.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

// =======================
// ProfileSelector principal
// =======================
const ProfileSelector: React.FC<{ onProfileSelected?: () => void }> = ({
  onProfileSelected,
}) => {
  const { profiles, selectProfile, addProfile, updateProfile, deleteProfile } =
    useProfiles();
  const { reauthenticate } = useAuth();

  const [pinProfile, setPinProfile] = useState<any | null>(null);
  const [pinError, setPinError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editProfile, setEditProfile] = useState<any | null>(null);

  const [deleteProfileId, setDeleteProfileId] = useState<string | null>(null);

  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [pendingEditProfile, setPendingEditProfile] = useState<any | null>(null);
  const [passwordError, setPasswordError] = useState<string>("");

  // Selección con PIN
  const handleSelectProfile = (profile: any) => {
    if (profile.pin) {
      setPinProfile(profile);
    } else {
      selectProfile(profile);
      localStorage.setItem("selected_profile_id", profile.id);
      if (onProfileSelected) onProfileSelected?.();
    }
  };

  const handleConfirmPin = (pin: string) => {
    if (pinProfile && pinProfile.pin === pin) {
      selectProfile(pinProfile);
      localStorage.setItem("selected_profile_id", pinProfile.id);
      if (onProfileSelected) onProfileSelected?.();
      setPinProfile(null);
      setPinError("");
    } else {
      setPinError("PIN incorrecto");
    }
  };

  const requestEditWithPassword = (profile: any) => {
    setPasswordError("");
    setPendingEditProfile(profile);
    setShowPasswordPrompt(true);
  };

  const handlePasswordConfirm = async (password: string) => {
    try {
      setPasswordError("");
      await reauthenticate(password);
      setShowPasswordPrompt(false);
      if (pendingEditProfile) {
        setEditProfile(pendingEditProfile);
        setShowForm(true);
        setPendingEditProfile(null);
      }
    } catch (e) {
      setPasswordError("Contraseña incorrecta. Intenta nuevamente.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-12">SirNet</h1>
        <h2 className="text-2xl text-white mb-8">Selecciona tu perfil</h2>

        {/* Perfiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
          {profiles.slice(0, 5).map((profile) => (
            <div
              key={profile.id}
              className="group cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleSelectProfile(profile)}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center text-4xl mb-3 group-hover:bg-gray-700 transition-colors">
                  {profile.avatar}
                </div>
                {/* Botones */}
                <div className="absolute -top-2 -right-2 flex gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      requestEditWithPassword(profile);
                    }}
                    className="w-6 h-6 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white text-xs"
                    title="Editar perfil"
                  >
                    <Edit size={12} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteProfileId(profile.id);
                    }}
                    className="w-6 h-6 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white text-xs"
                    title="Eliminar perfil"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
              <p className="text-white text-sm">{profile.name}</p>
            </div>
          ))}

          {profiles.length < 5 && (
            <div
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => {
                setEditProfile(null);
                setShowForm(true);
              }}
            >
              <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center text-4xl mb-3 hover:bg-gray-700 transition-colors">
                <Plus size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-sm">Agregar perfil</p>
            </div>
          )}
        </div>
      </div>

      {/* Modales */}
      <PinModal
        isOpen={!!pinProfile}
        onClose={() => setPinProfile(null)}
        onConfirm={handleConfirmPin}
        profileName={pinProfile?.name}
      />

      <PasswordConfirmModal
        isOpen={showPasswordPrompt}
        onClose={() => {
          setShowPasswordPrompt(false);
          setPendingEditProfile(null);
        }}
        onConfirm={handlePasswordConfirm}
      />

      {passwordError && (
        <div className="absolute bottom-20 text-red-500 font-medium">{passwordError}</div>
      )}

      <ProfileFormModal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        initialData={editProfile}
        onSave={(data) => {
          if (editProfile) {
            updateProfile(editProfile.id, data);
          } else {
            addProfile({ 
              ...data, 
              isAdult: true, 
              isActive: false, 
              preferences: {
                language: 'es',
                autoplay: true,
                subtitles: false,
                quality: 'high' as const
              }
            });
          }
          setShowForm(false);
        }}
      />

      <DeleteConfirmModal
        isOpen={!!deleteProfileId}
        onClose={() => setDeleteProfileId(null)}
        onConfirm={() => {
          if (deleteProfileId) deleteProfile(deleteProfileId);
          setDeleteProfileId(null);
        }}
        profileName={profiles.find((p) => p.id === deleteProfileId)?.name}
      />

      {pinError && (
        <div className="absolute bottom-8 text-red-500 font-medium">{pinError}</div>
      )}
    </div>
  );
};

export default ProfileSelector;
