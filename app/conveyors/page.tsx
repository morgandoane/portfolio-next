import { getProjectMetadata } from "@/lib/projects"
import { ConveyorsContent } from "@/components/project/conveyors-content"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectHero } from "@/components/project/project-hero"

export const metadata = getProjectMetadata("conveyors")

export default function ConveyorsPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-6xl border-x border-border">
        <ProjectHeader
          title="Conveyor Systems"
          dateRange="Spring 2018 - Fall 2022"
        />
        <ProjectHero
          headline="Conveyors should be modular, reliable, and intuitively assembled."
          meta={[
            {
              label: "Scope",
              value: "Professional, Collaborative",
            },
            {
              label: "Toolkit",
              value:
                "Solidworks, AutoCAD, TypeScript, Node.js, Sheet Metal Design, 3.5 Axis Mill, Lathe",
            },
            {
              label: "Date",
              value: "Spring 2018 - Fall 2022",
            },
          ]}
          heroImage={{
            src: "/conveyors/cookies.webp",
            alt: "Industrial conveyor system in production",
          }}
        />
      </div>
      <ConveyorsContent />
    </div>
  )
}
