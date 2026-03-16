import { getProjectMetadata } from "@/lib/projects"
import { ColdFormContent } from "@/components/project/coldform-content"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectHero } from "@/components/project/project-hero"

export const metadata = getProjectMetadata("coldform")

export default function ColdFormPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-6xl border-x border-border">
        <ProjectHeader title="ColdForm" dateRange="2024" />
        <ProjectHero
          headline="Keeping roofers cool with the tools already on the roof."
          imageAspect="aspect-square"
          meta={[
            {
              label: "Scope",
              value: "Hardware, Physical Product Design",
            },
            {
              label: "Role",
              value:
                "Pattern Design, Sewing, Ultrasonic Welding",
            },
            {
              label: "Toolkit",
              value: "Sewing Machine, Ultrasonic Welder, Compressed Air, PCM",
            },
            {
              label: "Team",
              value: "Team of 3",
            },
            {
              label: "Context",
              value: "Master's in Design Engineering, Collaborative Studio",
            },
          ]}
          heroImage={{
            src: "/coldform/xray.png",
            alt: "ColdForm cooling vest for roofers",
          }}
        />
      </div>
      <ColdFormContent />
    </div>
  )
}
