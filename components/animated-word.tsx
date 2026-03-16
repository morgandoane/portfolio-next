"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

const WORDS = [
  "human",
  "maker",
  "designer",
  "engineer",
  "builder",
  "generalist",
  "collaborator",
  "prototyper",
]

const COLORS = [
  "text-blue-600 dark:text-blue-400",
  "text-amber-600 dark:text-amber-400",
  "text-violet-600 dark:text-violet-400",
  "text-cyan-600 dark:text-cyan-400",
  "text-rose-600 dark:text-rose-400",
  "text-emerald-600 dark:text-emerald-400",
  "text-fuchsia-600 dark:text-fuchsia-400",
  "text-orange-600 dark:text-orange-400",
]

const INTERVAL = 3000 as const

interface AnimatedWordProps {
  cycleTrigger?: number
}

export function AnimatedWord({ cycleTrigger = 0 }: AnimatedWordProps) {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState<number | null>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null)

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length)
    }, INTERVAL)
  }

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (cycleTrigger === 0) return
    setIndex((i) => (i + 1) % WORDS.length)
    resetInterval()
  }, [cycleTrigger])

  useLayoutEffect(() => {
    if (measureRef.current) {
      const w = measureRef.current.getBoundingClientRect().width
      setWidth(w)
    }
  }, [index])

  const colorClass = COLORS[index]

  return (
    <span
      className="relative -mb-1.5 ml-0 inline-block overflow-hidden align-baseline transition-[width] duration-500 ease-out sm:-mb-3 sm:ml-3"
      style={{ width: width ?? undefined }}
    >
      {/* Hidden span for measuring intrinsic width */}
      <span
        ref={measureRef}
        aria-hidden
        className={`invisible absolute top-0 left-0 whitespace-nowrap ${colorClass}`}
      >
        {WORDS[index]}
      </span>
      {/* Visible animated word */}
      <span
        key={index}
        className={`inline-block align-[-0.25em] ${colorClass} animate-in duration-700 fill-mode-both fade-in`}
      >
        {WORDS[index]}
      </span>
    </span>
  )
}
