"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { makes, models, years } from "@/lib/car-data"
import { X } from "lucide-react"

interface CarFiltersProps {
  onFiltersChange: (filters: {
    make: string
    model: string
    year: string
    priceRange: [number, number]
  }) => void
}

export function CarFilters({ onFiltersChange }: CarFiltersProps) {
  const [make, setMake] = useState("All Makes")
  const [model, setModel] = useState("All Models")
  const [year, setYear] = useState("All Years")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 4000000])

  const handleFilterChange = () => {
    onFiltersChange({ make, model, year, priceRange })
  }

  const clearFilters = () => {
    setMake("All Makes")
    setModel("All Models")
    setYear("All Years")
    setPriceRange([0, 4000000])
    onFiltersChange({ make: "All Makes", model: "All Models", year: "All Years", priceRange: [0, 4000000] })
  }

  return (
    <Card className="glass-gold p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-foreground">Filter Inventory</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Make</label>
          <Select value={make} onValueChange={setMake}>
            <SelectTrigger className="glass">
              <SelectValue placeholder="All Makes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Makes">All Makes</SelectItem>
              {makes.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Model</label>
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="glass">
              <SelectValue placeholder="All Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Models">All Models</SelectItem>
              {models.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Year</label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="glass">
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Years">All Years</SelectItem>
              {years.map((y) => (
                <SelectItem key={y} value={y.toString()}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button
            onClick={handleFilterChange}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Apply Filters
          </Button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-4">
          Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
        </label>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          max={4000000}
          min={0}
          step={50000}
          className="w-full"
        />
      </div>
    </Card>
  )
}
