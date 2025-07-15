import Image from 'next/image'

interface GraphicPanelProps {
  src: string
  alt: string
  caption?: string
  priority?: boolean
  width?: number
  height?: number
}

export function GraphicPanel({ 
  src, 
  alt, 
  caption, 
  priority = false,
  width = 800,
  height = 500
}: GraphicPanelProps) {
  return (
    <div className="my-8 mx-auto max-w-3xl">
      <div className="relative rounded-lg overflow-hidden shadow-2xl border border-amber-700/30">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto object-cover"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-amber-100 text-sm italic text-center">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}