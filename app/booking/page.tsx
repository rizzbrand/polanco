import { Navigation } from "@/components/navigation"
import { BookingForm } from "@/components/booking-form"

export const metadata = {
  title: "Book Your Experience - Polanco",
  description: "Schedule a test drive, virtual consultation, or private showroom visit with Polanco.",
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Luxury Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a personalized appointment to experience the extraordinary. Choose from test drives, virtual
              consultations, or exclusive showroom visits.
            </p>
          </div>

          <BookingForm />
        </div>
      </div>
    </main>
  )
}
