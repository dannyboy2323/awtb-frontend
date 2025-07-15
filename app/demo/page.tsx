import ImagePostcard from '../../components/ImagePostcard'

export default function DemoPage() {
  return (
    <ImagePostcard
      src="/assets/story-0001/story-0001-postcard-0.webp"
      alt="Hola from Cuba - The Beginning"
      title="Hola from Cuba"
      subtitle="The Beginning - A beautiful postcard from our Cuban adventure. Capturing the vibrant spirit and warmth of this incredible island."
      width={600}
      height={400}
    />
  )
}