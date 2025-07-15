import { ReactNode } from 'react'

interface SceneTransitionProps {
  type?: 'divider' | 'chapter' | 'scene' | 'time'
  children?: ReactNode
}

export function SceneTransition({ 
  type = 'divider',
  children 
}: SceneTransitionProps) {
  const getTransitionStyles = () => {
    switch (type) {
      case 'chapter':
        return {
          container: 'my-12 py-8',
          text: 'text-2xl font-bold text-amber-300 text-center',
          decoration: 'w-32 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto mt-4'
        }
      case 'scene':
        return {
          container: 'my-8 py-6',
          text: 'text-lg font-semibold text-amber-200 text-center italic',
          decoration: 'w-20 h-0.5 bg-amber-500 mx-auto mt-3'
        }
      case 'time':
        return {
          container: 'my-6 py-4',
          text: 'text-base text-amber-200/80 text-center italic',
          decoration: 'w-16 h-0.5 bg-amber-600/60 mx-auto mt-2'
        }
      default: // divider
        return {
          container: 'my-8 py-4',
          text: 'text-base text-amber-200/70 text-center italic',
          decoration: 'w-24 h-0.5 bg-amber-500/70 mx-auto mt-2'
        }
    }
  }

  const styles = getTransitionStyles()

  if (!children) {
    // Just show a decorative divider
    return (
      <div className={styles.container}>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-0.5 bg-amber-500/50"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-8 h-0.5 bg-amber-500/50"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {children}
      </div>
      <div className={styles.decoration}></div>
    </div>
  )
}