"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedWord } from "@/components/animated-word"
import { DotGridBackground } from "@/components/dot-grid-background"

export function HeroSection() {
  const [cycleTrigger, setCycleTrigger] = useState(0)

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBackgroundClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest("a, button")) return
      setCycleTrigger((n) => n + 1)
    },
    [],
  )

  return (
    <div className="relative select-none overflow-hidden" onClick={handleBackgroundClick}>
      <DotGridBackground />
      <div className="relative flex min-w-0 flex-col gap-8 px-6 py-23 sm:px-12 sm:py-50">
        {/* Profile image */}
        <div className="relative size-24 shrink-0 overflow-hidden rounded-full sm:size-28">
          <Image
            src="/home/profile.jpeg"
            alt="Morgan Doane"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main heading and CTAs */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            <span className="block sm:inline">I&apos;m Morgan Doane, a</span>
            <span className="block whitespace-nowrap sm:inline sm:whitespace-normal">
              <AnimatedWord cycleTrigger={cycleTrigger} /> who <br className="hidden sm:block" />
              builds products from 0-1.
            </span>
          </h1>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToProjects}
              className="gap-2"
            >
              Portfolio
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <Link href="/contact">
                Contact
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
