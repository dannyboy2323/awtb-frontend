"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { StoryNavigation } from './story-navigation'
import { cn } from '@/lib/utils'

interface StoryLayoutProps {
  storyId: string
  storyName: string
  coverImageUrl: string
  mdxContent: string
  storyImages?: string[]
}

export function StoryLayout({ 
  storyId, 
  storyName, 
  coverImageUrl, 
  mdxContent,
  storyImages = []
}: StoryLayoutProps) {
  const [currentView, setCurrentView] = useState<'print' | 'book' | 'web'>('web')
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after cover art loads
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Story #${storyId}: ${storyName.replace(/-/g, ' ')}`,
          text: 'Check out this adventure story!',
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href)
      // Could show a toast notification here
    }
  }

  const getViewClasses = () => {
    switch (currentView) {
      case 'print':
        return 'story-print-view'
      case 'book':
        return 'story-book-view'
      case 'web':
      default:
        return 'story-web-view'
    }
  }

  const getContentClasses = () => {
    switch (currentView) {
      case 'print':
        return 'prose prose-lg max-w-none text-black'
      case 'book':
        return 'prose prose-journal max-w-none text-journal-ink font-journal'
      case 'web':
      default:
        return 'prose prose-lg max-w-none text-white'
    }
  }

  return (
    <div className={cn('min-h-screen transition-all duration-500', getViewClasses())}>
      <StoryNavigation
        storyId={storyId}
        storyName={storyName}
        currentView={currentView}
        onViewChange={setCurrentView}
        onShare={handleShare}
      />

      {/* Cover Art Section */}
      <section className="cover-art-container">
        <Image
          src={coverImageUrl}
          alt={`Cover art for ${storyName.replace(/-/g, ' ')}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="cover-art-overlay" />
        
        {/* Cover Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Story #{storyId}
            </h1>
            <h2 className="text-xl md:text-3xl font-light drop-shadow-md">
              {storyName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h2>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className={cn(
        'transition-all duration-1000',
        showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      )}>
        {currentView === 'book' ? (
          // Journal/Book View with paper background
          <div className="journal-paper min-h-screen">
            <div className="container mx-auto px-4 py-16">
              <div className="journal-margin max-w-4xl">
                <div className={getContentClasses()}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      img: ({ src, alt }) => (
                        <div className="my-8 relative">
                          <Image
                            src={typeof src === 'string' ? src : ''}
                            alt={alt || ''}
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                      ),
                      p: ({ children }) => (
                        <p className="mb-6 leading-relaxed indent-8">
                          {children}
                        </p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mb-8 text-center border-b-2 border-bull-brown pb-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold mb-6 mt-8">
                          {children}
                        </h2>
                      ),
                    }}
                  >
                    {mdxContent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Web/Print View
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className={getContentClasses()}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    img: ({ src, alt }) => (
                      <div className="my-8 relative">
                        <Image
                          src={typeof src === 'string' ? src : ''}
                          alt={alt || ''}
                          width={800}
                          height={600}
                          className="rounded-lg shadow-lg w-full h-auto"
                        />
                      </div>
                    ),
                  }}
                >
                  {mdxContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* Story Images Gallery */}
        {storyImages.length > 0 && (
          <section className="py-16 bg-black/50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">
                Story Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {storyImages.map((imageUrl, index) => (
                  <div key={index} className="relative aspect-video">
                    <Image
                      src={imageUrl}
                      alt={`Story image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </section>

      {/* Padding for navigation */}
      <div className="h-32" />
    </div>
  )
}