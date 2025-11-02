'use client'

import { motion } from 'framer-motion'
import { CardSpotlight } from '@/components/ui/card-spotlight'

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-blue-400 mt-0.5 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  )
}

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Compitivia Technologies',
      period: '2025 june - Present',
      description: 'worked in various client projects and research projects to improve my skills and knowledge.',
      achievements: [
        'Developed various frontend and backend projects',
        'Worked on various projects using various technologies',
        'Was among the research team for AI based development',
        'took part in various client meetings to understand their requirements and provide solutions',
      ],
    },
    {
      title: 'Frontend Developer (Academic Project)',
      company: 'College Project - Rental Management System',
      period: 'March 2025 - June 2025',
      description: 'Developed a frontend for a Rental Management System with dashboard and navigation features.',
      achievements: [
        'Created a modular dashboard with shared headers and bottom navigation bar',
        'Implemented dynamic dark mode and responsive layouts',
        'Integrated frontend with mock APIs for testing',
        'Worked collaboratively with team members to manage UI components and design consistency',
      ],
    },
    {
      title: 'Academic Mini Project',
      company: 'college',
      period: '2024 - 2025',
      description: 'My college mini an Emergency Response Application was selected as the Top 20 Startup Ideas by ISL 2025 ',
      achievements: [
        'learned about the startup ecosystem and the importance of innovation and entrepreneurship',
        'worked on the business plan and the pitch deck for the project',
        'learned about the importance of pitching and the art of pitching',
      ],
    },
    {
      title: 'National technical fest Leader',
      company: 'college',
      period: '2025',
      description: 'Lead the team of 40 members to represent the college in the national technical fest ASTHRA 2025',
      achievements: [
        'Build a 8 foot working model and deliverd within the time frame',
        'Guided and managed the team to decorate an entire department of the college',
        'Managed Financials ,Resources and Budgeting for the event',
      ],
    },
  ]

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
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05, ease: 'easeOut' }}
            >
              <CardSpotlight className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 relative z-20">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                    <p className="text-lg text-blue-400 mb-2">{experience.company}</p>
                    <p className="text-sm text-neutral-400">{experience.period}</p>
                  </div>
                </div>

                <p className="text-neutral-200 leading-relaxed mb-4 relative z-20">
                  {experience.description}
                </p>

                <div className="relative z-20">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2 list-none">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckIcon />
                        <p className="text-white">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

 
        </div>
      </div>
    </div>
  )
}

