import { ProjectImage } from "./project-image"
import { ProjectBigImage } from "./project-big-image"
import { ProjectSection } from "./project-section"
import { ProjectVideo } from "./project-video"
import { ProjectTextImageSection } from "./project-text-image-section"
import { ProjectTextSection } from "./project-text-section"
import { ProjectKeyTakeaways } from "./project-key-takeaways"
import { ProjectCTA } from "./project-cta"

export function CryogenicPrinterContent() {
  return (
    <>
      <ProjectSection>
        <ProjectTextSection heading="Ice as a unique, ephemeral material.">
          <p>
            CryoFab is a bespoke 3D ice printer for crafting temporary ice
            structures. Ice offers promising applications in research and
            industry as a unique, ephemeral fabrication material.
          </p>
          <p>
            Three key applications drove the research: biomedical scaffolding,
            where ice creates precise, biodegradable scaffolds for tissue
            regeneration; freeze casting, where ice guides porous structures in
            ceramics and composites; and porous filtration structures, where ice
            forms tailored porous networks for efficient filtration. Expert
            validation highlighted 3D printing at cryogenic temperatures to
            create tissues with extended shelf life for regenerative medicine.
          </p>
        </ProjectTextSection>
      </ProjectSection>

      <ProjectVideo
        src="https://storage.googleapis.com/morgandoane_portfolio/cryogenicprinter/printdemo.mp4"
        title="Cryogenic printer print demo"
        autoplay
        controls={false}
        muted
        loop
      />

      <ProjectSection>
        <ProjectTextSection heading="Drive, Chamber, and Chiller.">
          <p>
            The system is organized into three main subsystems. The drive
            includes stepper motors, a peristaltic pump, and a microcontroller
            to control the flow of water. The chamber houses the cold
            environment, linear slides, spherical joint linkages, end effector,
            needle, and posts. The chiller uses a 2mm copper build plate,
            Peltier modules, and a liquid-cooled heat sink to maintain cryogenic
            temperatures.
          </p>
          <p>
            The printer runs on Delta firmware with Marlin software, enabling
            precise control over droplet deposition and freeze timing for
            water-based 3D structures.
          </p>
        </ProjectTextSection>
      </ProjectSection>

      <ProjectBigImage
        src="/printer/components.png"
        alt="Exploded view of cryogenic printer: Drive (stepper motors, peristaltic pump, microcontroller), Chamber (cold chamber, linear slides, delta arms, end effector, needle), Chiller (copper build plate, Peltier modules, heat sink)"
        className="object-cover object-top"
      />

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="Custom slicer and G-code pipeline."
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src="/printer/needle.png"
                alt="Delta robot print head and needle for droplet deposition"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            Because standard slicers are built for thermoplastic extrusion, we
            built a custom toolpath pipeline in Rhino and Grasshopper, with C#
            scripting. The
            workflow takes Brep surface geometry as input, charts a deposition
            path across the form, and discretizes that path into a sequence of
            points. Each point becomes a G-code command: move to position, run
            the peristaltic pump to deposit a droplet, pause for freeze time,
            then advance to the next point.
          </p>
          <p>
            The resulting G-code streams to the printer via Marlin, which
            drives the Delta kinematics and pump. This end-to-end pipeline gave
            us full control over layer height, droplet spacing, and freeze
            timing, which proved essential for tuning ice structure formation.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="From water droplets to solids."
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src="/printer/droplet.png"
                alt="3D ice printing results: water droplet, simple geometries, lattice structures, solids"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            The printer successfully produced a range of outputs: water
            droplets, simple geometries, lattice structures, and solids.
            Parameter tuning (radius, height, layer height, and speed) allowed
            the team to refine droplet freezing and structure formation.
          </p>
          <p>
            This work was conducted as part of an interdisciplinary team of
            three: Hana Khurshid (Architecture), Siddhi Patil (Design), and
            Morgan Doane (Mechanical Design, Solidworks, Fabrication).
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectKeyTakeaways
          items={[
            "Hardware research: building a 3D printer that operates at cryogenic temperatures to fabricate ice structures.",
            "Interdisciplinary collaboration: architecture, design, and engineering working together on a novel fabrication system.",
            "Ice as fabrication material: exploring ephemeral, biodegradable structures for biomedical, ceramic, and filtration applications.",
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectCTA href="/#projects">View all projects</ProjectCTA>
      </ProjectSection>
    </>
  )
}
