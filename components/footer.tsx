import { Download, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-x border-border px-6 py-6 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between sm:gap-4 sm:px-12">
        <nav
          className="flex flex-wrap items-center justify-center gap-6 text-base sm:justify-start"
          aria-label="Social links"
        >
          <a
            href="https://www.linkedin.com/in/morgandoane"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={cn(
              "inline-flex items-center gap-2 text-muted-foreground",
              "transition-colors hover:text-foreground"
            )}
          >
            <Linkedin className="size-5" aria-hidden />
            LinkedIn
          </a>
          <a
            href="https://github.com/morgandoane"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={cn(
              "inline-flex items-center gap-2 text-muted-foreground",
              "transition-colors hover:text-foreground"
            )}
          >
            <Github className="size-5" aria-hidden />
            GitHub
          </a>
          <a
            href="/resume_morgan_doane.pdf"
            download="resume_morgan_doane.pdf"
            aria-label="Download resume"
            className={cn(
              "inline-flex items-center gap-2 text-muted-foreground",
              "transition-colors hover:text-foreground"
            )}
          >
            <Download className="size-5" aria-hidden />
            Resume
          </a>
        </nav>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <ThemeToggle />
          <a
            href="mailto:morgan_doane@mde.harvard.edu"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-center text-base text-muted-foreground break-all sm:text-left",
              "transition-colors hover:text-foreground"
            )}
          >
            morgan_doane@mde.harvard.edu
          </a>
        </div>
      </div>
    </footer>
  )
}
