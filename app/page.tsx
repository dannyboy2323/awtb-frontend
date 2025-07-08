import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      {/* Postcard Overlay - Centered both vertically and horizontally */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <Link href="/stories/story-0001" className="pointer-events-auto">
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/postcard-hola-cuba.jpg"
              alt="Hola from Cuba Postcard"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300 rounded-lg"></div>
          </div>
        </Link>
      </div>
    </div>

  )
}
