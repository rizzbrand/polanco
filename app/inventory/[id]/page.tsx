import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Car360Viewer } from "@/components/car-360-viewer"
import { FinancingOptions } from "@/components/financing-options"
import { InquiryForm } from "@/components/inquiry-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cars } from "@/lib/car-data"
import { ArrowLeft, Heart, Share2, Zap, Gauge, FuelIcon as Engine, GaugeIcon as Speedometer } from "lucide-react"

interface CarDetailPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }))
}

export async function generateMetadata({ params }: CarDetailPageProps) {
  const car = cars.find((c) => c.id === params.id)

  if (!car) {
    return {
      title: "Car Not Found - polanco",
    }
  }

  return {
    title: `${car.make} ${car.model} ${car.year} - polanco`,
    description: `Luxury ${car.make} ${car.model} available at polanco. ${car.specs.horsepower} HP, ${car.specs.acceleration}. Contact us for exclusive pricing.`,
  }
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = cars.find((c) => c.id === params.id)

  if (!car) {
    notFound()
  }

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
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/inventory">
              <Button variant="ghost" className="glass text-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Inventory
              </Button>
            </Link>
          </div>

          {/* Car Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                {car.make} {car.model}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{car.year} Model</p>
              <div className="flex items-center gap-4">
                <Badge className={getStatusColor(car.status)} variant="outline">
                  {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                </Badge>
                <p className="font-heading text-3xl font-bold text-primary">${car.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0">
              <Button size="sm" variant="outline" className="glass bg-transparent">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button size="sm" variant="outline" className="glass bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and 360 Viewer */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image */}
              <Card className="glass overflow-hidden">
                <div className="aspect-video">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.make} ${car.model}`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* 360 Viewer */}
              <Car360Viewer carName={`${car.make} ${car.model}`} baseImage={car.image} />

              {/* Specifications */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Engine className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Engine</p>
                        <p className="text-muted-foreground">{car.specs.engine}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Horsepower</p>
                        <p className="text-muted-foreground">{car.specs.horsepower} HP</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Gauge className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Acceleration</p>
                        <p className="text-muted-foreground">{car.specs.acceleration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Speedometer className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Top Speed</p>
                        <p className="text-muted-foreground">{car.specs.topSpeed}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Premium Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Financing and Inquiry */}
            <div className="space-y-6">
              <FinancingOptions carPrice={car.price} />
              <InquiryForm carName={`${car.make} ${car.model}`} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
