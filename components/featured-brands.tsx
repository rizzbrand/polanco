"use client"

import { ScrollReveal } from "./scroll-reveal"

const brands = [
  { name: "Mercedes-Benz", logo: "/black-amg-gt63s.png" },
  { name: "Ferrari", logo: "/polanco.jpg" },
  { name: "Lamborghini", logo: "/img-2.jpg" },
  { name: "Porsche", logo: "/porsche.jpg" },
  { name: "McLaren", logo: "/mc.jpg" },
  { name: "Aston Martin", logo: "/am.jpg" },
]

export function FeaturedBrands() {
  return (
    <ScrollReveal>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Curated Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We represent the world's most prestigious automotive brands, each vehicle hand-selected for its
              exceptional craftsmanship and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="glass-gold rounded-lg p-6 text-center hover:scale-105 transition-luxury hover-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full glass border border-primary/30 flex items-center justify-center text-primary font-bold text-xl">
                  <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-cover rounded-full" 
                  />

          
                </div>
                <p className="text-sm font-medium text-muted-foreground">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
