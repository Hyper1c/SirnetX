# SirNet 🎬

Una plataforma de streaming moderna inspirada en Netflix, desarrollada con React, TypeScript y Firebase.

## Características

### 🎯 Funcionalidades Principales
- **Autenticación con Firebase**: Login seguro con email/contraseña
- **Catálogo de contenido**: Películas, series, infantil y comedia
- **TV en Vivo**: Integración de canales IPTV
- **Búsqueda avanzada**: Filtros por categoría y búsqueda por texto
- **Información detallada**: Sinopsis, reparto, duración y calificaciones
- **Diseño responsive**: Compatible con desktop, tablet y móvil

### 🎨 Diseño y Estética
- **Tema oscuro**: Fondo negro y gris oscuro con acentos azules
- **Branding SirNet**: Logo moderno y minimalista
- **Animaciones suaves**: Transiciones y efectos hover
- **Interfaz tipo Netflix**: Carrusel de contenido y tarjetas interactivas

### 📱 Navegación
- **Menú hamburguesa**: Acceso a todas las secciones
- **Sidebar responsive**: Navegación lateral con categorías
- **Barra de búsqueda**: Filtrado en tiempo real
- **Modal de información**: Detalles completos del contenido

### 📺 TV en Vivo
- **Reproductor integrado**: Soporte para streams HLS/MPEG-TS
- **Múltiples categorías**: Deportes, películas, entretenimiento, infantil
- **Controles de video**: Pantalla completa, volumen, etc.
- **Filtros por categoría**: Organización intuitiva de canales

## Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **Autenticación**: Firebase Auth
- **Base de datos**: Firestore (preparado)
- **Iconos**: Lucide React
- **Build**: Vite
- **Routing**: React Router DOM

## Configuración

### 1. Configurar Firebase

Edita `src/firebase/config.ts` con tu configuración de Firebase:

```typescript
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-project-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};
```

### 2. Configurar Firebase Authentication

En la consola de Firebase:
1. Habilita Authentication
2. Configura el método de Email/Password
3. Desactiva la verificación de email (opcional)

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Login.tsx       # Pantalla de login
│   ├── Header.tsx      # Barra superior
│   ├── Sidebar.tsx     # Menú lateral
│   ├── ContentCard.tsx # Tarjeta de contenido
│   ├── LiveTV.tsx      # Reproductor de TV en vivo
│   └── ...
├── contexts/           # Contextos de React
│   └── AuthContext.tsx # Contexto de autenticación
├── data/              # Datos mock
│   └── mockContent.ts # Contenido de ejemplo
├── firebase/          # Configuración Firebase
│   └── config.ts      # Config de Firebase
└── ...
```

## Funcionalidades Futuras

- [ ] Sistema de perfiles de usuario
- [ ] Control parental
- [ ] Límites de pantallas simultáneas
- [ ] Recomendaciones personalizadas
- [ ] Historial de reproducción
- [ ] Lista de favoritos
- [ ] Soporte para múltiples idiomas
- [ ] Integración con servicios de streaming reales
- [ ] Sistema de suscripciones

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

Desarrollado con ❤️ para la comunidad de streaming