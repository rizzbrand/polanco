"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Heart, Zap, Gauge } from "lucide-react"
import type { Car } from "@/lib/car-data"

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "reserved":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "sold":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <Card
      className="glass overflow-hidden group cursor-pointer transition-luxury hover-lift hover-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={`${car.make} ${car.model}`}
          width={600}
          height={400}
          className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getStatusColor(car.status)} variant="outline">
            {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button size="sm" variant="ghost" className="glass-gold text-primary hover:bg-primary/20 transition-luxury">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
              {car.make} {car.model}
            </h3>
            <p className="text-muted-foreground">{car.year}</p>
          </div>
          <div className="text-right">
            <p className="font-heading text-2xl font-bold text-primary">${car.price.toLocaleString()}</p>
          </div>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{car.specs.horsepower} HP</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{car.specs.acceleration}</span>
          </div>
        </div>

        {/* Hover Details */}
        <div
          className={`transition-all duration-500 ${isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="border-t border-border pt-4 mb-4">
            <p className="text-sm text-muted-foreground mb-2">Engine: {car.specs.engine}</p>
            <p className="text-sm text-muted-foreground mb-2">Top Speed: {car.specs.topSpeed}</p>
            <div className="flex flex-wrap gap-1">
              {car.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/inventory/${car.id}`} className="flex-1">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury hover-glow">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
