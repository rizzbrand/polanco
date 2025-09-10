import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LuxuryStats } from "@/components/luxury-stats"
import { FeaturedBrands } from "@/components/featured-brands"
import { CuratedExcellenceCarousel } from "@/components/curated-excellence-carousel"
import { CTAFooter } from "@/components/cta-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LuxuryStats />
      <FeaturedBrands />
      <CuratedExcellenceCarousel />
      <CTAFooter />
    </main>
  )
}
