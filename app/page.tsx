import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"

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
