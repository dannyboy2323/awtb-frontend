import { ImagePostcard } from '@/components/ui/image-postcard'

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <ImagePostcard
        src="/assets/story-0001/story-0001-postcard-0.webp"
        alt="Hola from Cuba - The Beginning"
        width={800}
        height={533}
        href="/story/00001/the-beginning"
        priority={true}
      />
    </div>
  )
}
