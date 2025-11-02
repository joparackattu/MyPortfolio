'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { cn } from '@/lib/utils'

function FlipWords({ words, duration = 2000, className }) {
  const memoizedWords = useMemo(() => words, [words])
  const [currentWord, setCurrentWord] = useState(memoizedWords[0])
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (!memoizedWords || memoizedWords.length === 0) return
    
    let index = 0

    const interval = setInterval(() => {
      setIsFlipping(true)
      
      setTimeout(() => {
        index = (index + 1) % memoizedWords.length
        setCurrentWord(memoizedWords[index])
        setIsFlipping(false)
      }, 200)
    }, duration)

    return () => clearInterval(interval)
  }, [memoizedWords, duration])

  return (
    <span
      className={cn(
        'inline-block relative mx-1',
        className
      )}
      style={{ 
        perspective: '1000px',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <span
        className="inline-block text-white font-semibold"
        style={{
          transform: isFlipping ? 'rotateX(90deg) translateZ(0)' : 'rotateX(0deg) translateZ(0)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease-out',
          willChange: 'transform',
        }}
      >
        {currentWord}
      </span>
    </span>
  )
}

export { FlipWords }
export default FlipWords
