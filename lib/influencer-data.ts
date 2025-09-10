export interface Influencer {
  id: string
  name: string
  handle: string
  platform: "instagram" | "youtube" | "tiktok"
  followers: string
  image: string
  carPurchased: {
    make: string
    model: string
    year: number
    image: string
  }
  testimonial: string
  verified: boolean
  category: "musician" | "actor" | "athlete" | "content-creator" | "entrepreneur"
}

export const influencers: Influencer[] = [
  {
    id: "1",
    name: "Burna Boy",
    handle: "@mburnaboygram",
    platform: "instagram",
    followers: "18.3M",
    image: "/burna.jpg",
    carPurchased: {
      make: "Ferrari",
      model: "Purosangue",
      year: 2024,
      image: "/lamborghini-huracan-evo.png",
    },
    testimonial:
      "Polanco delivered beyond expectations. The service was impeccable, and my Huracán is absolutely perfect. This is where luxury meets excellence.",
    verified: true,
    category: "musician",
  },
  {
    id: "2",
    name: "HeisRema",
    handle: "@Heisrema",
    platform: "instagram",
    followers: "7.1M",
    image: "/rema.jpg",
    carPurchased: {
      make: "McLaren GT5",
      model: "SF90 Stradale",
      year: 2024,
      image: "/ferrari-sf90-stradale-red.png",
    },
    testimonial:
      "From the moment I walked in, I knew I was in the right place. The team at polanco understands luxury and delivers it flawlessly.",
    verified: true,
    category: "content-creator",
  },
  {
    id: "3",
    name: "David Rodriguez",
    handle: "@davidr_athlete",
    platform: "instagram",
    followers: "3.1M",
    image: "/david-rodriguez-profile.png",
    carPurchased: {
      make: "McLaren",
      model: "720S",
      year: 2023,
      image: "/mclaren-720s-orange.png",
    },
    testimonial:
      "Performance on and off the field matters to me. My McLaren from polanco delivers the same excellence I demand in everything I do.",
    verified: true,
    category: "athlete",
  },
  {
    id: "4",
    name: "Isabella kofi",
    handle: "@bellamart",
    platform: "instagram",
    followers: "4.2M",
    image: "/isabella-martinez-profile.png",
    carPurchased: {
      make: "Aston Martin",
      model: "DBS Superleggera",
      year: 2023,
      image: "/aston-martin-dbs-superleggera-black.png",
    },
    testimonial:
      "Elegance, power, and sophistication - everything I look for in a car. polanco made my dream car a reality with unmatched service.",
    verified: true,
    category: "actor",
  },
  {
    id: "5",
    name: "Alex Thompson",
    handle: "@alexthompsontech",
    platform: "youtube",
    followers: "1.5M",
    image: "/2022-RangeRover.jpeg",
    carPurchased: {
      make: "Range Rover",
      model: "SV",
      year: 2024,
      image: "/2022-RangeRover.jpeg",
    },
    testimonial:
      "  understands that true luxury is in the details and the experience.",
    verified: true,
    category: "entrepreneur",
  },
  {
    id: "6",
    name: "Maya sam",
    handle: "@mayapatel",
    platform: "tiktok",
    followers: "2.7M",
    image: "/maya-patel-profile.png",
    carPurchased: {
      make: "Bugatti",
      model: "Chiron",
      year: 2023,
      image: "/blue-bugatti-chiron.png",
    },
    testimonial:
      "When you want the absolute best, there's only one choice. polanco delivered my Chiron with the white-glove service I expected.",
    verified: true,
    category: "content-creator",
  },
]

export const categories = Array.from(new Set(influencers.map((inf) => inf.category)))
