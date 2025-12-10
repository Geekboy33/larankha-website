# Larankha Oil & Gas Trading – Website

Landing page moderna y full-screen para Larankha Oil & Gas Trading, con soporte multiidioma (EN / ES / AR / ZH / RU / FR / PT).

## Stack Tecnológico

- **Vite** - Build tool y dev server
- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos utility-first

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

## Build para Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`

## Preview del Build

```bash
npm run preview
```

## Estructura del Proyecto

```
larankha-website/
├── index.html          # HTML principal
├── src/
│   ├── main.tsx        # Punto de entrada React
│   ├── App.tsx         # Componente principal de la landing
│   ├── translations.ts # Traducciones en 7 idiomas
│   └── index.css       # Estilos Tailwind
├── tailwind.config.cjs # Configuración Tailwind
├── postcss.config.cjs  # Configuración PostCSS
└── vite.config.ts      # Configuración Vite
```

## Idiomas Soportados

- 🇬🇧 English (EN)
- 🇪🇸 Español (ES)
- 🇸🇦 العربية (AR) - Con soporte RTL
- 🇨🇳 中文 (ZH)
- 🇷🇺 Русский (RU)
- 🇫🇷 Français (FR)
- 🇵🇹 Português (PT)

## Notas

- Las imágenes referenciadas (`/images/hero-larankha.jpg`, `/images/tanks-network.jpg`, etc.) deben ser agregadas en la carpeta `public/images/`
- El formulario de contacto actualmente muestra un alert. Conecta el `onSubmit` a tu backend/API según sea necesario.


