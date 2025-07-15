import { ReactNode } from 'react'

interface JournalLayoutProps {
  title: string
  children: ReactNode
}

export function JournalLayout({ title, children }: JournalLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-100 mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="bg-amber-50/10 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl border border-amber-700/20">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}