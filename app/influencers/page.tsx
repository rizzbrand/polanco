"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { InfluencerCard } from "@/components/influencer-card"
import { InfluencerFilter } from "@/components/influencer-filter"
import { JoinTheClub } from "@/components/join-the-club"
import { influencers } from "@/lib/influencer-data"

export default function InfluencersPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredInfluencers = useMemo(() => {
    if (activeCategory === "all") return influencers
    return influencers.filter((influencer) => influencer.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">Clientele Spotlight</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the celebrities, influencers, and industry leaders who trust Polanco for their luxury
              automotive needs. Join an exclusive community that demands excellence.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InfluencerFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          </div>
        </section>

        {/* Influencers Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-muted-foreground text-center">
                Showing {filteredInfluencers.length} of {influencers.length} members
              </p>
            </div>

            {filteredInfluencers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">No members in this category</p>
                <p className="text-muted-foreground">Try selecting a different category</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInfluencers.map((influencer) => (
                  <InfluencerCard key={influencer.id} influencer={influencer} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Join the Club Section */}
        <JoinTheClub />
      </div>
    </main>
  )
}
