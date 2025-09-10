"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Music, CheckCircle, Users, Quote } from "lucide-react"
import type { Influencer } from "@/lib/influencer-data"

interface InfluencerCardProps {
  influencer: Influencer
}

export function InfluencerCard({ influencer }: InfluencerCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="w-4 h-4" />
      case "youtube":
        return <Youtube className="w-4 h-4" />
      case "tiktok":
        return <Music className="w-4 h-4" />
      default:
        return <Instagram className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "musician":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "actor":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "athlete":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "content-creator":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30"
      case "entrepreneur":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <Card
      className="glass overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Car Image Background */}
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={influencer.carPurchased.image || "/placeholder.svg"}
            alt={`${influencer.carPurchased.make} ${influencer.carPurchased.model}`}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Influencer Profile Overlay */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="relative">
              <Image
                src={influencer.image || "/placeholder.svg"}
                alt={influencer.name}
                width={60}
                height={60}
                className="w-15 h-15 rounded-full border-2 border-primary object-cover"
              />
              {influencer.verified && (
                <CheckCircle className="absolute -top-1 -right-1 w-5 h-5 text-primary bg-background rounded-full" />
              )}
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-white">{influencer.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                {getPlatformIcon(influencer.platform)}
                <span>{influencer.handle}</span>
                <Users className="w-3 h-3 ml-1" />
                <span>{influencer.followers}</span>
              </div>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge className={getCategoryColor(influencer.category)} variant="outline">
              {influencer.category.replace("-", " ")}
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Car Details */}
        <div className="mb-4">
          <h4 className="font-heading text-xl font-semibold text-foreground mb-1">
            {influencer.carPurchased.make} {influencer.carPurchased.model}
          </h4>
          <p className="text-muted-foreground">{influencer.carPurchased.year}</p>
        </div>

        {/* Testimonial */}
        <div
          className={`transition-all duration-300 ${isHovered ? "max-h-40 opacity-100" : "max-h-20 opacity-100"} overflow-hidden`}
        >
          <div className="relative">
            <Quote className="w-6 h-6 text-primary mb-2" />
            <p className="text-sm text-muted-foreground leading-relaxed italic">{influencer.testimonial}</p>
          </div>
        </div>

        {/* Follow Button */}
        <div className="mt-4 pt-4 border-t border-border">
          <Button
            size="sm"
            variant="outline"
            className="w-full glass bg-transparent hover:bg-primary/10 hover:text-primary"
          >
            {getPlatformIcon(influencer.platform)}
            <span className="ml-2">Follow {influencer.handle}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
