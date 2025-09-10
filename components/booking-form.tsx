"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookingTypeSelector } from "./booking-type-selector"
import { DateTimePicker } from "./date-time-picker"
import { User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"
import { bookingTypes } from "@/lib/booking-data"
import type { BookingFormData } from "@/lib/booking-data"

interface BookingFormProps {
  preselectedCarId?: string
}

export function BookingForm({ preselectedCarId }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    bookingType: "",
    carId: preselectedCarId,
    date: "",
    timeSlot: "",
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    preferences: {
      specialRequests: "",
      preferredContact: "email",
    },
  })

  const handleInputChange = (field: string, value: string, section?: string) => {
    if (section) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section as keyof BookingFormData],
          [field]: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
    setIsSubmitted(true)
  }

  const canProceedToStep2 = formData.bookingType !== ""
  const canProceedToStep3 = formData.date !== "" && formData.timeSlot !== ""
  const canSubmit =
    formData.personalInfo.firstName !== "" &&
    formData.personalInfo.lastName !== "" &&
    formData.personalInfo.email !== "" &&
    formData.personalInfo.phone !== ""

  if (isSubmitted) {
    return (
      <Card className="glass-gold max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Your {bookingTypes.find((t) => t.id === formData.bookingType)?.title.toLowerCase()} has been scheduled for{" "}
            {new Date(formData.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            at {formData.timeSlot}.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            We'll send you a confirmation email shortly with all the details and next steps.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setFormData({
                bookingType: "",
                carId: preselectedCarId,
                date: "",
                timeSlot: "",
                personalInfo: { firstName: "", lastName: "", email: "", phone: "" },
                preferences: { specialRequests: "", preferredContact: "email" },
              })
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground border-2 border-muted"
                }`}
              >
                {step}
              </div>
              {step < 3 && <div className={`w-16 h-1 mx-2 ${currentStep > step ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Booking Type */}
        {currentStep === 1 && (
          <Card className="glass">
            <CardContent className="p-8">
              <BookingTypeSelector
                bookingTypes={bookingTypes}
                selectedType={formData.bookingType}
                onTypeSelect={(type) => handleInputChange("bookingType", type)}
              />
              <div className="flex justify-end mt-8">
                <Button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedToStep2}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Date & Time */}
        {currentStep === 2 && (
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-foreground">Select Date & Time</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <DateTimePicker
                selectedDate={formData.date}
                selectedTime={formData.timeSlot}
                onDateSelect={(date) => handleInputChange("date", date)}
                onTimeSelect={(time) => handleInputChange("timeSlot", time)}
              />
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="glass bg-transparent"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  disabled={!canProceedToStep3}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Personal Information */}
        {currentStep === 3 && (
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.personalInfo.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value, "personalInfo")}
                    className="glass mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.personalInfo.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value, "personalInfo")}
                    className="glass mt-1"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value, "personalInfo")}
                    className="glass mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value, "personalInfo")}
                    className="glass mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="preferredContact" className="text-foreground">
                  Preferred Contact Method
                </Label>
                <Select
                  value={formData.preferences.preferredContact}
                  onValueChange={(value) => handleInputChange("preferredContact", value, "preferences")}
                >
                  <SelectTrigger className="glass mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </div>
                    </SelectItem>
                    <SelectItem value="phone">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone
                      </div>
                    </SelectItem>
                    <SelectItem value="whatsapp">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        WhatsApp
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="specialRequests" className="text-foreground">
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="specialRequests"
                  value={formData.preferences.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value, "preferences")}
                  placeholder="Any specific requirements or preferences..."
                  className="glass mt-1 min-h-[100px]"
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  className="glass bg-transparent"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Confirm Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  )
}
