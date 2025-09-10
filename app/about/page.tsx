import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Users, Award, Globe, Star, TrendingUp, Shield, Heart } from "lucide-react"

export const metadata = {
  title: "About Polanco - Luxury Car Dealership",
  description:
    "Discover the story behind Polanco, the premier destination for exotic cars and luxury automotive experiences.",
}

export default function AboutPage() {
  const stats = [
    { icon: Crown, label: "Years of Excellence", value: 15, suffix: "+" },
    { icon: Users, label: "Celebrity Clients", value: 500, suffix: "+" },
    { icon: Award, label: "Luxury Cars Delivered", value: 2000, suffix: "+" },
    { icon: Globe, label: "Countries Served", value: 25, suffix: "+" },
  ]

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We pursue perfection in every interaction, ensuring our clients receive nothing but the best.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "Built on integrity and transparency, we've earned the confidence of celebrities and influencers worldwide.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our love for luxury automobiles drives us to curate the most extraordinary collection of exotic cars.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously evolve our services to meet the changing needs of our discerning clientele.",
    },
  ]

  const team = [
    {
      name: "polanco",
      role: "Founder & CEO",
      image: "/d2d.jpg",
      bio: "Visionary leader with 20+ years in luxury automotive, building relationships with the world's most influential personalities.",
    },
    {
      name: "Sarah Chen",
      role: "Head of Client Relations",
      image: "/sarah-chen-client-relations.png",
      bio: "Expert in luxury customer experience, ensuring every client receives white-glove service and personalized attention.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Automotive Curator",
      image: "/marcus-rodriguez-curator.png",
      bio: "Automotive connoisseur with an eye for the extraordinary, sourcing the world's most exclusive and rare vehicles.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <ParallaxSection speed={0.3}>
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/luxury-showroom-interior.png')`,
                }}
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </ParallaxSection>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">About Polanco </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-primary font-medium mb-8">Where Luxury Meets Excellence</p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                For over 15 years, we've been the trusted partner for celebrities, influencers, and luxury enthusiasts
                seeking the world's most extraordinary automobiles.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-background via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="glass-gold text-center transition-luxury hover-lift hover-glow">
                    <CardContent className="p-6">
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                      <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </h3>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Polanco began with a simple vision: to create the world's most exclusive luxury car
                      dealership, where extraordinary vehicles meet extraordinary service. 
                    </p>
                    {/* <p>
                      What started as a boutique dealership in Beverly Hills has evolved into a global network, serving
                      celebrities, influencers, and luxury enthusiasts across 25 countries. Our reputation is built on
                      trust, exclusivity, and an unwavering dedication to perfection.
                    </p> */}
                    <p>
                      Today,  Polanco represents more than just luxury cars – we're curators of dreams, architects
                      of experiences, and guardians of automotive artistry. Every vehicle in our collection tells a
                      story, and every client becomes part of our exclusive family.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury hover-glow">
                      Explore Our Collection
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative">
                <Card className="glass overflow-hidden transition-luxury hover-lift">
  <Image
    src="/plogo.jpg"
    alt="D2DEALS"
    width={600}
    height={400}
    className="w-full h-96 object-cover"
  />
  <div className="absolute bottom-4 left-4 glass-gold px-4 py-2 rounded-lg">
    <p className="font-heading font-semibold text-foreground"></p>
    <p className="text-sm text-muted-foreground">Founder & Visionary</p>
  </div>
</Card>

                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-r from-background via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Our Values</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do at Polanco
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <Card className="glass text-center transition-luxury hover-lift hover-glow">
                    <CardContent className="p-6">
                      <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The passionate professionals behind JeffWorldwide's success
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={index} delay={index * 200}>
                  <Card className="glass overflow-hidden transition-luxury hover-lift hover-glow">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                      <Badge variant="outline" className="text-primary border-primary/30 mb-4">
                        {member.role}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* Showroom Gallery */}
        {/* <section className="py-16 bg-gradient-to-r from-background via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Our Luxury Showrooms</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Immersive spaces designed to showcase automotive artistry
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/showroom-beverly-hills.png",
                  title: "Beverly Hills Flagship",
                  desc: "Our original location in the heart of luxury",
                },
                {
                  src: "/showroom-miami.png",
                  title: "Miami Beach",
                  desc: "Oceanfront elegance meets automotive excellence",
                },
                { src: "/showroom-dubai.png", title: "Dubai Marina", desc: "Middle Eastern luxury redefined" },
              ].map((showroom, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="glass overflow-hidden transition-luxury hover-lift hover-glow">
                    <Image
                      src={showroom.src || "/placeholder.svg"}
                      alt={showroom.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-heading text-lg font-semibold text-foreground">{showroom.title}</h3>
                      <p className="text-sm text-muted-foreground">{showroom.desc}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section> */}
      </div>
    </main>
  )
}
