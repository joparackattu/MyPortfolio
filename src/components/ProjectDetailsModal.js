'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function ProjectDetailsModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Image Header */}
              <div className="relative h-64 w-full">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-t-2xl">
                    <span className="text-6xl font-bold text-white">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-t-2xl" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h2>

                {/* Overview Section */}
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.overview || project.description || 'This project demonstrates expertise in modern web development and innovative solutions.'}
                  </p>
                </section>

                {/* Challenges Section */}
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Challenges</h3>
                  <ul className="space-y-2 text-gray-300">
                    {project.challenges ? (
                      project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Implementing scalable architecture for growing user base</span>
                      </li>
                    )}
                  </ul>
                </section>

                {/* Solution Section */}
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Solution</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    {project.solution || 'Developed a robust solution using modern technologies and best practices to address the challenges effectively.'}
                  </p>
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-md text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </section>

                {/* Outcome Section */}
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Outcome</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.outcome || 'Successfully delivered a high-quality solution that meets all requirements and exceeds expectations.'}
                  </p>
                  {project.results && (
                    <ul className="mt-4 space-y-2 text-gray-300">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>

                {/* Action Button */}
                {project.link && project.link !== '#' && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
                    >
                      Visit Live Project →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


