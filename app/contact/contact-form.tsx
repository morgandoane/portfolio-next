"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const MAX_MESSAGE_LENGTH = 2000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validate = useCallback((): string | null => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      return "All fields are required."
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      return "Please enter a valid email address."
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return `Message must be under ${MAX_MESSAGE_LENGTH} characters.`
    }
    return null
  }, [name, email, message])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    const validationError = validate()
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setFormState("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setFormState("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        return
      }

      setFormState("success")
    } catch {
      setFormState("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center animate-in fade-in duration-500">
        <CheckCircle2 className="size-12 text-primary" />
        <h2 className="text-2xl font-semibold">Thank you!</h2>
        <p className="max-w-sm text-muted-foreground">
          Your message has been sent. I&apos;ll get back to you as soon as I
          can.
        </p>
        <Button variant="outline" size="lg" asChild className="mt-4">
          <Link href="/">
            <ArrowLeft data-icon="inline-start" />
            Back home
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={formState === "submitting"}
          className="h-11"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={formState === "submitting"}
          className="h-11"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="What would you like to say?"
          required
          rows={6}
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
              setMessage(e.target.value)
            }
          }}
          disabled={formState === "submitting"}
          className="min-h-[160px] resize-y"
        />
        <p
          className={cn(
            "text-right text-xs text-muted-foreground",
            message.length > MAX_MESSAGE_LENGTH * 0.9 && "text-destructive"
          )}
        >
          {message.length}/{MAX_MESSAGE_LENGTH}
        </p>
      </div>

      {errorMessage && (
        <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={formState === "submitting"}
        className="w-full"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="animate-spin" data-icon="inline-start" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}
