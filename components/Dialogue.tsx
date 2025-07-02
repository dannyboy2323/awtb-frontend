import { ReactNode } from 'react'

interface DialogueProps {
  speaker?: string
  mood?: 'normal' | 'whisper' | 'shout' | 'thought'
  position?: 'left' | 'center' | 'right'
  children: ReactNode
}

export function Dialogue({ 
  speaker, 
  mood = 'normal', 
  position = 'center',
  children 
}: DialogueProps) {
  const moodStyles = {
    normal: 'text-amber-100 border-amber-200/30',
    whisper: 'text-amber-200/80 border-amber-300/20 text-sm italic',
    shout: 'text-amber-50 border-red-400/40 font-bold text-xl',
    thought: 'text-amber-200/70 border-blue-300/20 italic'
  }

  const positionStyles = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto'
  }

  return (
    <div className={`my-6 max-w-md ${positionStyles[position]}`}>
      {speaker && (
        <div className="text-sm font-semibold text-amber-300 mb-1 uppercase tracking-wide">
          {speaker}
        </div>
      )}
      <div className={`
        p-4 rounded-lg border-2 bg-gradient-to-br from-amber-950/40 to-orange-950/40 
        backdrop-blur-sm shadow-lg
        ${moodStyles[mood]}
      `}>
        <div className="leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}