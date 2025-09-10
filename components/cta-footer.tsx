"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, Twitter } from "lucide-react"

export function CTAFooter() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the exclusive circle of automotive connoisseurs who demand nothing but the finest
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 px-12 py-6 text-lg transition-all duration-300 hover-glow font-bold tracking-wider shadow-2xl"
              >
                SCHEDULE CONSULTATION
              </Button>
            </Link>
            <Link href="/inventory">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/60 text-primary hover:bg-primary/20 hover:border-primary px-12 py-6 text-lg bg-transparent backdrop-blur-md transition-all duration-300 hover-glow font-bold tracking-wider"
              >
                VIEW COLLECTION
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-800 pt-16">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">Polanco</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The world's most exclusive automotive collection, curated for discerning collectors and automotive
              enthusiasts who accept nothing but perfection.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/inventory" className="hover:text-primary transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/influencers" className="hover:text-primary transition-colors">
                 Clientele
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+234 (911) 5648-723</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>polancoexoticars@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Accra Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Polanco exotic cars. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
