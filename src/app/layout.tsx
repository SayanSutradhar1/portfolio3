import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Meet Sayan | A Software Development Enthusiast",
  description: "Personal portfolio showcasing my work, skills, and experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <>
        {children}
        </>
        <Toaster/>
      </body>
    </html>
  )
}
