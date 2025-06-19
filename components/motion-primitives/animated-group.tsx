'use client'
import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  variants?: any
}

export function AnimatedGroup({ children, className, variants }: AnimatedGroupProps) {
  return (
    <div className={cn('animate-fade-in-up', className)}>
      {children}
    </div>
  )
}