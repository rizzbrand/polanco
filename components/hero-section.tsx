"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Eye, Star } from "lucide-react"

const MercedesStarIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M12 4L12 12L6.5 18M12 12L17.5 18M12 12L12 4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('/polanco.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="absolute top-16 left-4 md:top-20 md:left-10 text-primary/30 animate-pulse">
        <MercedesStarIcon />
      </div>
      <div className="absolute top-24 right-6 md:top-32 md:right-16 text-primary/20 animate-pulse delay-1000">
        <MercedesStarIcon />
      </div>
      <div className="absolute bottom-24 left-8 md:bottom-32 md:left-20 text-primary/25 animate-pulse delay-500">
        <MercedesStarIcon />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 md:mb-6 flex items-center justify-center gap-2 md:gap-4">
          <div className="w-8 md:w-12 h-0.5 bg-primary animate-fade-in"></div>
          <MercedesStarIcon />
          <div className="w-8 md:w-12 h-0.5 bg-primary animate-fade-in"></div>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-4 text-foreground animate-fade-in tracking-wider leading-tight">
         Polanco
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-primary font-bold animate-fade-in-delay tracking-widest">
       Exotic Car Dealer
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-left px-2">
          Curated collection of the world's most exclusive automobiles. Where engineering excellence meets
          uncompromising luxury for discerning collectors, influencers, and automotive connoisseurs.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 text-xs sm:text-sm text-muted-foreground animate-slide-in-up">
          <div className="flex items-center gap-1 md:gap-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>Concierge Service</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>Global Delivery</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span>Exclusive Access</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-slide-in-right px-2">
          <Link href="/inventory">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 px-8 sm:px-10 md:px-12 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover-glow font-bold tracking-wider shadow-2xl border border-primary/20 backdrop-blur-sm w-full sm:w-auto"
            >
              <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              EXPLORE INVENTORY
            </Button>
          </Link>
          <Link href="/booking">
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 border-primary/60 text-primary hover:bg-primary/20 hover:border-primary px-8 sm:px-10 md:px-12 py-4 md:py-6 text-base md:text-lg bg-black/20 backdrop-blur-md transition-all duration-300 hover-glow font-bold tracking-wider shadow-2xl w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              PRIVATE VIEWING
            </Button>
          </Link>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 md:w-14 md:h-14 shadow-lg transition-luxury hover-lift animate-scale-in"
          aria-label="Contact via WhatsApp"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Button>
      </div>
    </section>
  )
}
