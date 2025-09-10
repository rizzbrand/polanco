"use client"
import { AnimatedCounter } from "./animated-counter"
import { ScrollReveal } from "./scroll-reveal"

export function LuxuryStats() {
  return (
    <ScrollReveal>
      <section className="py-20 glass border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={100} duration={2000} />+
              </div>
              <p className="text-muted-foreground font-medium">Luxury Vehicles Sold</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={50} duration={2000} />+
              </div>
              <p className="text-muted-foreground font-medium">Celebrity Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={5} duration={2000} />
              </div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={99} duration={2000} />%
              </div>
              <p className="text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
