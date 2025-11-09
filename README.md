# 🏠 Rovedra S.L. - Corporate Website

[🇬🇧 English](#english) | [🇪🇸 Español](#español)

---

<a name="english"></a>
## 🇬🇧 English

### Overview

Modern corporate website for **Rovedra S.L.**, a home renovation company based in Palma de Mallorca, Spain. The site showcases their services in integral home renovations, kitchen remodeling, and bathroom renovations.

Built with cutting-edge web technologies for optimal performance, SEO, and user experience. Fully responsive design optimized for all devices.

🌐 **Live Site:** [https://reformasrovedra.es](https://reformasrovedra.es)

### ✨ Features

- ⚡ **Blazing fast** performance with Vite
- 📱 **Fully responsive** design (mobile-first approach)
- 🎨 **Custom Tailwind CSS** theme with brand colors
- 🔍 **SEO optimized** with custom meta tags and sitemap
- 📬 **Contact form** with Formspree integration
- 🚀 **Modern React 19** with TypeScript
- 🎯 **Client-side routing** with React Router
- 🤖 **Built with Cursor AI** for rapid development

### 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI Framework |
| **TypeScript** | 5.9.3 | Type Safety |
| **Vite** | 7.1.7 | Build Tool & Dev Server |
| **Tailwind CSS** | 4.1.17 | Styling |
| **React Router DOM** | 7.9.5 | Client-side Routing |
| **Vercel** | - | Deployment Platform |

### 📁 Project Structure

```
rovedrasl-website/
├── public/              # Static assets
│   ├── og-default.jpg   # Open Graph image
│   ├── robots.txt       # SEO crawling rules
│   └── sitemap.xml      # Site structure for SEO
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SEO.tsx
│   │   └── Layout.tsx
│   ├── pages/           # Route pages
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/            # Data models and content
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   └── types.ts
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point & routing
│   └── index.css        # Tailwind imports
├── dist/                # Production build output
├── package.json
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

### 🎨 Design System

#### Brand Colors

```css
brand-100: #FAF7F5  /* Light cream background */
brand-300: #F2D0BA  /* Soft peach accent */
brand-500: #C6421E  /* Primary brand orange */
brand-700: #2E2F34  /* Dark gray text */
brand-900: #1B1B1D  /* Almost black */
```

#### Typography

- **Headings:** DM Serif Display (serif)
- **Body:** Inter (sans-serif)

### 🚀 Getting Started

#### Prerequisites

- Node.js 18+ and npm

#### Installation

```bash
# Clone the repository
git clone https://github.com/laylarodas/rovedrasl-website.git

# Navigate to project directory
cd rovedrasl-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### 📜 Available Scripts

```bash
npm run dev       # Start development server with hot reload
npm run build     # Build for production (output to /dist)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint for code quality
```

### 🌐 Deployment

The site is automatically deployed to Vercel:

1. Connected to GitHub repository
2. Auto-deploys on push to `main` branch
3. Custom domain configured: [reformasrovedra.es](https://reformasrovedra.es)

### 📧 Contact Form

Contact form is powered by [Formspree](https://formspree.io/), providing:
- Spam protection
- Email notifications
- Form submission management

### 🔍 SEO Features

- Custom meta tags per page
- Open Graph tags for social sharing
- Sitemap.xml for search engines
- Robots.txt for crawler management
- Semantic HTML structure
- Fast page load times

### 📄 License

This project is proprietary and confidential. All rights reserved © 2025 Rovedra S.L.

### 🤝 Contributing

This is a private corporate website. Contributions are limited to authorized team members.

---

<a name="español"></a>
## 🇪🇸 Español

### Descripción

Sitio web corporativo moderno para **Rovedra S.L.**, empresa de reformas del hogar con sede en Palma de Mallorca, España. El sitio presenta sus servicios de reformas integrales, cocinas y baños.

Desarrollado con tecnologías web de última generación para un rendimiento óptimo, SEO y experiencia de usuario. Diseño totalmente responsive optimizado para todos los dispositivos.

🌐 **Sitio en vivo:** [https://reformasrovedra.es](https://reformasrovedra.es)

### ✨ Características

- ⚡ Rendimiento **ultrarrápido** con Vite
- 📱 Diseño **totalmente responsive** (enfoque mobile-first)
- 🎨 Tema **personalizado de Tailwind CSS** con colores de marca
- 🔍 **Optimizado para SEO** con meta tags personalizados y sitemap
- 📬 **Formulario de contacto** con integración de Formspree
- 🚀 **React 19 moderno** con TypeScript
- 🎯 **Enrutamiento del lado del cliente** con React Router
- 🤖 **Construido con Cursor AI** para desarrollo rápido

### 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.1.1 | Framework UI |
| **TypeScript** | 5.9.3 | Seguridad de Tipos |
| **Vite** | 7.1.7 | Herramienta de Build y Servidor Dev |
| **Tailwind CSS** | 4.1.17 | Estilos |
| **React Router DOM** | 7.9.5 | Enrutamiento Cliente |
| **Vercel** | - | Plataforma de Deployment |

### 📁 Estructura del Proyecto

```
rovedrasl-website/
├── public/              # Recursos estáticos
│   ├── og-default.jpg   # Imagen Open Graph
│   ├── robots.txt       # Reglas de rastreo SEO
│   └── sitemap.xml      # Estructura del sitio para SEO
├── src/
│   ├── components/      # Componentes UI reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SEO.tsx
│   │   └── Layout.tsx
│   ├── pages/           # Páginas de rutas
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/            # Modelos de datos y contenido
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   └── types.ts
│   ├── App.tsx          # Componente raíz
│   ├── main.tsx         # Punto de entrada y enrutamiento
│   └── index.css        # Importaciones de Tailwind
├── dist/                # Salida del build de producción
├── package.json
├── vite.config.ts       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
└── tsconfig.json        # Configuración de TypeScript
```

### 🎨 Sistema de Diseño

#### Colores de Marca

```css
brand-100: #FAF7F5  /* Fondo crema claro */
brand-300: #F2D0BA  /* Acento durazno suave */
brand-500: #C6421E  /* Naranja principal de marca */
brand-700: #2E2F34  /* Texto gris oscuro */
brand-900: #1B1B1D  /* Casi negro */
```

#### Tipografía

- **Encabezados:** DM Serif Display (serif)
- **Cuerpo:** Inter (sans-serif)

### 🚀 Comenzar

#### Requisitos Previos

- Node.js 18+ y npm

#### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/laylarodas/rovedrasl-website.git

# Navegar al directorio del proyecto
cd rovedrasl-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 📜 Scripts Disponibles

```bash
npm run dev       # Iniciar servidor de desarrollo con recarga en caliente
npm run build     # Compilar para producción (salida a /dist)
npm run preview   # Vista previa local del build de producción
npm run lint      # Ejecutar ESLint para calidad de código
```

### 🌐 Despliegue

El sitio se despliega automáticamente en Vercel:

1. Conectado al repositorio de GitHub
2. Despliegue automático al hacer push a la rama `main`
3. Dominio personalizado configurado: [reformasrovedra.es](https://reformasrovedra.es)

### 📧 Formulario de Contacto

El formulario de contacto funciona con [Formspree](https://formspree.io/), proporcionando:
- Protección contra spam
- Notificaciones por correo electrónico
- Gestión de envíos de formularios

### 🔍 Características SEO

- Meta tags personalizados por página
- Etiquetas Open Graph para compartir en redes sociales
- Sitemap.xml para motores de búsqueda
- Robots.txt para gestión de rastreadores
- Estructura HTML semántica
- Tiempos de carga de página rápidos

### 📄 Licencia

Este proyecto es propietario y confidencial. Todos los derechos reservados © 2025 Rovedra S.L.

### 🤝 Contribución

Este es un sitio web corporativo privado. Las contribuciones están limitadas a miembros autorizados del equipo.

---

**Built with ❤️ using Cursor AI**
