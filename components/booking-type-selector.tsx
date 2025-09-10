"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Video, Building, Truck, Clock, DollarSign } from "lucide-react"
import type { BookingType } from "@/lib/booking-data"

interface BookingTypeSelectorProps {
  bookingTypes: BookingType[]
  selectedType: string
  onTypeSelect: (typeId: string) => void
}

export function BookingTypeSelector({ bookingTypes, selectedType, onTypeSelect }: BookingTypeSelectorProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "car":
        return <Car className="w-8 h-8" />
      case "video":
        return <Video className="w-8 h-8" />
      case "building":
        return <Building className="w-8 h-8" />
      case "truck":
        return <Truck className="w-8 h-8" />
      default:
        return <Car className="w-8 h-8" />
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Select Booking Type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bookingTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer transition-all duration-200 ${
              selectedType === type.id
                ? "glass-gold border-primary shadow-lg scale-105"
                : "glass hover:glass-gold hover:scale-102"
            }`}
            onClick={() => onTypeSelect(type.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${selectedType === type.id ? "bg-primary/20" : "bg-muted/20"}`}>
                  <div className={selectedType === type.id ? "text-primary" : "text-muted-foreground"}>
                    {getIcon(type.icon)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-heading text-lg font-semibold text-foreground">{type.title}</h4>
                    {type.price && (
                      <Badge variant="outline" className="text-primary border-primary/30">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {type.price}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{type.duration}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
