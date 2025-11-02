'use client'

import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function DraggableCardContainer({ children, className = '' }) {
  return (
    <div className={`relative ${className}`} style={{ perspective: '1000px' }}>
      {children}
    </div>
  )
}

export function DraggableCardBody({ children, className = '' }) {
  const ref = useRef(null)
  const canDragRef = useRef(true)
  const [isDragging, setIsDragging] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  const handleMouseMove = (e) => {
    if (!ref.current || isDragging) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsDragging(false)
    canDragRef.current = true
  }

  const handleMouseDown = (e) => {
    const target = e.target
    if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
      canDragRef.current = false
      return
    }
    canDragRef.current = true
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      drag
      dragListener={true}
      dragElastic={0.3}
      dragConstraints={false}
      dragPropagation={false}
      whileDrag={{ cursor: 'grabbing', scale: 1.05, zIndex: 50 }}
      onDragStart={(event, info) => {
        const target = event.target
        if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
          if (ref.current) {
            ref.current.style.transform = 'translate(0, 0)'
          }
          return false
        }
        setIsDragging(true)
      }}
      onDragEnd={() => {
        setIsDragging(false)
        canDragRef.current = true
      }}
      initial={false}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

