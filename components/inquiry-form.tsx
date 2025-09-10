"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Phone, Mail, Calendar } from "lucide-react"

interface InquiryFormProps {
  carName: string
}

export function InquiryForm({ carName }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="glass-gold">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <MessageSquare className="w-5 h-5 text-primary" />
          Inquire About This Vehicle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
                required
              />
            </div>
            <div>
              <Label htmlFor="inquiryType" className="text-foreground">
                Inquiry Type
              </Label>
              <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                <SelectTrigger className="glass mt-1">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="test-drive">Schedule Test Drive</SelectItem>
                  <SelectItem value="financing">Financing Information</SelectItem>
                  <SelectItem value="trade-in">Trade-in Valuation</SelectItem>
                  <SelectItem value="general">General Information</SelectItem>
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
              placeholder={`I'm interested in the ${carName}...`}
              className="glass mt-1 min-h-[100px]"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Mail className="w-4 h-4 mr-2" />
              Send Inquiry
            </Button>
            {/* <Button type="button" variant="outline" className="flex-1 glass bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button> */}
            <Button type="button" variant="outline" className="flex-1 glass bg-transparent">
              <Calendar className="w-4 h-4 mr-2" />
              Book Viewing
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
