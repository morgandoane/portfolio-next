import { EnergyMapContent } from "@/components/project/energymap-content"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectHero } from "@/components/project/project-hero"

export default function EnergyMapPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-6xl border-x border-border">
        <ProjectHeader
          title="US Energy Map"
          dateRange="Academic Studio Project - 2023"
        />
        <ProjectHero
          headline="The US Energy Map makes the grid visible, compelling, and understandable."
          meta={[
            {
              label: "Scope",
              value: "Academic, Individual",
            },
            {
              label: "Toolkit",
              value:
                "Data Modeling, Next.js, Mapbox, TypeScript, Tailwind, Vercel",
            },
            {
              label: "Date",
              value: "Fall 2023",
            },
          ]}
          heroImage={{
            src: "/energy/desktop-hero.png",
            alt: "US Energy Map hero",
          }}
        />
      </div>
      <EnergyMapContent />
    </div>
  )
}
