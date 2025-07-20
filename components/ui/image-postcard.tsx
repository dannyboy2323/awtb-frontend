import Image from 'next/image'
import Link from 'next/link'

interface ImagePostcardProps {
  src: string
  alt: string
  width: number
  height: number
  href?: string
  className?: string
  priority?: boolean
}

export function ImagePostcard({
  src,
  alt,
  width,
  height,
  href,
  className = '',
  priority = false
}: ImagePostcardProps) {
  const imageElement = (
    <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`postcard-responsive rounded-lg shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 ${className}`}
        sizes="(max-width: 480px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, (max-width: 1440px) 400px, 450px"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 rounded-lg pointer-events-none"></div>
    </div>
  )

  const containerStyles = "fixed inset-0 w-full h-full flex items-center justify-center z-50 pointer-events-none"

  if (href) {
    return (
      <div className={containerStyles}>
        <Link href={href} className="pointer-events-auto group">
          {imageElement}
        </Link>
      </div>
    )
  }

  return (
    <div className={containerStyles}>
      <div className="pointer-events-auto group">
        {imageElement}
      </div>
    </div>
  )
}