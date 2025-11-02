'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FlipWords } from '@/components/ui/flip-words'
import { PixelatedCanvas } from '@/components/ui/pixelated-canvas'

export default function Home() {
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          {/* Hero Section with Pixelated Canvas */}
          <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 mt-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
              >
                Hi, I'm Jo Saji
              </motion.h1>
              
              <motion.p
                className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1, ease: 'easeOut' }}
              >
                Full-Stack Developer
              </motion.p>
              
              <motion.div
                className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.15, ease: 'easeOut' }}
              >
                Passionate about building <FlipWords words={['scalable', 'robust', 'innovative', 'cutting-edge']} /> web applications, exploring <FlipWords words={['AI technologies', 'machine learning', 'neural networks', 'deep learning']} />, and creating <FlipWords words={['innovative solutions', 'game-changing products', 'impactful solutions', 'revolutionary apps']} /> that make a difference.
              </motion.div>
            </motion.div>

            {/* Right Side - Pixelated Canvas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end"
            >
              <PixelatedCanvas
                src="/images/PIC1.jpg"
                width={350}
                height={450}
                cellSize={3}
                dotScale={0.8}
                shape="circle"
                backgroundColor="black"
                dropoutStrength={0.2}
                interactive
                distortionStrength={1.5}
                distortionRadius={50}
                distortionMode="swirl"
                followSpeed={0.4}
                jitterStrength={1}
                jitterSpeed={1.5}
                sampleAverage={false}
                tintColor="transparent"
                tintStrength={0.2}
                maxFps={24}
                className="rounded-xl border border-neutral-800 shadow-lg"
              />
            </motion.div>
          </div>

          {/* About Me Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mt-24 max-w-7xl mx-auto"
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-lg p-8 mb-8 border border-neutral-800"
            style={{ 
              background: 'rgba(23, 23, 31, 0.17)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-medium mb-6 text-white text-left">
               More About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Hi, I'm Jo Saji, a passionate full-stack developer and AI enthusiast dedicated to creating
              innovative solutions that solve real-world problems. With a strong foundation in both frontend
              and backend development, I specialize in building scalable web applications that integrate
              cutting-edge AI technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              My journey in technology has been driven by curiosity and a desire to continuously learn and
              grow. I enjoy working with modern frameworks and tools, exploring the latest AI advancements,
              and automating processes to improve efficiency.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or working on personal passion projects that push the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { category: 'Frontend', skills: ['React Native', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
                { category: 'Backend', skills: ['Node.js', 'Express', 'Expo', 'MongoDB', 'Python', 'FastAPI', 'PostgreSQL', 'Prisma'] },
                { category: 'AI', skills: ['OpenAI API', 'Ollama', 'Vector Databases', 'ML', 'LLM', 'Vector Search', 'LangChain'] },
                { category: 'Tools', skills: ['Docker', 'Git', 'CI/CD', 'Vercel', 'AWS', 'Figma', 'Canva', 'Postman'] },
  
              ].map((category, idx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.2, delay: idx * 0.02, ease: 'easeOut' }}
                  className="rounded-lg p-6"
                  style={{ 
                    background: 'transparent',

                  }}
                >
                  <h4 className="text-xl font-large mb-3 text-white text-center">{category.category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/10 rounded-xl text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mt-24 max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-medium mb-8 text-white text-center">
                Education
              </h2>
              
              <div className="space-y-6">
                {/* College */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.25, delay: 0.1, ease: 'easeOut' }}
                  className="rounded-lg p-6 md:p-8 border border-neutral-800"
                  style={{ 
                    background: 'rgba(23, 23, 31, 0.17)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Bachelor's Degree</h3>
                      <p className="text-lg text-gray-200 mb-1">Computer Science & Engineering</p>
                      <p className="text-sm text-blue-400 font-medium">St Jospehs college of engineering and technology</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-sm text-gray-300 font-medium">2022 - 2026</p>
                      <p className="text-xs text-gray-400">Expected Graduation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Currently pursuing my undergraduate degree with a focus on software engineering, 
                    artificial intelligence, and full-stack development. Actively involved in various 
                    projects and research initiatives.
                  </p>
                </motion.div>

                {/* High School */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.25, delay: 0.15, ease: 'easeOut' }}
                  className="rounded-lg p-6 md:p-8 border border-neutral-800"
                  style={{ 
                    background: 'rgba(23, 23, 31, 0)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Higher Secondary</h3>
                      <p className="text-lg text-gray-200 mb-1">Science Stream</p>
                      <p className="text-sm text-blue-400">St Antonys HSS Poonjar</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-sm text-gray-300 font-medium">2020 - 2022</p>
                      <p className="text-xs text-gray-400">Completed</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. 
                    Developed strong analytical and problem-solving skills during this period. 
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

