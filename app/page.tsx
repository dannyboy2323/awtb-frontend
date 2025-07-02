import { PostcardTrigger } from '@/components/PostcardTrigger'
import { CoinTrigger } from '@/components/CoinTrigger'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      {/* Main Title */}
      <div className="text-center mb-12 z-10 relative">
        {/* Main titles removed */}
      </div>

      {/* Story Selection Grid */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Placeholder for upcoming stories */}
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-amber-400/30 rounded-lg bg-amber-950/20">
            <CoinTrigger 
              href="/stories/coming-soon" 
              title="" 
              size="large"
              className="mb-4"
            />
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
        {/* Footer text removed */}
      </div>
    </div>
  )
}