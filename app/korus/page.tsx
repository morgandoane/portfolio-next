import { KorusContent } from "@/components/project/korus-content"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectHero } from "@/components/project/project-hero"

export default function KorusPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-6xl border-x border-border">
        <ProjectHeader title="Korus" dateRange="2024 - Present" />
        <ProjectHero
          headline="Course feedback transformed into actionable insights."
          meta={[
            {
              label: "Scope",
              value: "0→1, Product, Full-stack",
            },
            {
              label: "Toolkit",
              value:
                "TypeScript, React, NestJS, Tailwind, MongoDB, Python (Embeddings, Dimensionality Reduction, Clustering)",
            },
            {
              label: "Date",
              value: "2024 - Present",
            },
          ]}
          heroImage={{
            src: "/korus/hero.png",
            alt: "Korus student feedback intelligence platform",
          }}
        />
      </div>
      <KorusContent />
    </div>
  )
}
