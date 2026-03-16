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
    <div className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full flex-1 flex-col max-w-6xl border-x border-border">
        <div className="flex min-w-0 flex-col items-center gap-10 px-6 py-16 sm:px-12 sm:py-24">
          <div className="flex w-full max-w-lg flex-col items-center gap-4 text-center">
            <Link
              href="/"
              className="self-start text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              &larr; Back
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight">
              Get in touch
            </h1>
            <p className="text-muted-foreground">
              Have a question or want to work together? Send me a message and
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
