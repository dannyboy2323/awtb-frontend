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

    </div>
  )
}
