'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Cpu,
  Code,
  Wrench,
  Smartphone,
  Activity,
  Gamepad2,
  Cloud,
  Shield,
} from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Instrumentación Electrónica',
    description:
      'Diseño y desarrollo de dispositivos electrónicos de monitorización y control para aplicaciones industriales y científicas.',
    features: ['Sensores', 'PLCs', 'Sistemas SCADA', 'Adquisición de datos'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Industrial',
    description:
      'Control, automatización y mantenimiento de equipos industriales. Reparación y calibración de instrumentos.',
    features: ['Automatización', 'Reparación', 'Calibración', 'Soporte técnico'],
  },
  {
    icon: Code,
    title: 'Desarrollo Full Stack',
    description:
      'Aplicaciones web modernas y escalables con las últimas tecnologías. Backend robusto y frontend intuitivo.',
    features: ['React/Next.js', 'Node.js', 'APIs REST', 'Bases de datos'],
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles Nativas',
    description:
      'Desarrollo de aplicaciones móviles nativas para iOS y Android con experiencia de usuario excepcional.',
    features: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    icon: Activity,
    title: 'Dispositivos Biomédicos',
    description:
      'Sistemas electrónicos especializados para diagnóstico y rehabilitación en el sector de la salud.',
    features: ['Monitoreo', 'Diagnóstico', 'Rehabilitación', 'Telemedicina'],
  },
  {
    icon: Gamepad2,
    title: 'Dispositivos Didácticos',
    description:
      'Diseño de dispositivos electrónicos educativos y videojuegos serios para el aprendizaje interactivo.',
    features: ['Educación STEM', 'Gamificación', 'IoT educativo', 'Robótica'],
  },
  {
    icon: Cloud,
    title: 'Arquitecturas Cloud',
    description:
      'Despliegue y gestión de aplicaciones en la nube con alta disponibilidad y escalabilidad.',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
  },
  {
    icon: Shield,
    title: 'Seguridad de Datos',
    description:
      'Protocolos de seguridad estrictos para garantizar la protección de datos y control de acceso.',
    features: ['Encriptación', 'Autenticación', 'Auditoría', 'Cumplimiento'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-custom mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-500 text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Soluciones <span className="text-gradient">integrales</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ofrecemos un amplio portafolio de servicios tecnológicos adaptados a las necesidades
            específicas de tu empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-glass group cursor-pointer"
            >
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-500" />
                </div>
                <div className="absolute -inset-2 bg-primary-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span key={feature} className="tag text-[10px]">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Nuestra <span className="text-gradient">metodología</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Un proceso estructurado para garantizar el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Definimos objetivos y requerimientos de tu proyecto',
              },
              {
                step: '02',
                title: 'Diseño',
                desc: 'Arquitectura hardware y software personalizada',
              },
              {
                step: '03',
                title: 'Desarrollo',
                desc: 'Implementación con prototipos y validación continua',
              },
              {
                step: '04',
                title: 'Despliegue',
                desc: 'Entrega, capacitación y soporte técnico',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="relative"
              >
                <div className="glass-orange rounded-xl p-6">
                  <span className="text-5xl font-bold text-primary-500/20 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-2 relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
