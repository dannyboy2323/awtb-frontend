import Link from 'next/link'
import Image from 'next/image'

interface PostcardTriggerProps {
  href: string
  title: string
  preview?: string
  imageSrc?: string
  className?: string
}

export function PostcardTrigger({ 
  href, 
  title, 
  preview, 
  imageSrc,
  className = '' 
}: PostcardTriggerProps) {
  return (
    <Link href={href}>
      <div className={`
        group relative overflow-hidden rounded-lg border-2 border-amber-200/20 
        bg-gradient-to-br from-amber-900/20 to-orange-900/20 
        hover:border-amber-300/40 hover:shadow-2xl hover:scale-105
        transition-all duration-300 cursor-pointer
        ${className}
      `}>
        {imageSrc && (
          <div className="aspect-[3/2] overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-4">
          <h3 className="font-bold text-amber-100 text-lg mb-2 group-hover:text-amber-50 transition-colors">
            {title}
          </h3>
          
          {preview && (
            <p className="text-amber-200/70 text-sm line-clamp-3 mb-3">
              {preview}
            </p>
          )}
          
          <div className="flex items-center text-amber-300 text-sm font-medium">
            <span>Read Story</span>
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}