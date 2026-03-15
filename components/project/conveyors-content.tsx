import { ProjectImage } from "./project-image"
import { ProjectSection } from "./project-section"
import { ProjectTextImageSection } from "./project-text-image-section"
import { ProjectTextSection } from "./project-text-section"
import { ProjectBigImage } from "./project-big-image"
import { ProjectKeyTakeaways } from "./project-key-takeaways"
import { ProjectCTA } from "./project-cta"

const IMG = {
  process: "/conveyors/process.png",
  code: "/conveyors/radial-variations-code.png",
  driveSection: "/conveyors/drive-iso.png",
  radialFabrication: "/conveyors/radial-variations.png",
  whole: "/conveyors/whole-iso-3.png",
  weld: "/conveyors/radial-weld.png",
} as const

export function ConveyorsContent() {
  return (
    <>
      <ProjectSection>
        <section className="flex flex-col gap-6 px-6 py-16 sm:px-8 md:flex-row md:items-start md:gap-8">
          <div className="relative aspect-square w-full min-w-0 overflow-hidden rounded-lg bg-accent md:flex-1 dark:bg-card">
            <ProjectImage
              src={IMG.process}
              alt="Modular conveyor system with U-shaped curve"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-4 text-base leading-loose text-muted-foreground md:flex-1">
            <p>
              As an employee of Little Dutch Boy Bakeries, I worked as designer,
              engineer, and project manager for several industrial conveyor
              systems. To execute these projects, I collaborated with the
              company&apos;s owners on budgets and timelines, with our internal
              machinist for mill and lathe work, with external fabrication shops
              for metal and plastic forming, and with colleagues on assembly and
              maintenance.
            </p>
            <p className="text-2xl font-medium text-foreground">
              I enjoy working across the full product lifecycle, from product
              vision to manufacturing.
            </p>
            <p>
              I also developed software to automate our mechanical design
              process, bridging hardware and software to improve scalability and
              time-to-market.
            </p>
          </div>
        </section>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="The conveyor systems are composed of modular sections that can be rearranged to accommodate changing business needs."
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.whole}
                alt="Modular conveyor layout"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            For example, implementing a new packaging machine may require a
            conveyor to be rerouted. I designed the conveyor sections to be
            unopinionated in their relationship to one another, allowing us to
            reconfigure them quickly and easily.
          </p>
          <p>
            The company had purchased conveyors from third-party vendors in the
            past but found them either exorbitantly expensive or unreliable. We
            set out to build our own machines that would be comparatively
            inexpensive without sacrificing quality and reliability. We also
            eliminated a dependency on vendors for maintenance, saving time and
            money.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="Each conveyor has a drive section that pulls plastic belting through the system."
          image={
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.driveSection}
                alt="Conveyor drive section: motor, sprockets, and belt"
                className="object-contain"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            Each conveyor and subsequent machine needs to move product at the
            same or gradually faster pace to avoid pileups, especially critical
            at scale, where a batch of tens of thousands of units could back up
            quickly.
          </p>
          <p>
            A motor spins a shaft fitted with sprockets, which drives the belt.
            The motor&apos;s RPM multiplied by the circumference of these
            sprockets determines the speed at which product moves. This
            relationship between mechanical design and throughput was central to
            aligning the system with production requirements.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextSection heading="Software could automate the design process.">
          <p>
            As I continued to build new conveyors, it became apparent that the
            same underlying design logic applied across systems. I began to
            conceptualize them as a hierarchical, recursive assembly of logical
            decisions.
          </p>
          <p>
            I represented these dependencies and relationships in code
            (TypeScript) rather than in CAD (Solidworks), using object-oriented
            classes to model parts and assemblies and their relationships. This
            dramatically increased the speed at which I could produce new
            variants based on changing inputs, especially with large, nested
            assemblies. New designs became a matter of running the code with a
            new set of input parameters.
          </p>
        </ProjectTextSection>
      </ProjectSection>

      <ProjectBigImage src={IMG.code} alt="Parametric Radial Section" />

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="left"
          heading="Radial sections presented fabricators with unique challenges."
          image={
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.weld}
                alt="Radial section fabrication: laser-cut sidewall and welded keys"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            Curved conveyor sections require gradual, smooth, calculated curves.
            Misalignments between concentric metal frames can cause the belt to
            jump out of place, a serious breakdown in the system.
          </p>
          <p>
            The solution involved laser-cutting the sidewall, sending it through
            a metal roller to bend in the approximate radius, then welding it to
            laser-cut keys. These keys ensured the sidewall matched the intended
            curve with exactness.
          </p>
          <p>
            I like to make welders happy. It was exciting when a design in the
            CAD model made their work easier. Design for manufacturability and
            stakeholder empathy are core to how I approach product development.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectKeyTakeaways
          items={[
            "End-to-end product ownership, from vision and design to manufacturing and maintenance, enables faster iteration and better alignment with business needs.",
            "Design for manufacturability and stakeholder empathy (e.g., welders, machinists) improve both quality and team morale.",
            "Software can automate mechanical design workflows, dramatically reducing time-to-market for new product variants.",
            "In-house capability and vendor strategy can deliver cost savings, reliability, and reduced dependency on external suppliers.",
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectCTA href="/#projects">View all projects</ProjectCTA>
      </ProjectSection>
    </>
  )
}
