'use client'

import { useState } from 'react'
import ImagePostcard from './ImagePostcard'

const examples = [
  {
    id: 1,
    src: "/assets/story-0001/story-0001-postcard-0.webp",
    alt: "Hola from Cuba - The Beginning",
    title: "Hola from Cuba",
    subtitle: "The Beginning - A beautiful postcard from our Cuban adventure"
  },
  {
    id: 2,
    src: "/assets/story-0001/story-0001-postcard-0.webp",
    alt: "Hola from Cuba - The Beginning",
    title: "Cuban Memories",
    subtitle: "Capturing the vibrant spirit and warmth of this incredible island"
  },
  {
    id: 3,
    src: "/assets/story-0001/story-0001-postcard-0.webp",
    alt: "Hola from Cuba - The Beginning",
    title: "Caribbean Journey",
    subtitle: "Every postcard tells a story of adventure and discovery"
  },
  {
    id: 4,
    src: "/assets/story-0001/story-0001-postcard-0.webp",
    alt: "Hola from Cuba - The Beginning",
    title: "Travel Chronicles",
    subtitle: "From the heart of Cuba with love and memories"
  }
]

export default function ImagePostcardExamples() {
  const [currentExample, setCurrentExample] = useState(0)

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length)
  }

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + examples.length) % examples.length)
  }

  return (
    <div className="relative">
      <ImagePostcard {...examples[currentExample]} />
      
      {/* Navigation controls - positioned over the postcard */}
      <div className="fixed inset-0 flex items-center justify-between px-8 pointer-events-none z-10">
        <button
          onClick={prevExample}
          className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
          aria-label="Previous example"
        >
          ←
        </button>
        <button
          onClick={nextExample}
          className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
          aria-label="Next example"
        >
          →
        </button>
      </div>
      
      {/* Example counter */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-10">
        <div className="bg-black/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
          {currentExample + 1} / {examples.length}
        </div>
      </div>
    </div>
  )
}