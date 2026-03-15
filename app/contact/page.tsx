import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto min-h-svh max-w-5xl border-x border-border">
        <div className="flex min-w-0 flex-col gap-4 px-6 py-8 sm:px-8">
          <Link
            href="/"
            className="text-base text-muted-foreground hover:text-foreground"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-semibold">Contact</h1>
          <p className="text-muted-foreground">
            Get in touch. I&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </div>
  )
}
