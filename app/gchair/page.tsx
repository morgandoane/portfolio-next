import { getProjectMetadata } from "@/lib/projects"
import { GChairContent } from "@/components/project/gchair-content"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectHero } from "@/components/project/project-hero"

export const metadata = getProjectMetadata("gchair")

export default function GChairPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-6xl border-x border-border">
        <ProjectHeader title="G Chair" dateRange="Fall 2020" />
        <ProjectHero
          headline="A chair designed and built from scratch."
          imageAspect="aspect-[4/5]"
          meta={[
            {
              label: "Project Scope",
              value: "Personal - Individual",
            },
            {
              label: "Toolkit",
              value: "Solidworks, Woodworking, Sewing",
            },
            {
              label: "Date",
              value: "Fall 2020",
            },
          ]}
          heroImage={{
            src: "/gchair/hero.jpg",
            alt: "G Chair, a wooden armchair",
          }}
        />
      </div>
      <GChairContent />
    </div>
  )
}
