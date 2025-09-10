export interface TimeSlot {
  id: string
  time: string
  available: boolean
}

export interface BookingType {
  id: string
  title: string
  description: string
  duration: string
  icon: string
  price?: number
}

export const bookingTypes: BookingType[] = [
  {
    id: "test-drive",
    title: "Test Drive",
    description: "Experience the thrill of your dream car with a personalized test drive",
    duration: "60 minutes",
    icon: "car",
  },
  {
    id: "virtual-consultation",
    title: "Virtual Consultation",
    description: "Connect with our luxury car specialists via video call",
    duration: "30 minutes",
    icon: "video",
  },
  {
    id: "showroom-visit",
    title: "Private Showroom Visit",
    description: "Exclusive access to our luxury showroom with personal concierge",
    duration: "90 minutes",
    icon: "building",
  },
  {
    id: "home-delivery",
    title: "Home Delivery Preview",
    description: "We bring the car to you for an exclusive preview",
    duration: "120 minutes",
    icon: "truck",
    price: 500,
  },
]

export const generateTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const startHour = 9
  const endHour = 18

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      slots.push({
        id: `${date.toISOString().split("T")[0]}-${time}`,
        time,
        available: Math.random() > 0.3, // Simulate availability
      })
    }
  }

  return slots
}

export interface BookingFormData {
  bookingType: string
  carId?: string
  date: string
  timeSlot: string
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  preferences: {
    specialRequests?: string
    preferredContact: "email" | "phone" | "whatsapp"
  }
}
