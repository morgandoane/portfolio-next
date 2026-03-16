import type { Metadata } from "next"
import Link from "next/link"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Morgan Doane.",
  openGraph: {
    images: [
      "/api/og?title=Contact&description=Get%20in%20touch%20with%20Morgan%20Doane.",
    ],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto min-h-svh max-w-5xl border-x border-border">
        <div className="flex min-w-0 flex-col gap-8 px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              &larr; Back
            </Link>
            <h1 className="text-2xl font-semibold">Contact</h1>
            <p className="max-w-lg text-muted-foreground">
              Have a question or want to work together? Send me a message and
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
