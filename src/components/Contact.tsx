'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  Clock,
  Globe,
  AlertCircle,
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Carrera 15 # 8N-188',
    sublabel: 'Popayán, Cauca - Colombia',
    href: 'https://maps.google.com/?q=Carrera+15+8N-188+Popayan',
  },
  {
    icon: Phone,
    label: 'Teléfonos',
    value: '+57 602 8371099',
    sublabel: '+57 305 354 7411',
    href: 'tel:+573053547411',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'victor@microingenieria.net',
    sublabel: 'juanmanuel@microingenieria.net',
    href: 'mailto:victor@microingenieria.net',
  },
  {
    icon: Globe,
    label: 'Web',
    value: 'www.microingenieria.net',
    sublabel: 'Visita nuestro sitio',
    href: 'https://microingenieria.net',
  },
]

const services = [
  'Instrumentación electrónica',
  'Desarrollo de software',
  'Automatización industrial',
  'Aplicaciones móviles',
  'Dispositivos biomédicos',
  'Consultoría tecnológica',
  'Otro',
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formState.name,
          from_email: formState.email,
          phone: formState.phone,
          company: formState.company,
          service: formState.service,
          message: formState.message,
          to_email: 'juanmanuel@microingenieria.net',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.')
      console.error('EmailJS error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 orb orb-orange opacity-20" />
      <div className="absolute top-1/4 right-0 w-64 h-64 orb orb-blue opacity-10" />

      <div className="container-custom mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-500 text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            ¿Listo para <span className="text-gradient">comenzar</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-orange rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Información de contacto
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                      <item.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-primary-500 transition-colors">
                        {item.value}
                      </p>
                      {item.sublabel && (
                        <p className="text-gray-400 text-sm">{item.sublabel}</p>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Horario de atención</span>
                </div>
                <p className="text-white text-sm">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-400 text-sm">Sábados: 8:00 AM - 12:00 PM</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-3">También puedes escribirnos a:</p>
              <div className="flex flex-wrap gap-2">
                {['victor', 'juanmanuel', 'jose'].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}@microingenieria.net`}
                    className="tag hover:bg-primary-500/30"
                  >
                    {email}@microingenieria.net
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card-glass p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Envíanos un mensaje
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-gray-400">
                    Te responderemos muy pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="input-glass"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="input-glass"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="input-glass"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="input-glass"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="input-glass appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Selecciona un servicio
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-dark-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-glass resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
