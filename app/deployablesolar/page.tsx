import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Deployable Solar",
  description: "Deployable solar project, coming soon.",
}

export default function DeployableSolarPage() {
  return (
    <div className="flex min-h-svh flex-col gap-6 p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-base leading-loose">
        <h1 className="font-medium">Deployable Solar</h1>
        <p className="text-muted-foreground">Project page coming soon.</p>
        <Link
          href="/"
          className="text-primary underline underline-offset-4 hover:no-underline"
        >
          ← Back home
        </Link>
      </div>
    </div>
  )
}
