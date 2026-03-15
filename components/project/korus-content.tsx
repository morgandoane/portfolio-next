import { ProjectImage } from "./project-image"
import { ProjectSection } from "./project-section"
import { ProjectTextImageSection } from "./project-text-image-section"
import { ProjectTextSection } from "./project-text-section"
import { ProjectKeyTakeaways } from "./project-key-takeaways"
import { ProjectCTA } from "./project-cta"
import { KorusPipelineSteps } from "./korus-pipeline-steps"
import { KorusScatterPlot } from "./korus-scatter-plot"

const IMG = {
  hero: "/korus/korus-hero.svg",
  chart: "/korus/chart.png",
  agent: "/korus/agent.png",
} as const

export function KorusContent() {
  return (
    <>
      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="What is Korus?"
          image={
            <div className="relative aspect-10/9 w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src="/korus/mobile-insight-detail.png"
                alt="Korus dashboard showing narrative insights"
                className="object-contain"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            Universities collect more student feedback than ever. At the
            University of Utah alone, 28,000 students submit course
            evaluations for 6,000+ faculty every semester. That&apos;s over
            100 million comments since 1998. But thousands of open-ended
            comments sit unread, insights go unshared, and the gap between
            feedback and action keeps growing.
          </p>
          <p className="text-2xl font-medium text-foreground">
            Korus surfaces meaningful insights from those voices in one
            compliant, educator-designed platform.
          </p>
          <p>
            I built Korus from the ground up to close the loop between what
            students say and what leaders decide to change, transforming
            mountains of qualitative feedback into clear, evidence-backed
            insights faculty can act on.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="A micro-to-macro view of feedback and performance."
          image={
            <div className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-lg bg-accent dark:bg-card">
              <KorusScatterPlot />
            </div>
          }
        >
          <p>
            Korus supports multi-scope analysis: institutional health, college
            performance, department patterns, aggregated course feedback, and
            individual faculty effectiveness. Leaders see patterns at the right
            level, from high-level trends to actionable course-level insights.
          </p>
          <p>
            Six capabilities work in concert: topic discovery (automatic theme
            surfacing, no tagging), sentiment trends (track shifts across
            semesters and departments), narrative insights (plain-language
            summaries for leaders), clean reports (shareable in seconds),
            cross-course comparisons (see what separates best-rated courses),
            and enterprise distribution (SSO-powered access).
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="ML pipeline: topic discovery and sentiment analysis."
          image={
            <div className="relative w-full overflow-hidden rounded-lg bg-muted/40 p-8 dark:bg-muted/20">
              <KorusPipelineSteps />
            </div>
          }
        >
          <p>
            The topic pipeline is a GPU-enabled ML workflow that transforms raw
            student comments into structured topics and sentiment insights. It
            runs as a batch process, ingesting from MongoDB and writing enriched
            results back for the Korus dashboard to consume.
          </p>
          <p>
            The algorithm stack: Sentence-BERT for embeddings, UMAP for
            dimensionality reduction, HDBSCAN for clustering, GPT-4o-mini for
            topic labeling, and RoBERTa-based transformers for sentiment. The
            pipeline runs per unit (college, department) and once for global
            scope, supporting Korus&apos;s micro-to-macro view from
            institutional trends down to course-level insights.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextImageSection
          imagePosition="right"
          heading="The AI agent works in tandem with discovered topics."
          image={
            <div className="relative aspect-9/16 w-full overflow-hidden rounded-lg bg-accent dark:bg-card">
              <ProjectImage
                src="/korus/mobile-agent.png"
                alt="Korus AI agent interface showing topic-aware insights"
                className="object-contain"
                sizes="(max-width: 1152px) 100vw, 768px"
              />
            </div>
          }
        >
          <p>
            The AI agent uses the discovered themes as structured context. It
            delivers narrative insights, plain-language summaries for leaders,
            and answers questions in the context of what students are actually
            saying.
          </p>
          <p>
            Topics provide the structure; the agent adds interpretation and
            synthesis. Leaders get both the raw topic data and an intelligent
            layer that surfaces the most relevant insights for their questions.
          </p>
        </ProjectTextImageSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectTextSection heading="Traction and early adopters.">
          <p>
            With pilot users at the University of Utah, we&apos;ve established
            traction with early adopters.
          </p>
          <p>
            We&apos;re having discussions with other universities to identify
            first customers. The platform is built for education, not a
            repurposed survey tool, but designed from the ground up for the
            specific rhythms and needs of higher education institutions.
          </p>
        </ProjectTextSection>
      </ProjectSection>

      <ProjectSection>
        <ProjectKeyTakeaways
          items={[
            "0→1 product ownership: from problem definition to full-stack platform, product design, and pilot deployment.",
            "Full-stack product design: bringing ML-powered insights to non-technical stakeholders through thoughtful UX and data flows.",
            "Educator-designed: built for higher-ed rhythms, compliance, and the people who make institutions better.",
            "Closing the loop: connecting what students say to what leaders decide to change.",
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <ProjectCTA href="/#projects">View all projects</ProjectCTA>
      </ProjectSection>
    </>
  )
}
