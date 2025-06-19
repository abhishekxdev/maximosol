'use client'
import React from 'react'
import { cn } from '@/lib/utils'

interface TextEffectProps {
  children: React.ReactNode
  className?: string
  preset?: string
  speedSegment?: number
  delay?: number
  as?: keyof JSX.IntrinsicElements
  per?: string
}

export function TextEffect({ 
  children, 
  className, 
  preset, 
  speedSegment, 
  delay, 
  as: Component = 'div',
  per
}: TextEffectProps) {
  return (
    <Component className={cn('animate-fade-in-blur', className)}>
      {children}
    </Component>
  )
}