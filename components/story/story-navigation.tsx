"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  ReaderIcon, 
  GlobeIcon, 
  Share1Icon,
  Pencil1Icon,
  EyeOpenIcon 
} from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface StoryNavigationProps {
  storyId: string
  storyName: string
  currentView: 'print' | 'book' | 'web'
  onViewChange: (view: 'print' | 'book' | 'web') => void
  onShare: () => void
}

export function StoryNavigation({ 
  storyId, 
  storyName, 
  currentView, 
  onViewChange, 
  onShare 
}: StoryNavigationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Auto-hide after 3 seconds of no interaction
    const autoHideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    // Show on mouse movement
    const handleMouseMove = () => {
      setIsVisible(true)
      clearTimeout(autoHideTimer)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(autoHideTimer)
    }
  }, [lastScrollY])

  const getViewIcon = (view: string) => {
    switch (view) {
      case 'print':
        return <Pencil1Icon className="w-4 h-4" />
      case 'book':
        return <ReaderIcon className="w-4 h-4" />
      case 'web':
        return <GlobeIcon className="w-4 h-4" />
      default:
        return <EyeOpenIcon className="w-4 h-4" />
    }
  }

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-bull-brown/20 nav-autohide",
        !isVisible && "hidden"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Bull Icon */}
        <div className="flex items-center space-x-3">
          <div className="bull-icon" />
          <span className="text-bull-horn font-semibold text-sm hidden sm:inline">
            Adventures with the Bull
          </span>
        </div>

        {/* View Controls */}
        <div className="flex items-center space-x-2">
          {/* View Mode Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-bull-brown/20 border-bull-brown text-bull-horn hover:bg-bull-brown/30">
                {getViewIcon(currentView)}
                <span className="hidden sm:inline ml-1">
                  {currentView.charAt(0).toUpperCase() + currentView.slice(1)} View
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem 
                onClick={() => onViewChange('web')}
                className={currentView === 'web' ? 'bg-bull-brown/20' : ''}
              >
                <GlobeIcon className="mr-2 h-4 w-4" />
                Web View
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onViewChange('book')}
                className={currentView === 'book' ? 'bg-bull-brown/20' : ''}
              >
                <ReaderIcon className="mr-2 h-4 w-4" />
                Book View
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onViewChange('print')}
                className={currentView === 'print' ? 'bg-bull-brown/20' : ''}
              >
                <Pencil1Icon className="mr-2 h-4 w-4" />
                Print View
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Share Button */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onShare}
            className="bg-bull-brown/20 border-bull-brown text-bull-horn hover:bg-bull-brown/30"
          >
            <Share1Icon className="w-4 h-4" />
            <span className="hidden sm:inline ml-1">Share</span>
          </Button>
        </div>
      </div>

      {/* Story Title Bar */}
      <div className="bg-bull-brown/10 px-4 py-2 border-t border-bull-brown/20">
        <div className="container mx-auto">
          <h1 className="text-bull-horn text-sm font-medium truncate">
            Story #{storyId}: {storyName.replace(/-/g, ' ')}
          </h1>
        </div>
      </div>
    </nav>
  )
}