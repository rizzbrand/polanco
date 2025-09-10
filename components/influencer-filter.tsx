"use client"

import { Button } from "@/components/ui/button"
import { categories } from "@/lib/influencer-data"

interface InfluencerFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function InfluencerFilter({ activeCategory, onCategoryChange }: InfluencerFilterProps) {
  const allCategories = ["all", ...categories]

  const getCategoryLabel = (category: string) => {
    if (category === "all") return "All"
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {allCategories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={
            activeCategory === category
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "glass bg-transparent hover:bg-primary/10 hover:text-primary"
          }
        >
          {getCategoryLabel(category)}
        </Button>
      ))}
    </div>
  )
}
