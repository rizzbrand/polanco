"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RotateCcw, Play, Pause } from "lucide-react"

interface Car360ViewerProps {
  carName: string
  baseImage: string
}

export function Car360Viewer({ carName, baseImage }: Car360ViewerProps) {
  const [currentAngle, setCurrentAngle] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(false)

  // Simulate 360° view with different angles
  const angles = [
    { angle: 0, label: "Front", image: baseImage },
    { angle: 45, label: "Front Right", image: baseImage },
    { angle: 90, label: "Right Side", image: baseImage },
    { angle: 135, label: "Rear Right", image: baseImage },
    { angle: 180, label: "Rear", image: baseImage },
    { angle: 225, label: "Rear Left", image: baseImage },
    { angle: 270, label: "Left Side", image: baseImage },
    { angle: 315, label: "Front Left", image: baseImage },
  ]

  const handleAngleClick = (index: number) => {
    setCurrentAngle(index)
    setIsAutoRotating(false)
  }

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating)
  }

  const resetView = () => {
    setCurrentAngle(0)
    setIsAutoRotating(false)
  }

  return (
    <Card className="glass p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-xl font-semibold text-foreground">360° View</h3>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={toggleAutoRotate} className="glass bg-transparent">
            {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button size="sm" variant="outline" onClick={resetView} className="glass bg-transparent">
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative mb-4">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
          <Image
            src={angles[currentAngle].image || "/placeholder.svg"}
            alt={`${carName} - ${angles[currentAngle].label}`}
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 glass-gold px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-foreground">{angles[currentAngle].label}</span>
        </div>
      </div>

      {/* Angle Selector */}
      <div className="flex justify-center">
        <div className="flex gap-1 p-2 glass rounded-full">
          {angles.map((angle, index) => (
            <button
              key={angle.angle}
              onClick={() => handleAngleClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentAngle === index ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`View ${angle.label}`}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}
