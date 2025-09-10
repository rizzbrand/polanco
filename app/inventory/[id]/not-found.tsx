import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Car } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="mb-8">
            <Car className="w-24 h-24 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Vehicle Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The luxury vehicle you're looking for doesn't exist in our current inventory. Explore our exclusive
              collection of exotic cars.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Browse Inventory
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="glass bg-transparent">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
