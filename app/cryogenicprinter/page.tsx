import { getProjectMetadata } from "@/lib/projects"
import { CryogenicPrinterContent } from "@/components/project/cryogenicprinter-content"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectHero } from "@/components/project/project-hero"

export const metadata = getProjectMetadata("cryogenicprinter")

export default function CryogenicPrinterPage() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto max-w-6xl border-x border-border">
        <ProjectHeader title="Cryogenic Printer" dateRange="2025" />
        <ProjectHero
          headline="Printing ice in three dimensions."
          meta={[
            {
              label: "Scope",
              value: "Hardware, Research",
            },
            {
              label: "Role",
              value: "Mechanical Design, Solidworks, Fabrication",
            },
            {
              label: "Toolkit",
              value: "Solidworks, Rhino, Grasshopper, Delta Firmware, Marlin, Peltier Modules",
            },
            {
              label: "Team",
              value: "Team of 3",
            },
            {
              label: "Date",
              value: "2025",
            },
          ]}
          heroImage={{
            src: "/printer/printer-full-01.png",
            alt: "Cryogenic 3D ice printer",
          }}
        />
      </div>
      <CryogenicPrinterContent />
    </div>
  )
}
