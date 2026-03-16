import { AccordionImageSection } from "@/components/accordion-image-section"
import { ProjectImage } from "./project-image"
import { ProjectBigImage } from "./project-big-image"
import { ProjectSection } from "./project-section"
import { ProjectTextImageSection } from "./project-text-image-section"
import { ProjectTextSection } from "./project-text-section"
import { ProjectKeyTakeaways } from "./project-key-takeaways"
import { ProjectCTA } from "./project-cta"

const IMG = {
  roofer1: "/coldform/roofer-1.jpg",
  roofer2: "/coldform/roofer-2.jpg",
  systemDiagram: "/coldform/system-diagram.png",
  pcmPlacement: "/coldform/pcm-placement.png",
  prototypeProcess: "/coldform/prototype-process.png",
  compressedAir: "/coldform/compressed-air.png",
  v2Gif: "/coldform/v2_gif.gif",
  v4Gif: "/coldform/v4_gif.gif",
  v5Gif: "/coldform/v5_gif.gif",
  v9Gif: "/coldform/v9_gif.gif",
  membrane: "/coldform/membrane-tall.jpg",
  lineworkLight: "/coldform/linework-light.png",
  lineworkDark: "/coldform/linework-dark.png",
  sewing: "/coldform/sewing-1.jpeg",
  main: "/coldform/coldform-02.jpg",
  vtFloq: "/coldform/vt_flow.webp",
} as const

export function ColdFormContent() {
  return (
    <>
      {/* 1. The Problem */}
      <ProjectSection>
        <ProjectTextSection heading="Heat kills construction workers at staggering rates">
          <p>
            While construction workers make up roughly 6% of the US workforce,
            they account for{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/31328819/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              36% of all heat-related occupational deaths
            </a>
            . Roofers are 7x more likely to die from heat exposure than the
            average construction worker. As average temperatures continue to
            rise, the risk these workers face grows with every season.
          </p>
          <p>
            Despite being critical to our society, roofers are often
            overlooked, undervalued, and neglected by the world of design. This
            project focused on roofers for two reasons: they face the most
            extreme conditions of any trade, and a solution that works on a
            150-degree roof can transfer to other heat-exposed professions.
          </p>
        </ProjectTextSection>
      </ProjectSection>

      {/* 2. Why Roofers */}
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="left"
          heading="Overlooked, undervalued, and working in 150-degree heat"
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.roofer1}
                alt="Tempe AZ roofers work day: temperature timeline from 4-5 AM crew arrival through 3 PM wrap-up"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            Roofing is physically demanding, and crews are paid by the job, not
            by the hour. As 1099 subcontractors, they manage their own
            equipment, safety, and insurance. The financial incentive is to work
            fast. In Tempe, AZ, crews arrive at 4-5 AM, take a rest break at 9
            AM, break for lunch at noon, and wrap up by 3 PM as roof surface
            temperatures climb past 150&#176;F.
          </p>
          <p>
            The contractor focuses on speed, quality, and protecting her
            professional reputation. The crew leader balances productivity with
            his team&apos;s safety. The roofer wants to stay safe and
            comfortable, but finishing faster means earning more. Any solution
            has to work for all three.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      {/* 3. The Adoption Gap */}
      <ProjectSection>
        <ProjectTextSection heading="Existing solutions fail because they ignore how roofing actually works">
          <p>
            Many cooling products exist, but none are widely adopted by roofers.
            The perceived value of current solutions is less than their
            perceived cost. They require too much energy, don&apos;t cool long
            enough, restrict movement on the roof, and interfere with the
            body&apos;s natural perspiration. Cooling alone is not enough
            incentive for adoption.
          </p>
          <p>
            Designing a practical solution requires understanding roofing&apos;s
            power dynamics and incentives. OSHA regulates safety, unions protect
            workers, and insurance compensates for injury, but the crews
            themselves bear the daily burden of heat. Heat exposure costs the US
            economy roughly $100 billion annually. That cost is distributed
            across contractors, crew leaders, workers, and insurers, yet none of
            the existing products address the ecosystem as a whole.
          </p>
        </ProjectTextSection>
      </ProjectSection>

      {/* 4. The Solution */}
      <ProjectSection>
        <section className="px-6 py-16 sm:px-8">
          <h3 className="mb-10 text-xl leading-relaxed font-medium sm:text-2xl">
            ColdForm combines three existing technologies into a novel
            cooling vest: compressed air, a vortex tube, and phase change
            material (PCM).
          </h3>
          <AccordionImageSection
            steps={[
              {
                title: "Compressed Air",
                description:
                  "The vest connects to the same compressed air line that powers nail guns on the roof. A quick-connect fitting lets roofers swap between their nail gun and the vest in seconds. No batteries, no charging stations, no new infrastructure.",
                imageSrc: "/coldform/compressed-air.png",
                imageAlt:
                  "System diagram: air hose connects to vortex tube, quick-connect splits between vest and nail gun",
              },
              {
                title: "Vortex Tube",
                description:
                  "A simple device with no moving parts that splits compressed air into a hot stream and a cold stream. The hot air is exhausted; the cold air flows through channels inside the vest to cool the wearer and recharge the cooling material.",
                imageSrc: "/coldform/vt_flow.webp",
                imageAlt:
                  "Vortex tube splitting compressed air into hot and cold streams",
                imageClassName: "object-contain",
                imageContainerClassName: "mx-auto w-[80%]",
              },
              {
                title: "Phase Change Material",
                description:
                  "Phase change material absorbs and stores thermal energy while holding a constant, comfortable temperature, similar to how ice stays at 32\u00B0F as it melts. PCM pads in the vest are recharged by the vortex tube's cold air in about 5 minutes, then provide steady core body cooling for up to 1.5 hours.",
                imageSrc: "/coldform/membrane.jpg",
                imageAlt:
                  "Phase change material pads that store thermal energy for sustained cooling",
              },
            ]}
          />
        </section>
      </ProjectSection>

      {/* 5b. PCM Placement and Materials */}
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="left"
          heading="Targeted cooling where it matters most"
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <div className="absolute inset-0 dark:hidden">
                <ProjectImage
                  src={IMG.lineworkLight}
                  alt="Front and back vest diagrams showing PCM placement on effective skin areas and avoidance of high perspiration zones"
                  className="object-cover"
                  sizes="(max-width: 1152px) 100vw, 768px"
                />
              </div>
              <div className="absolute inset-0 hidden dark:block">
                <ProjectImage
                  src={IMG.lineworkDark}
                  alt="Front and back vest diagrams showing PCM placement on effective skin areas and avoidance of high perspiration zones"
                  className="object-cover"
                  sizes="(max-width: 1152px) 100vw, 768px"
                />
              </div>
            </div>
          }
        >
          <p>
            PCM pads are positioned over the skin areas most effective for core
            temperature regulation, while avoiding high-perspiration zones so
            the body&apos;s natural evaporative cooling continues uninterrupted.
          </p>
          <p>
            We used COMSOL Multiphysics to simulate airflow through the
            vest&apos;s internal passage geometry, iterating on channel width,
            routing, and outlet placement to maximize cooling efficiency. These
            simulations guided material selection: 7-ounce cotton and poly
            stretch ripstop for the shell, high-resistance mesh for airflow
            channels, elastic mesh panels for mobility, and reinforced stitching
            at high-friction contact points.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      {/* COMSOL airflow simulations */}
      <div className="mx-auto max-w-6xl border-x border-t border-border bg-muted">
        <div className="flex flex-wrap gap-4 px-4 py-8 sm:gap-6 sm:px-8">
          <div className="min-w-[200px] flex-1">
            <div className="relative aspect-9/16 w-full overflow-hidden rounded-lg">
              <ProjectImage
                src={IMG.v2Gif}
                alt="COMSOL airflow simulation of ColdForm vest, iteration 2"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">v1</p>
          </div>
          <div className="min-w-[200px] flex-1">
            <div className="relative aspect-9/16 w-full overflow-hidden rounded-lg">
              <ProjectImage
                src={IMG.v4Gif}
                alt="COMSOL airflow simulation of ColdForm vest, iteration 4"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">v2</p>
          </div>
          <div className="min-w-[200px] flex-1">
            <div className="relative aspect-9/16 w-full overflow-hidden rounded-lg">
              <ProjectImage
                src={IMG.v5Gif}
                alt="COMSOL airflow simulation of ColdForm vest, iteration 5"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">v3</p>
          </div>
          <div className="min-w-[200px] flex-1">
            <div className="relative aspect-9/16 w-full overflow-hidden rounded-lg">
              <ProjectImage
                src={IMG.v9Gif}
                alt="COMSOL airflow simulation of ColdForm vest, iteration 9"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">v4</p>
          </div>
        </div>
      </div>

      {/* 6. Design and Fabrication */}
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="Membrane construction, sewing, and ultrasonic welding"
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.membrane}
                alt="ColdForm vest fabrication: sewing patterns, ultrasonic welding of membrane seams, finished prototype"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            My role on the team was physical product design and fabrication. I
            led vest pattern design, sewing operations, and ultrasonic welding.
            The vest&apos;s internal membrane channels required ultrasonically
            welded seams to create airtight boundaries for both the chilled air
            passage and the liquid PCM layer. Mobility and ergonomics were
            shaped around the movements roofers actually make on the job:
            bending, reaching, and carrying loads across a pitched surface.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectBigImage
        src={IMG.main}
        alt="Materials."
        className="aspect-square object-cover"
      />

      {/* 7. Key Takeaways */}
      <ProjectSection>
        <ProjectKeyTakeaways
          items={[
            "Designing for adoption means understanding the power dynamics, incentives, and constraints of the ecosystem you're designing for, not just the end user.",
            "Combining existing technologies in a novel configuration can be more practical and impactful than inventing something new.",
            "Designing for an extreme environment forces every material and construction decision to be intentional. Pattern design, sewing, ultrasonic welding, and material selection all had to be driven by real job-site constraints.",
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectCTA href="/#projects">View all projects</ProjectCTA>
      </ProjectSection>
    </>
  )
}
