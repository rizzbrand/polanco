"use client"

import { useState, useMemo } from "react"
import { CarCard } from "./car-card"
import { CarFilters } from "./car-filters"
import { cars } from "@/lib/car-data"
import type { Car } from "@/lib/car-data"

export function CarGrid() {
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    priceRange: [0, 4000000] as [number, number],
  })

  const filteredCars = useMemo(() => {
    return cars.filter((car: Car) => {
      const matchesMake = !filters.make || car.make === filters.make
      const matchesModel = !filters.model || car.model === filters.model
      const matchesYear = !filters.year || car.year.toString() === filters.year
      const matchesPrice = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1]

      return matchesMake && matchesModel && matchesYear && matchesPrice
    })
  }, [filters])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Luxury Inventory</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our exclusive collection of exotic cars, handpicked for those who demand excellence.
        </p>
      </div>

      <CarFilters onFiltersChange={setFilters} />

      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredCars.length} of {cars.length} vehicles
        </p>
      </div>

      {filteredCars.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground mb-4">No vehicles match your criteria</p>
          <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  )
}
