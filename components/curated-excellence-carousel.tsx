"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const excellenceItems = [
  {
    id: 1,
    video: "/video.mp4",
    title: "Lamborghini Revuelto",
    description: "The pinnacle of luxury  with handcrafted excellence",
    category: "Ultra-Luxury",
  },
  {
    id: 2,
    video: "/video1.mp4",
    title: "Ferrari Purosangue",
    description: "Iconic design meets uncompromising performance",
    category: "Performance SUV",
  },
  {
    id: 3,
    video: "/video2.mp4",
    title: "Mclaren GT5",
    description: "Two-door coupe perfection with racing DNA",
    category: "Grand Tourer",
  },
]

export function CuratedExcellenceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % excellenceItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % excellenceItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + excellenceItems.length) % excellenceItems.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">Curated Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each vehicle in our collection represents the absolute pinnacle of automotive craftsmanship
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {excellenceItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 md:h-[500px]">
                    <video
                      className="w-full h-full object-cover"
                     src={item.video}
                     autoPlay
                     loop
                     muted
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <div className="text-sm font-semibold text-primary mb-2 tracking-wider">{item.category}</div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">{item.title}</h3>
                      <p className="text-lg text-gray-200 max-w-md">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass border-white/20 text-white hover:bg-white/10 w-12 h-12 bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass border-white/20 text-white hover:bg-white/10 w-12 h-12 bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {excellenceItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
