'use client'

import { useState } from 'react'
import DraggableProjectCard from '@/components/DraggableProjectCard'
import { DraggableCardContainer } from '@/components/ui/draggable-card'
import ProjectDetailsModal from '@/components/ProjectDetailsModal'
import { motion } from 'framer-motion'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const projects = [
    {
      title: 'AI-Assisted Invoice Reconciliation System',
      description: 'An AI-powered automation system that reconciles customer invoices and applies credit details intelligently.',
      techStack: ['JavaScript', 'LLaMA 3', 'Node.js', 'Database Integration'],
      link: '#',
      image: '/images/PR11.jpg',
      className: 'absolute top-10 left-[6%] rotate-[-5deg]',
      overview: 'An AI-assisted invoice reconciliation system built for a transmission manufacturing company to automate discounts, credits, and customer balance management. The system uses a local LLM for natural language understanding and automatic database updates.',
      challenges: [
        'Accurately parsing human-language invoice details',
        'Automating credit and discount calculations',
        'Improving LLM accuracy for transactional updates',
        'Designing a user-friendly view for customers to track credits'
      ],
      solution: 'Implemented an AI-based data interpretation layer using LLaMA 3 for understanding invoice content. Automated credit application logic and integrated the model with a backend database for real-time updates.',
      outcome: 'Delivered a working AI automation prototype that reduced manual reconciliation time and improved accuracy in customer credit tracking.',
      results: [
        'Reduced manual reconciliation time by 70%',
        'Improved accuracy in credit tracking',
        'Automated multiple data-entry operations',
        'Enhanced financial workflow efficiency'
      ]
    },
    {
      title: 'SafeCircle — Personal Safety App',
      description: 'A mobile safety app to send emergency alerts and live locations via WhatsApp Cloud API.',
      techStack: ['React Native (CLI)', 'AsyncStorage', 'Node.js', 'WhatsApp Cloud API'],
      link: '#',
      image: '/images/PR6.jpg',
      className: 'absolute top-10 left-[28%] rotate-[-7deg]',
      overview: 'SafeCircle is a personal safety application that sends emergency alerts with live location to trusted contacts via WhatsApp Cloud API, while maintaining local event history using AsyncStorage.',
      challenges: [
        'Sending messages in background during emergencies',
        'Integrating WhatsApp Cloud API securely',
        'Maintaining local history without losing data',
        'Designing a simple, accessible panic interface'
      ],
      solution: 'Implemented a background task system for message triggers, connected to a Node.js backend for WhatsApp Cloud API calls, and stored emergency logs locally with AsyncStorage.',
      outcome: 'Built a reliable safety app that can send alerts instantly and maintain local event history, even offline.',
      results: [
        'Background alert messaging successfully implemented',
        'Offline history with local persistence',
        'Fast one-tap panic trigger',
        'Secure backend message relay integration'
      ]
    },
    {
      title: 'Rental Management System (RMS)',
      description: 'A modular dashboard-based app for managing rental services and user data.',
      techStack: ['React Native CLI', 'JavaScript', 'Tailwind CSS', 'AsyncStorage'],
      link: '#',
      image: '/images/PR3.jpg',
      className: 'absolute top-10 left-[50%] rotate-[8deg]',
      overview: 'A responsive rental service management system with shared headers, sidebar navigation, and dark mode support. It allows viewing and managing properties, clients, and payments efficiently.',
      challenges: [
        'Building shared layouts and dynamic routes',
        'Maintaining dark mode across pages',
        'Storing session and user data locally',
        'Designing responsive UI elements'
      ],
      solution: 'Created reusable components for headers and navigation, implemented dynamic styling with Tailwind CSS, and managed persistent user data through AsyncStorage.',
      outcome: 'Completed a stable and easy-to-navigate RMS frontend for rental service providers.',
      results: [
        'Improved user navigation and structure',
        'Added persistent data management',
        'Implemented dark mode seamlessly',
        'Enhanced interface usability'
      ]
    },
    {
      title: 'Drug Data Scraping & AI Extraction System',
      description: 'An AI-assisted data scraping solution for pharmaceutical datasets using Firecrawl and FastAPI.',
      techStack: ['Python', 'FastAPI', 'Firecrawl', 'MongoDB'],
      link: '#',
      image: '/images/PR13.jpg',
      className: 'absolute top-10 right-[7%] rotate-[2deg]',
      overview: 'A large-scale scraping and AI extraction system that collects structured drug data from Drugs.com and stores it in MongoDB. It uses Firecrawl for markdown parsing and schema-based data extraction.',
      challenges: [
        'Parsing unstructured data from dynamic web pages',
        'Maintaining crawling efficiency and avoiding duplication',
        'Extracting accurate brand and molecule information',
        'Handling multiple site structures and formats'
      ],
      solution: 'Integrated Firecrawl for markdown-based crawling, built a FastAPI backend for on-demand scraping, and stored results in MongoDB for structured access and querying.',
      outcome: 'Successfully developed an automated, schema-aware scraping system for real-time drug data retrieval.',
      results: [
        'Thousands of drug entries extracted accurately',
        'Automated daily updates and deduplication',
        'AI-based schema mapping for consistent results',
        'Backend API for querying structured data'
      ]
    },
    {
      title: 'Automation Tool Suite',
      description: 'A collection of Python automation scripts to simplify and optimize workflows.',
      techStack: ['Python', 'Selenium', 'REST APIs', 'Docker'],
      link: '#',
      image: '/images/PR4.jpg',
      className: 'absolute top-20 left-[18%] rotate-[10deg]',
      overview: 'A set of Python automation tools created to handle repetitive data tasks, scrape content, and interact with APIs efficiently across different environments.',
      challenges: [
        'Handling dynamic website elements during scraping',
        'Managing multiple API endpoints concurrently',
        'Ensuring automation consistency across setups',
        'Error handling and task retries in bulk jobs'
      ],
      solution: 'Developed modular Python scripts using Selenium and requests, implemented retry logic, and containerized them with Docker for reproducibility.',
      outcome: 'Reduced manual work and improved consistency across repeated web and data operations.',
      results: [
        'Automated multiple repetitive workflows',
        'Improved reliability across test environments',
        'Reduced data collection time by over 60%',
        'Maintained stable operations through Docker containers'
      ]
    },
    {
      title: 'Face Detection & Recognition System',
      description: 'A real-time face detection and identification system using live webcam feed.',
      techStack: ['Python', 'OpenCV', 'Face Recognition', 'NumPy'],
      link: '#',
      image: '/images/PR12.jpg',
      className: 'absolute top-20 left-[40%] rotate-[9deg]',
      overview: 'A live student recognition system that detects faces in real-time using a webcam, identifies students, and allows teachers to search and display specific student info when present.',
      challenges: [
        'Implementing real-time detection with minimal latency',
        'Maintaining accuracy under varied lighting and angles',
        'Linking detection with student info dynamically'
      ],
      solution: 'Used OpenCV for real-time frame processing and the Face Recognition library for identifying students from a trained dataset.',
      outcome: 'Built a functioning model capable of recognizing multiple students simultaneously in real-time.',
      results: [
        'Real-time face detection achieved',
        'High accuracy on trained datasets',
        'Dynamic student info search implemented',
        'Low-latency performance maintained'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      link: '#',
      image: '/images/PR9.jpg',
      className: 'absolute top-20 left-[63%] rotate-[-7deg]',
      overview: 'A fully responsive personal portfolio built with Next.js and Tailwind CSS, featuring smooth animations and project showcases to highlight professional experience and technical expertise.',
      challenges: [
        'Optimizing for fast loading and smooth animations',
        'Ensuring perfect responsiveness across screen sizes',
        'Presenting projects in an organized and engaging layout'
      ],
      solution: 'Used Framer Motion for subtle motion effects, Tailwind for adaptive styling, and deployed on Vercel for performance and reliability.',
      outcome: 'Delivered a polished, professional portfolio that effectively displays skills and achievements.',
      results: [
        'Loads under 2 seconds',
        'Fully responsive design',
        'Smooth transitions and animations',
        'Clean and modern visual presentation'
      ]
    }
        // Add more projects here by copying the structure above
    // Example:
  ]

  // Responsive positioning classes
  const getResponsiveClassName = (baseClass) => {
    return `${baseClass} hidden lg:block`
  }

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/BACK.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          willChange: 'transform',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-center mb-12 lg:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development.
          </p>
        </motion.div>

        {/* Desktop: Degradable Card Layout */}
        <DraggableCardContainer className="relative min-h-[900px] lg:min-h-[1000px] w-full overflow-clip mt-0">
          {/* Paragraph inside draggable area - cards can overlay it */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-44 left-0 right-0 w-full max-w-4xl mx-auto px-4 z-0 pointer-events-none hidden lg:block"
          >
            <p className="text-lg text-white leading-relaxed text-center">
              Throughout my journey, I've built diverse projects ranging from an AI-assisted invoice reconciliation system and a full-stack e-commerce platform to a real-time chat app and a data analytics dashboard. I also developed an automation tool suite to simplify workflows, SafeCircle for personal safety, and a modern portfolio website to showcase my work. Each project strengthened my skills in AI, web development, and automation, helping me grow into a versatile and solution-focused developer.
            </p>
          </motion.div>
          
          {projects.map((project, index) => (
            <DraggableProjectCard
              key={index}
              project={project}
              className={getResponsiveClassName(project.className)}
              onViewDetails={handleViewDetails}
            />
          ))}
        </DraggableCardContainer>

        {/* Mobile: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mb-0">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden glass-card-hover">
              <div className="relative h-40 bg-gradient-to-br from-blue-600 to-purple-600">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
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
                
                <button
                  onClick={() => handleViewDetails(project)}
                  className="inline-block px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium hover:scale-105 hover:bg-gray-100 transition-all duration-200 w-full text-center"
                >
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Paragraph for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto mt-8 lg:hidden px-4"
        >
          <div className="glass rounded-lg p-8 text-center">
            <p className="text-lg text-white leading-relaxed">
              Throughout my journey, I've built diverse projects ranging from an AI-assisted invoice reconciliation system and a full-stack e-commerce platform to a real-time chat app and a data analytics dashboard. I also developed an automation tool suite to simplify workflows, SafeCircle for personal safety, and a modern portfolio website to showcase my work. Each project strengthened my skills in AI, web development, and automation, helping me grow into a versatile and solution-focused developer.
            </p>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

