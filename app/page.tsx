import { PostcardTrigger } from '@/components/PostcardTrigger'
import { CoinTrigger } from '@/components/CoinTrigger'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  // Sample stories - these would typically come from a CMS or file system
  const stories = [
    {
      slug: 'the-beginning',
      title: '',
      preview: '',
      imageSrc: '/assets/story-preview-1.jpg'
    },
    // Add more stories as they're created
  ]

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      {/* Postcard Overlay - Centered both vertically and horizontally */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <Link href="/stories/story-0001" className="pointer-events-auto">
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/story-0001/story-0001-postcard-0.webp"
              alt="Story #0001 Postcard"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
              style={{ 
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.4))',
                transform: 'rotate(-2deg)'
              }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300 rounded-lg"></div>
          </div>
        </Link>
      </div>

      {/* Main Title */}
      <div className="text-center mb-12 z-10 relative">
        <h1 className="text-6xl md:text-8xl font-bold text-amber-100 mb-4 drop-shadow-2xl">
          
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-amber-200 mb-6 drop-shadow-xl">
          
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent to-amber-400/60 w-24"></div>
          <div className="text-amber-300 text-lg uppercase tracking-widest">
            
          </div>
          <div className="h-px bg-gradient-to-l from-transparent to-amber-400/60 w-24"></div>
        </div>
      </div>

      {/* Story Selection Grid */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story) => (
            <PostcardTrigger
              key={story.slug}
              href={`/stories/${story.slug}`}
              title={story.title}
              preview={story.preview}
              imageSrc={story.imageSrc}
              className="w-full max-w-sm mx-auto"
            />
          ))}
          
          {/* Placeholder for upcoming stories */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-amber-400/30 rounded-lg bg-amber-950/20">
            <CoinTrigger 
              href="/stories/coming-soon" 
              title="" 
              size="large"
              className="mb-4"
            />
            <p className="text-amber-200/70 text-center text-sm">
              
            </p>
          </div>
        </div>

        {/* Interactive elements scattered around */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <CoinTrigger href="/stories/hidden-tale" title="" size="small" />
        </div>
        
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <CoinTrigger href="/stories/secret-path" title="" size="medium" />
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 text-center z-10 relative">
        <div className="text-amber-200/60 text-sm mb-4">
          <p></p>
        </div>
        <div className="flex justify-center space-x-8 text-amber-300">
          <button className="hover:text-amber-100 transition-colors"></button>
          <button className="hover:text-amber-100 transition-colors"></button>
          <button className="hover:text-amber-100 transition-colors"></button>
        </div>
      </div>
    </div>
  )
}