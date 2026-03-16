"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type ProjectVideoProps = {
  src: string
  title: string
  poster?: string
  className?: string
  autoplay?: boolean
  controls?: boolean
  muted?: boolean
  loop?: boolean
}

export function ProjectVideo({
  src,
  title,
  poster,
  className = "object-cover",
  autoplay = false,
  controls = true,
  muted = false,
  loop = false,
}: ProjectVideoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { rootMargin: "100px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="mx-auto max-w-6xl border-x border-t border-border bg-accent dark:bg-card"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {isInView ? (
          <video
            src={src}
            title={title}
            poster={poster}
            preload="metadata"
            playsInline
            autoPlay={autoplay}
            muted={muted}
            controls={controls}
            loop={loop}
            className={cn("h-full w-full", className)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted" />
        )}
      </div>
    </div>
  )
}
