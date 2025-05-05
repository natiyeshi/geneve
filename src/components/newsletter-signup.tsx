"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface NewsletterSignupProps {
  dark?: boolean
}

export function NewsletterSignup({ dark = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log("Submitted:", { name, email })
    setSubmitted(true)
    // Reset form after submission
    setName("")
    setEmail("")

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted ? (
        <div className={cn("p-4 text-center rounded", dark ? "bg-white/10 text-white" : "bg-green-50 text-green-800")}>
          Thank you for subscribing! Check your email for confirmation.
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="name" className={dark ? "text-white" : ""}>
              Full Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className={dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : ""}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={dark ? "text-white" : ""}>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className={dark ? "bg-white/10 border-white/20 text-white placeholder:text-white/50" : ""}
            />
          </div>
          <Button type="submit" className={cn("w-full", dark ? "bg-white text-black hover:bg-white/90" : "")}>
            Subscribe Now
          </Button>
        </>
      )}
    </form>
  )
}
