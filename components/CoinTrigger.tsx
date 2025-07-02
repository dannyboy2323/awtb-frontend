import Link from 'next/link'

interface CoinTriggerProps {
  href: string
  title: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export function CoinTrigger({ 
  href, 
  title, 
  className = '',
  size = 'medium'
}: CoinTriggerProps) {
  const sizeStyles = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  }

  return (
    <Link href={href}>
      <div className={`
        group relative inline-block cursor-pointer
        ${className}
      `}>
        <div className={`
          ${sizeStyles[size]}
          relative rounded-full border-2 border-amber-400/60
          bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600
          hover:from-amber-200 hover:via-amber-300 hover:to-amber-500
          hover:border-amber-300 hover:scale-110 hover:rotate-12
          transition-all duration-300 ease-out
          shadow-lg hover:shadow-2xl
        `}>
          {/* Coin texture/pattern */}
          <div className="absolute inset-1 rounded-full border border-amber-600/40 bg-gradient-to-br from-amber-300/80 to-amber-500/80">
            <div className="absolute inset-2 rounded-full border border-amber-700/30 flex items-center justify-center">
              <div className="text-amber-800 font-bold text-xs sm:text-sm uppercase tracking-wider text-center leading-tight">
                Story
              </div>
            </div>
          </div>
          
          {/* Shine effect */}
          <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-amber-100/60 group-hover:bg-amber-50/80 transition-colors"></div>
        </div>
        
        {/* Tooltip */}
        <div className="
          absolute -bottom-8 left-1/2 transform -translate-x-1/2
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          bg-amber-900/90 text-amber-100 text-xs px-2 py-1 rounded
          whitespace-nowrap pointer-events-none
        ">
          {title}
        </div>
      </div>
    </Link>
  )
}