"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export type TimelineStep = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

type EnergyTimelineProps = {
  steps: TimelineStep[]
}

export function EnergyTimeline({ steps }: EnergyTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
      {/* Left: clickable labels + dropdown content */}
      <div className="min-w-0 flex-1 space-y-1 md:basis-0">
        {steps.map((step, index) => {
          const isActive = activeIndex === index
          return (
            <div key={index} className="border-b border-border last:border-b-0">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-foreground"
              >
                <span
                  className={cn(
                    "font-medium",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    isActive && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-out",
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 text-sm leading-loose text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Right: image for active step */}
      <div className="relative aspect-square w-full min-w-0 overflow-hidden bg-accent md:sticky md:top-32 md:flex-1 md:basis-0">
        {activeIndex !== null ? (
          <Image
            src={steps[activeIndex].imageSrc}
            alt={steps[activeIndex].imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
            unoptimized
          />
        ) : (
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            Select a topic
          </div>
        )}
      </div>
    </div>
  )
}
