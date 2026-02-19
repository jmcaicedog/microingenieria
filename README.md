# Microingeniería Aplicada - Sitio Web

Sitio web moderno desarrollado con Next.js 14, Tailwind CSS y Framer Motion para Microingeniería Aplicada SAS.

## Características

- **Diseño Glassmorphism**: Efectos de transparencia y blur modernos
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **100% Responsivo**: Adaptable a cualquier tamaño de pantalla
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **SEO Optimizado**: Metadata completa, sitemap y robots.txt
- **Navegación SPA**: Scroll suave entre secciones
- **Botón WhatsApp**: Contacto rápido flotante
- **PWA Ready**: Manifest para instalación como app

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css    # Estilos globales
│   ├── layout.tsx     # Layout principal con metadata SEO
│   └── page.tsx       # Página principal
├── components/
│   ├── Navbar.tsx     # Navegación responsive
│   ├── Hero.tsx       # Sección principal
│   ├── Services.tsx   # Servicios ofrecidos
│   ├── Projects.tsx   # Galería de proyectos
│   ├── Clients.tsx    # Logos de clientes
│   ├── Contact.tsx    # Formulario de contacto
│   ├── Footer.tsx     # Pie de página
│   └── WhatsAppButton.tsx  # Botón flotante
public/
├── logo-1.png         # Logo de la empresa
├── manifest.json      # PWA manifest
├── robots.txt         # Configuración SEO
└── sitemap.xml        # Mapa del sitio
```

## Instalación

```bash
# Clonar el repositorio
git clone <repo-url>

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar build de producción
npm start
```

## Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Vercel detectará automáticamente Next.js y desplegará

O usa el CLI de Vercel:

```bash
npm i -g vercel
vercel
```

## Personalización

### Colores
Los colores se definen en `tailwind.config.ts`:
- **Primary (Naranja)**: `#f37021`
- **Dark**: Escala de grises oscuros

### Contenido
- **Proyectos**: Editar en `src/components/Projects.tsx`
- **Servicios**: Editar en `src/components/Services.tsx`
- **Clientes**: Editar en `src/components/Clients.tsx`
- **Contacto**: Información en `src/components/Contact.tsx`

### WhatsApp
Cambiar número en `src/components/WhatsAppButton.tsx`:
```typescript
const WHATSAPP_NUMBER = '573162837638'
```

## Imágenes Requeridas

Agregar en la carpeta `public/`:
- `logo-1.png` - Logo de la empresa
- `favicon.ico` - Favicon
- `icon-192.png` - Icono PWA 192x192
- `icon-512.png` - Icono PWA 512x512
- `og-image.png` - Imagen para compartir en redes (1200x630)

## Formulario de Contacto

El formulario actual es una simulación. Para conectarlo con un backend real:

1. **EmailJS**: Usar la librería ya incluida
2. **API Route**: Crear en `src/app/api/contact/route.ts`
3. **Servicio externo**: Formspree, Netlify Forms, etc.

## SEO

La configuración SEO está en `src/app/layout.tsx`:
- Metadata Open Graph
- Twitter Cards
- Schema.org structured data (agregar si se requiere)
- Canonical URL

## Licencia

© 2026 Microingeniería Aplicada SAS. Todos los derechos reservados.
