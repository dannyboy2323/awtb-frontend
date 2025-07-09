import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Responsive Postcard Overlay */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <Link 
          href="/read/story/00001/the-beginning" 
          className="pointer-events-auto group"
        >
          <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105">
            <Image
              src="https://cdn.adventureswiththebull.com/assets/story-0001/story-0001-postcard-0.webp"
              alt="Hola from Cuba - The Beginning"
              width={400}
              height={267}
              priority
              className="postcard-responsive rounded-lg shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
              sizes="(max-width: 480px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, (max-width: 1440px) 400px, 450px"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 rounded-lg pointer-events-none"></div>
          </div>
        </Link>
      </div>
    </div>
  )
}
