import { PostcardTrigger } from '@/components/PostcardTrigger'
import { CoinTrigger } from '@/components/CoinTrigger'

export default function HomePage() {
  // Sample stories - these would typically come from a CMS or file system
  const stories = [
    {
      slug: 'the-beginning',
      title: 'The Beginning',
      preview: 'In a world where adventure calls from every shadow, our tale begins with a mysterious encounter that will change everything...',
      imageSrc: '/assets/story-preview-1.jpg'
    },
    // Add more stories as they're created
  ]

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">


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
              title="Coming Soon" 
              size="large"
              className="mb-4"
            />

          </div>
        </div>

        {/* Interactive elements scattered around */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <CoinTrigger href="/stories/hidden-tale" title="Hidden Tale" size="small" />
        </div>
        
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <CoinTrigger href="/stories/secret-path" title="Secret Path" size="medium" />
        </div>
      </div>


    </div>
  )
}