import { ReactNode } from 'react'

interface DialogueProps {
  speaker: string
  mood?: 'normal' | 'whisper' | 'shout' | 'thought'
  position?: 'left' | 'center' | 'right'
  children: ReactNode
}

export function Dialogue({ 
  speaker, 
  mood = 'normal', 
  position = 'left',
  children 
}: DialogueProps) {
  const getMoodStyles = () => {
    switch (mood) {
      case 'whisper':
        return 'text-amber-200/70 italic text-sm'
      case 'shout':
        return 'text-amber-100 font-bold text-lg'
      case 'thought':
        return 'text-amber-200/80 italic border-dashed'
      default:
        return 'text-amber-100'
    }
  }

  const getPositionStyles = () => {
    switch (position) {
      case 'center':
        return 'text-center mx-auto'
      case 'right':
        return 'ml-auto text-right'
      default:
        return 'mr-auto text-left'
    }
  }

  const getBorderColor = () => {
    switch (mood) {
      case 'whisper':
        return 'border-amber-600/40'
      case 'shout':
        return 'border-amber-400'
      case 'thought':
        return 'border-amber-500/60'
      default:
        return 'border-amber-500'
    }
  }

  return (
    <div className={`my-6 max-w-2xl ${getPositionStyles()}`}>
      <div className={`p-4 rounded-lg border-l-4 bg-amber-900/30 backdrop-blur-sm ${getBorderColor()}`}>
        <div className="text-amber-300 text-xs font-semibold mb-2 uppercase tracking-wide">
          {speaker}
        </div>
        <div className={getMoodStyles()}>
          {children}
        </div>
      </div>
    </div>
  )
}