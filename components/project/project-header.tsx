import Link from "next/link"

type ProjectHeaderProps = {
  title: string
  dateRange: string
  backHref?: string
}

export function ProjectHeader({
  title,
  dateRange,
  backHref = "/",
}: ProjectHeaderProps) {
  return (
    <header className="border-b border-border px-6 py-6 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          href={backHref}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back home
        </Link>
        <h1 className="text-lg font-semibold sm:text-xl">{title}</h1>
        <span className="text-right text-sm text-muted-foreground">
          {dateRange}
        </span>
      </div>
    </header>
  )
}
