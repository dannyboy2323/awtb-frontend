import ImagePostcard from '../../components/ImagePostcard'

export default function DemoPage() {
  return (
    <ImagePostcard
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      alt="Beautiful mountain landscape"
      title="Mountain Adventure"
      subtitle="Breathtaking views from the peaks of the Swiss Alps. This postcard captures the serene beauty of nature's masterpiece."
      width={600}
      height={400}
    />
  )
}