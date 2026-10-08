'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  as?: 'div' | 'li' | 'article' | 'section' | 'span' | 'ul' | 'ol' | 'form'
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    const el = ref.current

    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      setSettled(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    const timer = setTimeout(() => setSettled(true), delay * 1000 + 900)

    return () => clearTimeout(timer)
  }, [visible, delay])

  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={settled ? className : `reveal ${className}`}
      data-reveal={visible ? '' : undefined}
      data-direction={direction}
      style={settled ? undefined : { transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
