"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const MercedesStarLogo = () => (
  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M12 4L12 12L6.5 18M12 12L17.5 18M12 12L12 4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center font-heading text-2xl font-bold text-primary transition-luxury hover-glow"
          >
            <MercedesStarLogo />
Polanco
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/inventory"
              className={`transition-luxury font-medium tracking-wide ${isActive("/inventory") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Inventory
            </Link>
            <Link
              href="/influencers"
              className={`transition-luxury font-medium tracking-wide ${isActive("/influencers") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
             Clientele
            </Link>
            <Link
              href="/about"
              className={`transition-luxury font-medium tracking-wide ${isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-luxury font-medium tracking-wide ${isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              CONTACT
            </Link>
            <Link href="/booking">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury hover-glow font-semibold tracking-wide"
              >
                <Phone className="w-4 h-4 mr-2" />
                BOOK VIEWING 
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-luxury"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-gold rounded-lg mt-2 p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/inventory"
                className={`transition-luxury font-medium tracking-wide ${isActive("/inventory") ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                Inventory
              </Link>
              <Link
                href="/influencers"
                className={`transition-luxury font-medium tracking-wide ${isActive("/influencers") ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                Clientele
              </Link>
              <Link
                href="/about"
                className={`transition-luxury font-medium tracking-wide ${isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`transition-luxury font-medium tracking-wide ${isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                CONTACT
              </Link>
              <Link href="/booking">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full transition-luxury hover-glow font-semibold tracking-wide"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  BOOK VIEWING
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
