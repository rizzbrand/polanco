"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { generateTimeSlots } from "@/lib/booking-data"
import type { TimeSlot } from "@/lib/booking-data"

interface DateTimePickerProps {
  selectedDate: string
  selectedTime: string
  onDateSelect: (date: string) => void
  onTimeSelect: (time: string) => void
}

export function DateTimePicker({ selectedDate, selectedTime, onDateSelect, onTimeSelect }: DateTimePickerProps) {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])

  // Generate next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const dates = generateDates()

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate)
      const slots = generateTimeSlots(date)
      setAvailableSlots(slots)
    }
  }, [selectedDate])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      {/* Date Selection */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            Select Date
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {dates.map((date) => {
              const dateString = date.toISOString().split("T")[0]
              const isSelected = selectedDate === dateString
              return (
                <Button
                  key={dateString}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  onClick={() => onDateSelect(dateString)}
                  className={
                    isSelected
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "glass bg-transparent hover:bg-primary/10 hover:text-primary"
                  }
                >
                  <div className="text-center">
                    <div className="text-xs">{formatDate(date)}</div>
                    <div className="font-semibold">{date.getDate()}</div>
                  </div>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Time Selection */}
      {selectedDate && (
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              Select Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {availableSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  size="sm"
                  disabled={!slot.available}
                  onClick={() => onTimeSelect(slot.time)}
                  className={
                    selectedTime === slot.time
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : slot.available
                        ? "glass bg-transparent hover:bg-primary/10 hover:text-primary"
                        : "opacity-50 cursor-not-allowed"
                  }
                >
                  {slot.time}
                </Button>
              ))}
            </div>
            {availableSlots.filter((slot) => slot.available).length === 0 && (
              <p className="text-center text-muted-foreground py-4">No available slots for this date</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
