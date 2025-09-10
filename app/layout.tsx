import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { LoadingScreen } from "@/components/loading-screen"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Polanco - Virtual car Dealer",
  description:
    "Premium exotic car dealership for influencers and celebrities. Discover luxury vehicles that define status and performance.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
