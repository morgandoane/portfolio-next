import { ProjectImage } from "./project-image"
import { ProjectSection } from "./project-section"
import { ProjectTextImageSection } from "./project-text-image-section"
import { ProjectKeyTakeaways } from "./project-key-takeaways"
import { ProjectCTA } from "./project-cta"

const IMG = {
  joinery: "/gchair/cornerdetail.jpg",
  materials: "/gchair/materials.png",
  milledComponents: "/gchair/milledcomponents.png",
  armrestDetail: "/gchair/armdetailbook.jpg",
  fullChair: "/gchair/topview.jpg",
} as const

export function GChairContent() {
  return (
    <>
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="left"
          heading="Designed and built for someone I love."
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.joinery}
                alt="G Chair corner and joinery detail"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            Building the G Chair introduced me to the practice of woodworking.
            The process taught me how to design within the constraints of my
            tooling, how to be patient while working with raw materials, and
            the joy that comes from creating something for somebody you love.
          </p>
          <p>
            The chair is proportioned and tailored for its intended user. Every
            decision, from the seat height to the armrest angle, was shaped by
            who would sit in it. That personal dimension gave the project a
            sense of purpose that guided the work from start to finish.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="Designing the form in Solidworks."
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.materials}
                alt="Eastern Black Walnut material selection"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            I selected Eastern Black Walnut for its natural beauty, warmth, and
            resilience. The design evolved through Solidworks, from initial
            sketches to detailed models that defined the chair&apos;s form and
            proportions.
          </p>
          <p>
            These CAD models served as the blueprint for every downstream
            decision: joint placement, grain orientation, and the order of
            operations for fabrication. Having a precise digital reference made
            it possible to anticipate problems before committing to cuts.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="left"
          heading="Milling, shaping, and joinery."
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.milledComponents}
                alt="Milled walnut components laid out before assembly"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            I milled the raw walnut lumber into the necessary stock, then
            shaped the contours using a band saw, refined them with a table
            router, and used MDF templates to ensure each curve was consistent
            and precise.
          </p>
          <p>
            The joinery combines half-lap and mortise-and-tenon joints,
            chosen for their durability and clean appearance. Each joint was
            cut with care, balancing structural integrity with the visual
            quality of exposed connections.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <div className="mx-auto max-w-6xl border-x border-t border-border bg-accent dark:bg-card">
        <div className="relative aspect-3/4 w-full overflow-hidden">
          <ProjectImage
            src={IMG.fullChair}
            alt="G Chair, top view"
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </div>
      </div>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="Finishing and upholstery."
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.armrestDetail}
                alt="Finished G Chair armrest and slatted backrest detail"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            After assembly, I sanded each surface by hand to bring out the
            warmth and character of the walnut. A natural finish was applied
            to protect the wood while preserving its grain and color.
          </p>
          <p>
            I sewed the upholstery myself to provide a soft contrast to
            the chair&apos;s structured form. Crafting this component by hand
            ensured the finished piece was as comfortable as it was
            striking.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectKeyTakeaways
          items={[
            "Woodworking as practice: designing and building a chair from scratch introduced me to a craft I had long admired.",
            "Designing for a specific person: every proportion and detail was shaped by who would use the chair.",
            "Material and joinery: Eastern Black Walnut paired with half-lap and mortise-and-tenon joints for durability and aesthetics.",
            "Constraints as a creative tool: working within the limits of available tools and materials sharpened every decision.",
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectCTA href="/#projects">View all projects</ProjectCTA>
      </ProjectSection>
    </>
  )
}
