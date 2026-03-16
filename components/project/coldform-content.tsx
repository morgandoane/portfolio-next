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
  userStoryStoryboard: "/coldform/user-story-storyboard.png",
  systemDiagram: "/coldform/system-diagram.png",
  pcmPlacement: "/coldform/pcm-placement.png",
  prototypeProcess: "/coldform/prototype-process.png",
  compressedAir: "/coldform/compressed-air.png",
} as const

export function ColdFormContent() {
  return (
    <>
      {/* 1. The Problem */}
      <ProjectSection>
        <ProjectTextSection heading="Heat kills construction workers at staggering rates">
          <p>
            While construction workers make up roughly 6% of the US workforce,
            they account for 36% of all heat-related occupational deaths.
            Roofers are 7x more likely to experience heat stroke than other
            construction workers. As average temperatures continue to rise, the
            risk these workers face grows with every season.
          </p>
          <p>
            Despite being absolutely critical to our society, roofers are often
            overlooked, undervalued, and neglected by the world of design. This
            project focused on roofers for two reasons: to give something back
            to an essential group of workers our world depends on, and to design
            for the most challenging environment possible so the solution can
            spread to other professions facing excessive heat.
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
            fast.             In Tempe, AZ, crews arrive at 4-5 AM, take a rest break at 9
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
            perceived cost. They suffer from high energy demand, limited cooling
            duration, incompatibility with roof work, mobility constraints,
            disruption of natural perspiration, and expense. Cooling alone is
            not enough incentive for adoption.
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
        <ProjectTextSection heading="Three existing technologies, one new combination">
          <p>
            ColdForm synthesizes three technologies that already exist into a
            novel cooling vest: compressed air (already available on every job
            site for nail guns), a vortex tube (a simple device that splits
            compressed air into hot and cold streams with no moving parts), and
            phase change material, or PCM (which stores thermal energy and
            maintains a constant, comfortable temperature over a long duration).
          </p>
          <p>
            No new energy source. No technological breakthrough. The vest
            recharges in about 5 minutes using the same air compressor that
            powers the crew&apos;s nail guns, then provides constant core body
            cooling for up to 1.5 hours.
          </p>
        </ProjectTextSection>
      </ProjectSection>

      <ProjectBigImage
        src={IMG.userStoryStoryboard}
        alt="User story storyboard: roofer uses nail gun, swaps air line to vest, vortex tube creates frigid air, PCM freezes, unplug and continue working, cooling lasts 1.5 hours"
      />

      {/* 5a. System and Airflow */}
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="Plugs into the tools already on the roof"
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.compressedAir}
                alt="System diagram: air hose connects to vortex tube, quick-connect splits between vest and nail gun"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            The vest connects to the same compressed air line that powers nail
            guns on the roof. A quick-connect fitting lets roofers swap between
            their nail gun and the vest in seconds. The vortex tube splits
            incoming air into a hot stream (exhausted) and a cold stream
            (directed through the vest&apos;s membrane channels), freezing the
            PCM in about 5 minutes. No batteries, no charging stations, no new
            infrastructure.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      {/* 5b. PCM Placement and Materials */}
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="left"
          heading="Targeted cooling where it matters most"
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.pcmPlacement}
                alt="Front and back vest diagrams showing PCM placement on effective skin areas and avoidance of high perspiration zones"
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            PCM pads are positioned over the skin areas most effective for core
            temperature regulation, while avoiding high-perspiration zones so
            the body&apos;s natural cooling can continue uninterrupted.
            Evaporative outlets supplement the PCM&apos;s cooling effect.
          </p>
          <p>
            Materials were chosen for durability and breathability in a harsh
            environment: 7-ounce cotton and poly stretch ripstop for the shell,
            high-resistance mesh for airflow, elastic mesh panels for mobility,
            and reinforced stitching at high-friction contact points.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      {/* 6. Design and Fabrication */}
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="Membrane construction, sewing, and ultrasonic welding"
          image={
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src={IMG.prototypeProcess}
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

      {/* 7. Key Takeaways */}
      <ProjectSection>
        <ProjectKeyTakeaways
          items={[
            "Designing for adoption means understanding the power dynamics, incentives, and constraints of the ecosystem you're designing for, not just the end user.",
            "Combining existing technologies in a novel configuration can be more practical and impactful than inventing something new.",
            "End-to-end physical product fabrication: pattern design, sewing, ultrasonic welding, and material selection for an extreme work environment.",
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectCTA href="/#projects">View all projects</ProjectCTA>
      </ProjectSection>
    </>
  )
}
