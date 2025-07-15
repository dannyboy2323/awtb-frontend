'use client'

import { useState } from 'react'
import ImagePostcard from './ImagePostcard'

const examples = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Mountain landscape",
    title: "Mountain Adventure",
    subtitle: "Breathtaking views from the Swiss Alps"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Tropical beach",
    title: "Paradise Found",
    subtitle: "Crystal clear waters and white sandy beaches"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "City skyline",
    title: "Urban Dreams",
    subtitle: "The city that never sleeps"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Forest path",
    title: "Into the Wild",
    subtitle: "Where adventure begins"
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