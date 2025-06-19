'use client'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/logo1.png"
        alt="Maximo Solutions Logo 1"
        width={96}
        height={64}
        className="h-16 w-24 object-contain"
      />
      <Image
        src="/logo2.png"
        alt="Maximo Solutions Logo 2"
        width={120}
        height={80}
        className="h-20 w-30 object-contain"
      />
      <div className="flex flex-col">
        
      </div>
    </div>
  )
}