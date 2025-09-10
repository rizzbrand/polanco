import { Navigation } from "@/components/navigation"
import { CarGrid } from "@/components/car-grid"

export const metadata = {
  title: "Luxury Car Inventory - Polanco",
  description: "Browse our exclusive collection of exotic and luxury cars for influencers and celebrities.",
}

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <CarGrid />
      </div>
    </main>
  )
}
