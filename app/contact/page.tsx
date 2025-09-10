"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, MessageSquare, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const locations = [
    {
      name: " Lekki Showroom",
      address: "lekki phase 1 lagos nigeria",
      phone: "050 (3034) - 065",
      email: "polancoexoticars@gmail.com",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
    },
    {
      name: "Virtual showroom",
      address: "Coming Soon",
      phone: "050 (3034) - 065",
      email: "polancoexoticars@gmail.com",
      hours: "Mon-Sat: 10AM-9PM, Sun: 12PM-7PM",
    },
    {
      name: "New location",
      address: "Coming soon",
      phone:  "050 (3034) - 065",
      email: "polancoexoticars@gmail.com",
      hours: "Sun-Thu: 10AM-10PM, Fri-Sat: 10AM-11PM",
    },
  ]

  const socialLinks = [
    { icon: Instagram, label: "Instagram", handle: "@polancoexoticars", followers: "125k" },
    // { icon: Youtube, label: "YouTube", handle: "JeffWorldwide", followers: "850K" },
    { icon: MessageSquare, label: "TikTok", handle: "@polanco.exotic.cars", followers: "2,411k" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to experience luxury like never before? Our team is here to help you find your perfect exotic car or
              answer any questions you may have.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-foreground">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="glass mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-foreground">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="glass mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-foreground">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="glass mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-foreground">
                            Subject
                          </Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => handleInputChange("subject", value)}
                          >
                            <SelectTrigger className="glass mt-1">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="inventory">Vehicle Inquiry</SelectItem>
                              <SelectItem value="appointment">Schedule Appointment</SelectItem>
                              <SelectItem value="financing">Financing Options</SelectItem>
                              <SelectItem value="trade-in">Trade-in Valuation</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us how we can help you..."
                          className="glass mt-1 min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="glass-gold">
                <CardHeader>
                  <CardTitle className="text-foreground">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p className="text-sm text-muted-foreground">+234 (814) 7319 -  668</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p className="text-sm text-muted-foreground">polancoexoticars@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+234 (814) 7319 - 668</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-foreground">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                      <div className="flex items-center gap-3">
                        <social.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{social.followers}</p>
                        <p className="text-xs text-muted-foreground">followers</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-16">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="glass">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <p className="text-sm text-muted-foreground">{location.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <p className="text-sm text-muted-foreground">{location.email}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <p className="text-sm text-muted-foreground">{location.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="glass overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">Find our luxury showrooms worldwide</p>
                    <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
