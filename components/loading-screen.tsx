"use client"

import { useState, useEffect } from "react"

const CarOutlineLogo = () => (
  <svg
    className="w-16 h-16 text-primary mx-auto animate-pulse"
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 45h70M20 35c0-5 5-10 15-12l5-8h20l5 8c10 2 15 7 15 12M25 45a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM85 45a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM30 25h40l-5-10H35l-5 10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="35" cy="30" r="2" fill="currentColor" />
    <circle cx="65" cy="30" r="2" fill="currentColor" />
  </svg>
)

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <CarOutlineLogo />
          <div className="absolute inset-0 w-16 h-16 border-2 border-primary/30 rounded-full animate-spin mx-auto" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4 animate-fade-in">Polanco</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in-delay">THE BEST OR NOTHING</p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4">{progress}%</p>
      </div>
    </div>
  )
}
