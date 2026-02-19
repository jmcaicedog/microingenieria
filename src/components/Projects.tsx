'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Sistema de Monitoreo Industrial',
    description:
      'Plataforma integral para el monitoreo en tiempo real de variables industriales con alertas automáticas y reportes personalizados.',
    image: '/projects/industrial-monitoring.jpg',
    tags: ['IoT', 'SCADA', 'React', 'Node.js'],
    category: 'industrial',
  },
  {
    id: 2,
    title: 'App de Telemedicina',
    description:
      'Aplicación móvil para consultas médicas remotas con integración de dispositivos biomédicos y expediente electrónico.',
    image: '/projects/telemedicine.jpg',
    tags: ['React Native', 'Firebase', 'Biomédico', 'Health'],
    category: 'biomedico',
  },
  {
    id: 3,
    title: 'Controlador PLC Personalizado',
    description:
      'Desarrollo de controlador lógico programable para automatización de líneas de producción en planta industrial.',
    image: '/projects/plc-controller.jpg',
    tags: ['PLC', 'Automatización', 'Electrónica', 'Industrial'],
    category: 'industrial',
  },
  {
    id: 4,
    title: 'Dashboard de Gestión Ambiental',
    description:
      'Panel de control para la CRC con visualización de datos ambientales, mapas interactivos y generación de informes.',
    image: '/projects/environmental-dashboard.jpg',
    tags: ['Next.js', 'GIS', 'Dashboard', 'PostgreSQL'],
    category: 'software',
  },
  {
    id: 5,
    title: 'Sistema de Rehabilitación',
    description:
      'Dispositivo electrónico para rehabilitación física con sensores de movimiento y feedback en tiempo real.',
    image: '/projects/rehabilitation.jpg',
    tags: ['Biomédico', 'Sensores', 'Bluetooth', 'App móvil'],
    category: 'biomedico',
  },
  {
    id: 6,
    title: 'Plataforma Educativa STEM',
    description:
      'Kit de robótica educativa con plataforma web para aprendizaje de programación y electrónica básica.',
    image: '/projects/stem-education.jpg',
    tags: ['Arduino', 'Educación', 'Web App', 'Robótica'],
    category: 'educativo',
  },
]

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'biomedico', name: 'Biomédico' },
  { id: 'software', name: 'Software' },
  { id: 'educativo', name: 'Educativo' },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('all')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="proyectos" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-500 text-sm font-medium mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Proyectos <span className="text-gradient">destacados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conoce algunos de los proyectos que hemos desarrollado para nuestros clientes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Carousel for Mobile, Grid for Desktop */}
        <div className="relative">
          {/* Scroll Buttons - Hidden on Mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Projects Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-full snap-center"
              >
                <div className="card-glass h-full overflow-hidden group">
                  {/* Image Container */}
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-dark-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent z-10" />
                    {/* Placeholder gradient - replace with actual images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                      <span className="text-6xl opacity-20">
                        {project.category === 'industrial' && '🏭'}
                        {project.category === 'biomedico' && '🏥'}
                        {project.category === 'software' && '💻'}
                        {project.category === 'educativo' && '🎓'}
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-colors duration-300 z-20 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="text-white" size={32} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-500 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">¿Tienes un proyecto en mente?</p>
          <motion.a
            href="#contacto"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Conversemos sobre tu idea
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
