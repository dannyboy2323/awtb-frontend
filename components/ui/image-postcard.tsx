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
    <div className="postcard-container">
      <div className="postcard-wrapper">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`postcard-image ${className}`}
          sizes="(max-width: 480px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, (max-width: 1440px) 75vw, 70vw"
        />
      </div>
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