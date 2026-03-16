import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  className?: string
  /** Stagger delay in ms for entrance animation */
  animationDelay?: number
}

export function ProjectCard({
  project,
  className,
  animationDelay,
}: ProjectCardProps) {
  const imageSrc = project.image ?? "/placeholder.svg"

  return (
    <Link
      href={`/${project.slug}`}
      className={cn(
        "group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-xl bg-accent p-6 transition-transform hover:scale-[1.02] dark:bg-card",
        "animate-in duration-500 fill-mode-both fade-in slide-in-from-bottom-4",
        className
      )}
      style={
        animationDelay != null
          ? { animationDelay: `${animationDelay}ms` }
          : undefined
      }
    >
      {/* Background image with dark overlay */}
      <Image
        src={imageSrc}
        alt=""
        fill
        unoptimized={imageSrc.endsWith(".svg")}
        className="object-cover brightness-90 transition-all duration-300 group-hover:brightness-100"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Dark gradient overlay: bottom only, darkest at bottom, fades up so most of image stays visible */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/85 via-black/40 to-transparent"
        aria-hidden
      />

      {/* Card footer */}
      <div className="relative z-10 mt-auto flex items-end justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-lg font-semibold text-white sm:text-xl">
            {project.title}
          </span>
          {project.description && (
            <p className="line-clamp-2 text-base text-white/80">
              {project.description}
            </p>
          )}
        </div>
        <ArrowRight className="size-5 shrink-0 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
