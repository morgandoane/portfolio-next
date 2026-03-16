import Image from "next/image"
import { AccordionImageSection } from "@/components/accordion-image-section"
import { ProjectSection } from "./project-section"
import { ProjectTextImageSection } from "./project-text-image-section"
import { ProjectKeyTakeaways } from "./project-key-takeaways"
import { ProjectCTA } from "./project-cta"

export function EnergyMapContent() {
  return (
    <>
      <ProjectSection>
        <section className="flex flex-col gap-6 px-6 py-16 sm:px-8 md:flex-row md:items-start md:gap-8">
          <div className="relative aspect-square w-full min-w-0 overflow-hidden md:flex-1">
            <Image
              src="/energy/bluelines.jpg"
              alt="Electricity transmission tower against blue sky"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
              unoptimized
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-4 text-base leading-loose text-muted-foreground md:flex-1">
            <p>
              This project began with a systems-level question. Early into my
              senior semester, I learned about vertical farms in Europe that had
              recently gone out of business. The Russo-Ukrainian Conflict and
              the shift from Russian-supplied energy had led to a dramatic
              increase in energy costs, which these farms could not absorb. This
              illustrated how supply chain disruption and energy costs can
              cascade through seemingly unrelated industries.
            </p>
            <p className="text-2xl font-medium text-foreground">
              When the gas was shut off, as it were, there were second order
              effects that rippled out in all directions.
            </p>
            <p>
              Without an energy system, we have no food system. I centered my
              research on energy systems and how fragile critical infrastructure
              becomes when disrupted.
            </p>
          </div>
        </section>
      </ProjectSection>

      <ProjectSection>
        <section className="px-6 py-16 sm:px-8">
          <h3 className="mb-10 text-xl leading-relaxed font-medium sm:text-2xl">
            The grid is much more than power lines. It can be helpful to think
            of it as comprising four sub-systems: Extraction, Production,
            Distribution, and Consumption. This project aims to wrangle that
            complexity into a legible medium, making enormous, critical systems
            comprehensible for stakeholders and end-users.
          </h3>
          <AccordionImageSection
            steps={[
              {
                title: "Extraction",
                description:
                  "80% of domestic energy production relies on fossil fuels like oil, coal, and natural gas, extracted through wells and mines. Though renewable energy production is not reliant on fossil fuels, its production significantly relies on the earth's mineral resources: vast amounts of copper, silicon, and rare earth metals. The extraction and processing of these materials has environmental and human impacts at a global scale.",
                imageSrc: "/energy/extraction.jpg",
                imageAlt: "Aerial view of mining or industrial extraction site",
              },
              {
                title: "Production",
                description:
                  "Currently, energy production largely involves converting organic matter into electricity through combustion, steam, and turbines. While efficient in converting fuel to electricity, this thermal method of energy production comes with significant environmental costs. Renewable energy sources harness natural processes to generate electricity, but are not without their own unique challenges.",
                imageSrc: "/energy/production.jpg",
                imageAlt: "Industrial smokestack emitting steam",
              },
              {
                title: "Distribution",
                description:
                  "The US energy distribution network is notably fragile and complex. It is not governed by a single entity; rather, it is managed by a myriad of private and public firms. Remarkably, the failure of just 10 key US power substations could trigger a catastrophic collapse of the grid throughout the country.",
                imageSrc: "/energy/distribution.jpg",
                imageAlt: "Transmission towers at sunset",
              },
              {
                title: "Consumption",
                description:
                  "Energy consumption remains curiously opaque to end-users. Before we can engage in meaningful conversation about decarbonization, it has become clear to me that the complexity of these systems make it difficult for people to comprehend the impact of our energy use. This project aims to bring clarity to these enormous and critical systems, wrangling complexity into a legible medium.",
                imageSrc: "/energy/consumption.jpg",
                imageAlt: "Energy consumption visualization",
              },
            ]}
          />
        </section>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="The US Energy Map is a tool that helps users understand the scale of the grid and their position within it."
          image={
            <div className="relative aspect-4/3 w-full rounded-lg bg-accent dark:bg-card">
              <Image
                src="/energy/boston-mobile.png"
                alt="US Energy Map showing solar and nuclear comparison in Boston area"
                fill
                className="object-contain"
                sizes="(max-width: 1152px) 100vw, 768px"
                unoptimized
              />
            </div>
          }
        >
          <p>
            Once I had obtained a better understanding of this system for
            myself, I set out to build tools that would help others come to
            share this understanding, specifically within the scope of the
            United States. The tool offers insight into the energy mix of a
            given area. Users can search for a location, then isolate particular
            energy production methods. Vertical extrusions encode plant capacity
            (height = megawatts); color encodes energy type. The vasculature
            represents electricity flow from plants into the grid.
          </p>
          <p>
            I sourced the data that powers the application from the{" "}
            <a
              href="https://www.eia.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 transition-colors hover:no-underline"
            >
              US Energy Information Administration
            </a>
            . I was conscious of the inherent subjectivity of data
            visualization: designers and developers choose what to omit,
            emphasize, and minimize. I aimed to represent EIA data in an
            unbiased, objective manner.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectKeyTakeaways
          items={[
            "The vast majority of human systems simply cannot exist without the energy system.",
            "Decarbonization is only part of the challenge. Resilient, flexible, equitable distribution matters.",
            "Renewable energy is full of contradictions and paradox. While less fuel intensive, it is more materially intensive on a myriad of mined earth resources.",
            "Navigating these challenges requires not only technological innovation but also a deep consideration of social, economic, and environmental impact, ensuring that our journey towards sustainable energy benefits all aspects of society.",
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectCTA href="https://energy.morgandoane.com/" external>
          Explore The Map
        </ProjectCTA>
      </ProjectSection>
    </>
  )
}
