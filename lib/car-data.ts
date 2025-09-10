export interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  image: string
  specs: {
    engine: string
    horsepower: number
    acceleration: string
    topSpeed: string
  }
  features: string[]
  status: "available" | "sold" | "reserved"
}

export const cars: Car[] = [
  {
    id: "1",
    make: "Mercedes-Benz",
    model: "AMG GT 63 S",
    year: 2024,
    price: 185000,
    image: "/black-amg-gt63s.png",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: 630,
      acceleration: "0-60 mph in 3.1s",
      topSpeed: "196 mph",
    },
    features: ["AMG Performance 4MATIC+", "AMG Dynamic Select", "Carbon Fiber Trim", "Burmester Sound"],
    status: "available",
  },
  {
    id: "2",
    make: "Mercedes-Benz",
    model: "S-Class Maybach S680",
    year: 2024,
    price: 230000,
    image: "/mercedes-maybach-s680-black.png",
    specs: {
      engine: "6.0L Twin-Turbo V12",
      horsepower: 621,
      acceleration: "0-60 mph in 4.4s",
      topSpeed: "155 mph",
    },
    features: ["Executive Rear Seating", "Chauffeur Package", "Magic Body Control", "First-Class Rear"],
    status: "available",
  },
  {
    id: "3",
    make: "Range Rover",
    model: "SV",
    year: 2023,
    price: 2700000,
    image: "/2022-RangeRover.jpeg",
    specs: {
      engine: "1.6L Turbo V6 Hybrid",
      horsepower: 1063,
      acceleration: "0-60 mph in 2.9s",
      topSpeed: "219 mph",
    },
    features: ["F1 Technology", "Active Aerodynamics", "Hybrid Powertrain", "Track Mode"],
    status: "reserved",
  },
  {
    id: "4",
    make: "Mercedes-Benz",
    model: "G-Class AMG G63",
    year: 2024,
    price: 185000,
    image: "/black-g-wagon.png",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: 577,
      acceleration: "0-60 mph in 4.5s",
      topSpeed: "149 mph",
    },
    features: ["AMG Performance 4MATIC", "Off-Road Package", "Luxury Interior", "AMG Exhaust"],
    status: "available",
  },
  {
    id: "5",
    make: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    price: 625000,
    image: "/ferrari-sf90-stradale-red.png",
    specs: {
      engine: "4.0L V8 Hybrid",
      horsepower: 986,
      acceleration: "0-60 mph in 2.5s",
      topSpeed: "211 mph",
    },
    features: ["Hybrid Technology", "Active Aerodynamics", "Racing Seats", "Carbon Fiber Body"],
    status: "available",
  },
  {
    id: "6",
    make: "Mercedes-Benz",
    model: "EQS AMG 53",
    year: 2024,
    price: 165000,
    image: "/mercedes-eqs-amg-53-white.png",
    specs: {
      engine: "Electric Dual Motor",
      horsepower: 649,
      acceleration: "0-60 mph in 3.4s",
      topSpeed: "155 mph",
    },
    features: ["Electric Powertrain", "MBUX Hyperscreen", "Air Suspension", "AMG Sound Experience"],
    status: "available",
  },
]

export const makes = Array.from(new Set(cars.map((car) => car.make))).sort()
export const models = Array.from(new Set(cars.map((car) => car.model))).sort()
export const years = Array.from(new Set(cars.map((car) => car.year))).sort((a, b) => b - a)
