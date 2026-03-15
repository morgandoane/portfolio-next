"use client"

import { useState } from "react"
import {
  Database,
  Scissors,
  Boxes,
  Minimize2,
  CircleDot,
  Tag,
  GitBranch,
  BarChart2,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS: {
  icon: LucideIcon
  label: string
  description: string
}[] = [
  {
    icon: Database,
    label: "Ingestion",
    description:
      "Pulls open-ended comments from the database and filters them so topics can be analyzed at different levels, from a single department to the whole institution.",
  },
  {
    icon: Scissors,
    label: "Segmentation",
    description:
      "Splits each comment into sentences using NLTK/spaCy. Sentence-level granularity supports multiple topics and mixed sentiment per comment. Short or trivial fragments are filtered out.",
  },
  {
    icon: Boxes,
    label: "Embeddings",
    description:
      "Sentence-BERT encodes each sentence into a dense vector. Runs on GPU for speed.",
  },
  {
    icon: Minimize2,
    label: "Dimensionality reduction",
    description:
      "UMAP reduces the vectors to fewer dimensions while preserving structure, making clustering more effective.",
  },
  {
    icon: CircleDot,
    label: "Clustering",
    description:
      "HDBSCAN finds dense regions without a fixed number of clusters and handles sentences that don't fit any topic.",
  },
  {
    icon: Tag,
    label: "Topic Labeling",
    description:
      "LLM step (GPT-4o-mini) generates short 2–5 word titles for each cluster from keywords and example sentences. Makes topics interpretable in the UI.",
  },
  {
    icon: GitBranch,
    label: "Topic Assignment",
    description:
      "Assigns each sentence to a topic with a confidence score. Outliers from HDBSCAN get soft assignments to the nearest cluster when above a threshold.",
  },
  {
    icon: BarChart2,
    label: "Sentiment Analysis",
    description:
      "Transformer-based model (e.g., RoBERTa) classifies each sentence as positive, negative, or neutral. Runs on GPU. Results join with topic assignments so each topic has a sentiment distribution.",
  },
]

export function KorusPipelineSteps() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative flex w-full gap-3">
      {/* Vertical line centered between icons, runs full height */}
      <div
        className="absolute top-0 bottom-0 left-6 w-px bg-border"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col gap-3">
        {STEPS.map((step, index) => {
          const isHovered = hoveredIndex === index
          const Icon = step.icon
          return (
            <div
              key={index}
              className="flex items-start gap-3 px-2 py-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ease-out",
                  isHovered
                    ? "bg-foreground text-background"
                    : "bg-muted/60 text-muted-foreground"
                )}
              >
                <Icon className="size-4" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 ease-out",
                    isHovered ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
                <div
                  className="grid overflow-hidden"
                  style={{
                    gridTemplateRows: isHovered ? "1fr" : "0fr",
                    transition: "grid-template-rows 200ms ease-in-out",
                  }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
