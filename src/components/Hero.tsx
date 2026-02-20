'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Cpu, Code, Wrench, Smartphone } from 'lucide-react'

const floatingIcons = [
  { Icon: Cpu, delay: 0, x: '10%', y: '20%' },
  { Icon: Code, delay: 0.5, x: '85%', y: '30%' },
  { Icon: Wrench, delay: 1, x: '15%', y: '70%' },
  { Icon: Smartphone, delay: 1.5, x: '80%', y: '75%' },
]

export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#servicios')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-16 md:pb-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb orb-orange" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb orb-blue" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 orb orb-orange opacity-30" style={{ animationDelay: '6s' }} />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
          >
            <Icon size={48} className="text-primary-500/30" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 md:mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">+10 años de experiencia</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1] mb-6"
          >
            <span className="text-white">Pequeños sistemas,</span>
            <br />
            <span className="text-gradient glow-text">grandes soluciones</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-balance leading-[1.1]"
          >
            Somos expertos en <span className="text-primary-500 font-semibold">instrumentación electrónica</span>,{' '}
            <span className="text-primary-500 font-semibold">automatización industrial</span> y{' '}
            <span className="text-primary-500 font-semibold">desarrollo de software</span> a la medida de tus necesidades.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contacto"
              className="btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Solicitar Cotización
            </motion.a>
            <motion.a
              href="#proyectos"
              className="btn-secondary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              { value: '+10', label: 'Años de experiencia' },
              { value: '+50', label: 'Proyectos completados' },
              { value: '+20', label: 'Clientes satisfechos' },
              { value: '100%', label: 'Compromiso' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="card-glass text-center py-4 md:py-6"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
          aria-label="Scroll to services"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}
