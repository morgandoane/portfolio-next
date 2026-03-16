import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"

export const metadata: Metadata = {
  description:
    "Design engineer building at the intersection of software, hardware, and data.",
  openGraph: {
    images: [
      "/api/og?title=Morgan%20Doane&description=Design%20engineer%20building%20at%20the%20intersection%20of%20software%2C%20hardware%2C%20and%20data.",
    ],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-svh">
      {/* Centered max-width content with vertical side lines */}
      <div className="mx-auto min-h-svh max-w-6xl border-x border-border">
        <HeroSection />

        {/* Horizontal divider */}
        <hr className="border-border" />

        <ProjectsSection />

        <hr className="border-border" />

        <EducationSection />
      </div>
    </div>
  )
}
