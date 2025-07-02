import { ReactNode } from 'react'

interface JournalLayoutProps {
  children: ReactNode
  title?: string
}

export function JournalLayout({ children, title }: JournalLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950/90 via-orange-950/80 to-red-950/90">
      {/* Parchment-like overlay */}
      <div className="absolute inset-0 bg-[url('/assets/paper-texture.png')] opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {title && (
          <header className="text-center mb-12 border-b border-amber-400/20 pb-8">
            <h1 className="text-5xl font-bold text-amber-100 mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent to-amber-400/40 w-16"></div>
              <div className="text-amber-300 text-sm uppercase tracking-widest">
                Adventures with the Bull
              </div>
              <div className="h-px bg-gradient-to-l from-transparent to-amber-400/40 w-16"></div>
            </div>
          </header>
        )}
        
        <main className="prose prose-invert prose-amber max-w-none">
          {children}
        </main>
        
        <footer className="mt-16 pt-8 border-t border-amber-400/20 text-center">
          <div className="text-amber-200/60 text-sm">
            <p>© Adventures with the Bull — A serialized illustrated fiction</p>
          </div>
        </footer>
      </div>
    </div>
  )
}