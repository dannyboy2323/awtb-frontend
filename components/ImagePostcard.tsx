import Image from 'next/image'

interface ImagePostcardProps {
  src: string
  alt: string
  title?: string
  subtitle?: string
  width?: number
  height?: number
}

export default function ImagePostcard({ 
  src, 
  alt, 
  title, 
  subtitle,
  width = 400,
  height = 500
}: ImagePostcardProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        {/* Image container with postcard styling */}
        <div className="relative mb-4 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        
        {/* Optional title and subtitle */}
        {title && (
          <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <p className="text-gray-600 text-center text-sm leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {/* Postcard styling details */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>Postcard</span>
            <span>Made with ❤️</span>
          </div>
        </div>
      </div>
    </div>
  )
}