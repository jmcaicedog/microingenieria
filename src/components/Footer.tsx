'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Instagram, Facebook, ArrowUp } from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Instrumentación', href: '#servicios' },
    { name: 'Desarrollo Web', href: '#servicios' },
    { name: 'Apps Móviles', href: '#servicios' },
    { name: 'Automatización', href: '#servicios' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { name: 'Política de privacidad', href: '#' },
    { name: 'Términos de servicio', href: '#' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <div className="relative w-56 h-16 md:w-48 md:h-14">
                <Image
                  src="/logo.png"
                  alt="Microingeniería Logo"
                  fill
                  sizes="(max-width: 768px) 224px, 192px"
                  className="object-contain object-left"
                />
              </div>

            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Más de 10 años diseñando soluciones tecnológicas de alto impacto.
              Pequeños sistemas, grandes soluciones.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-white/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500 text-xs mb-1">Dirección</span>
                Carrera 15 # 8N-188
                <br />
                Popayán, Cauca - Colombia
              </li>
              <li>
                <span className="block text-gray-500 text-xs mb-1">Teléfono</span>
                <a href="tel:+573053547411" className="hover:text-primary-500 transition-colors">
                  +57 305 354 7411
                </a>
              </li>
              <li>
                <span className="block text-gray-500 text-xs mb-1">Email</span>
                <a
                  href="mailto:info@microingenieria.net"
                  className="hover:text-primary-500 transition-colors"
                >
                  info@microingenieria.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Microingeniería Aplicada SAS. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-500 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
