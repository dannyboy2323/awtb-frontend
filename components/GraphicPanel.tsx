import Image from 'next/image'
import { ReactNode } from 'react'

interface GraphicPanelProps {
  src: string
  alt: string
  caption?: string
  className?: string
  priority?: boolean
  children?: ReactNode
}

export function GraphicPanel({ 
  src, 
  alt, 
  caption, 
  className = '', 
  priority = false,
  children 
}: GraphicPanelProps) {
  return (
    <div className={`my-8 ${className}`}>
      <div className="relative border-2 border-amber-200/20 rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-amber-900/20 to-orange-900/20">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          priority={priority}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        {children && (
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
      {caption && (
        <p className="text-sm text-amber-200/70 italic mt-2 text-center">
          {caption}
        </p>
      )}
    </div>
  )
}