"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Crown, Star, Users, ArrowRight } from "lucide-react"

export function JoinTheClub() {
  return (
    <section className="py-16 bg-gradient-to-r from-background via-background to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <Crown className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Join the Elite Club</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Become part of an exclusive community of influencers, celebrities, and luxury car enthusiasts who demand
            nothing but the extraordinary.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-gold">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">50+</h3>
              <p className="text-muted-foreground">Elite Members</p>
            </CardContent>
          </Card>
          <Card className="glass-gold">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">5M+</h3>
              <p className="text-muted-foreground">Combined Followers</p>
            </CardContent>
          </Card>
          <Card className="glass-gold">
            <CardContent className="p-6 text-center">
              <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">$10M+</h3>
              <p className="text-muted-foreground">Cars Delivered</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="glass max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Ready to Join?</h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive access to our latest inventory, private events, and VIP treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="glass flex-1" type="email" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                Join Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By joining, you agree to receive exclusive updates and offers from Polanco.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
