import { cn } from "@/lib/utils"

type ProjectSectionProps = {
  children: React.ReactNode
  className?: string
}

export function ProjectSection({ children, className }: ProjectSectionProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl border-x border-t border-border",
        className
      )}
    >
      {children}
    </div>
  )
}
