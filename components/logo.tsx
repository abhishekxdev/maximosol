'use client'
import Image from 'next/image'
import { memo } from 'react'

export const Logo = memo(() => {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2">
      <Image
        src="/logo1.png"
        alt="Maximo Solutions Logo 1"
        width={96}
        height={64}
        className="h-12 w-18 sm:h-16 sm:w-24 object-contain"
        priority
        sizes="(max-width: 768px) 72px, 96px"
      />
      <Image
        src="/logo2.png"
        alt="Maximo Solutions Logo 2"
        width={120}
        height={80}
        className="h-16 w-24 sm:h-20 sm:w-30 object-contain"
        priority
        sizes="(max-width: 768px) 96px, 120px"
      />
    </div>
  )
})

Logo.displayName = 'Logo'