'use client'

import Image from 'next/image'
import { DraggableCardBody } from '@/components/ui/draggable-card'

export default function DraggableProjectCard({ project, className = '', onViewDetails }) {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onViewDetails) {
      onViewDetails(project)
    }
  }

  return (
    <DraggableCardBody className={className}>
      <div className="glass-card rounded-lg overflow-hidden glass-card-hover w-64 max-w-[85vw] shadow-2xl">
        <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover pointer-events-none"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
              {project.title.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="p-4 relative z-10">
          <h3 className="text-xl font-bold mb-2 text-white text-center">{project.title}</h3>
          <p className="text-gray-300 mb-3 text-xs leading-relaxed text-center">{project.description}</p>
          
          <div className="flex flex-wrap gap-1.5 mb-3 justify-center">
            {project.techStack?.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack?.length > 3 && (
              <span className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-gray-300">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          
          <div className="relative z-50" onMouseDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()}>
            <button
              onClick={handleClick}
              className="block w-full text-center px-2 py-1.5 bg-white text-gray-900 rounded-md text-xs font-medium hover:scale-105 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            >
              View More →
            </button>
          </div>
        </div>
      </div>
    </DraggableCardBody>
  )
}

