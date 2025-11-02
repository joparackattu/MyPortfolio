'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-lg overflow-hidden glass-hover"
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
            {project.title.charAt(0)}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-sm font-medium hover:scale-105 transition-transform duration-200"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  )
}


