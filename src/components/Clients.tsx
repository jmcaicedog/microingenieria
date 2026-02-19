'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const clients = [
  {
    name: 'Universidad del Cauca',
    logo: '/clients/unicauca.png',
    category: 'Educación',
  },
  {
    name: 'Hidráulica Sanitaria SAS',
    logo: '/clients/hidraulica.png',
    category: 'Industrial',
  },
  {
    name: 'Comfacauca',
    logo: '/clients/comfacauca.png',
    category: 'Social',
  },
  {
    name: 'María Cano Fundación Universitaria',
    logo: '/clients/maria-cano.png',
    category: 'Educación',
  },
  {
    name: 'CRIC',
    logo: '/clients/cric.png',
    category: 'Institucional',
  },
  {
    name: 'CRC - Corporación Autónoma Regional del Cauca',
    logo: '/clients/crc.png',
    category: 'Ambiental',
  },
  {
    name: 'Hospital Susana López de Valencia',
    logo: '/clients/hospital.png',
    category: 'Salud',
  },
  {
    name: 'PVC Global Constructions',
    logo: '/clients/pvc-global.png',
    category: 'Construcción',
  },
  {
    name: 'Instituto Melvin Jones',
    logo: '/clients/melvin-jones.png',
    category: 'Educación',
  },
]

const testimonials = [
  {
    quote:
      'Microingeniería desarrolló para nosotros un sistema de monitoreo que ha mejorado significativamente nuestra eficiencia operativa.',
    author: 'Director de Operaciones',
    company: 'Hidráulica Sanitaria SAS',
  },
  {
    quote:
      'El equipo de Microingeniería demostró gran profesionalismo y conocimiento técnico en el desarrollo de nuestra aplicación.',
    author: 'Jefe de Sistemas',
    company: 'Universidad del Cauca',
  },
]

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clientes" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container-custom mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-500 text-sm font-medium mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Confían en <span className="text-gradient">nosotros</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empresas e instituciones que han confiado en nuestras soluciones tecnológicas.
          </p>
        </motion.div>

        {/* Clients Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group"
            >
              <div className="card-glass flex flex-col items-center justify-center py-6 px-4 h-32 md:h-36">
                {/* Placeholder for logo */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors duration-300">
                  <span className="text-2xl md:text-3xl font-bold text-primary-500/60 group-hover:text-primary-500 transition-colors">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-center text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-xl md:text-2xl font-display font-bold text-white text-center mb-8">
            Lo que dicen de nosotros
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-orange rounded-2xl p-6 md:p-8"
              >
                <div className="text-primary-500 text-4xl mb-4">&ldquo;</div>
                <p className="text-gray-300 text-base md:text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="text-primary-500 font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 md:gap-12 text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">100% Proyectos entregados</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Soporte continuo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">Garantía de calidad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
