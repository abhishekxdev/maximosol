// components/ui/custom-progress.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressProps {
  value?: number
  max?: number
  className?: string
}

export const Progress = ({ value = 0, max = 100, className }: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  
  return (
    <div className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}>
      <div 
        className="h-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
