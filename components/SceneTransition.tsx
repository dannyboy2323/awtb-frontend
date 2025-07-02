import { ReactNode } from 'react'

interface SceneTransitionProps {
  type?: 'fade' | 'divider' | 'chapter'
  children?: ReactNode
}

export function SceneTransition({ type = 'divider', children }: SceneTransitionProps) {
  if (type === 'fade') {
    return (
      <div className="my-12 h-24 bg-gradient-to-b from-transparent via-amber-900/20 to-transparent">
        {children && (
          <div className="flex items-center justify-center h-full text-amber-200/60 text-sm italic">
            {children}
          </div>
        )}
      </div>
    )
  }

  if (type === 'chapter') {
    return (
      <div className="my-16 text-center">
        <div className="inline-flex items-center space-x-4">
          <div className="h-px bg-gradient-to-r from-transparent to-amber-400/40 w-12"></div>
          <div className="text-amber-300 font-bold uppercase tracking-widest text-sm">
            {children || 'Chapter Break'}
          </div>
          <div className="h-px bg-gradient-to-l from-transparent to-amber-400/40 w-12"></div>
        </div>
      </div>
    )
  }

  // Default divider
  return (
    <div className="my-8 text-center">
      <div className="inline-flex items-center space-x-2">
        <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
        <div className="w-2 h-2 bg-amber-400/40 rounded-full"></div>
        <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
      </div>
      {children && (
        <div className="mt-4 text-amber-200/60 text-sm italic">
          {children}
        </div>
      )}
    </div>
  )
}