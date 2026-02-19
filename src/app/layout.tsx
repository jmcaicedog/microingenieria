import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://microingenieria.net'),
  title: {
    default: 'Microingeniería Aplicada | Soluciones Tecnológicas de Alto Impacto',
    template: '%s | Microingeniería Aplicada'
  },
  description: 'Microingeniería Aplicada SAS - Más de 10 años diseñando soluciones tecnológicas. Especialistas en instrumentación electrónica, automatización industrial, desarrollo de software y aplicaciones móviles en Popayán, Colombia.',
  keywords: [
    'instrumentación electrónica',
    'automatización industrial',
    'desarrollo de software',
    'aplicaciones móviles',
    'dispositivos biomédicos',
    'IoT',
    'Popayán',
    'Colombia',
    'microingeniería',
    'electrónica',
    'mantenimiento industrial',
    'desarrollo web',
    'sistemas embebidos'
  ],
  authors: [{ name: 'Microingeniería Aplicada SAS' }],
  creator: 'Microingeniería Aplicada SAS',
  publisher: 'Microingeniería Aplicada SAS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://microingenieria.net',
    siteName: 'Microingeniería Aplicada',
    title: 'Microingeniería Aplicada | Soluciones Tecnológicas de Alto Impacto',
    description: 'Más de 10 años diseñando soluciones tecnológicas. Especialistas en instrumentación electrónica, automatización industrial y desarrollo de software.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Microingeniería Aplicada - Pequeños sistemas, grandes soluciones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microingeniería Aplicada | Soluciones Tecnológicas',
    description: 'Especialistas en instrumentación electrónica, automatización industrial y desarrollo de software.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://microingenieria.net',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="geo.region" content="CO-CAU" />
        <meta name="geo.placename" content="Popayán" />
      </head>
      <body className="animated-gradient min-h-screen">
        {children}
      </body>
    </html>
  )
}
