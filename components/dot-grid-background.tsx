"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const TRAIL_COUNT = 12
const CLICK_COUNT = 8

const FRAG = `
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_dark;
uniform float u_dpr;
uniform vec3 u_trail[${TRAIL_COUNT}];
uniform vec3 u_clicks[${CLICK_COUNT}];

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 px = gl_FragCoord.xy / u_dpr;
  px.y = u_resolution.y - px.y;
  vec2 res = u_resolution;

  float cellSize = 8.0;
  float squareSize = 2.0;

  // Round to integer physical pixels so every cell is exactly the same width
  float pCell = floor(cellSize * u_dpr + 0.5);
  float pDot = floor(squareSize * u_dpr + 0.5);
  vec2 local = mod(gl_FragCoord.xy, pCell);
  float inSquare = step(local.x, pDot) * step(local.y, pDot);

  vec2 cell = floor(px / cellSize);
  if (inSquare < 0.5) {
    discard;
  }

  // Ambient wave: overlapping sine waves for a water-ripple pulse
  float wave1 = sin(cell.x * 0.3 + cell.y * 0.2 + u_time * 0.7);
  float wave2 = sin(cell.x * 0.15 - cell.y * 0.35 + u_time * 0.5 + 2.0);
  float wave3 = sin((cell.x + cell.y) * 0.12 + u_time * 0.9 + 4.0);
  float ambient = 0.5 + 0.5 * (wave1 * 0.4 + wave2 * 0.35 + wave3 * 0.25);

  // Flicker: smoothly interpolate between two hash values over time
  float speed = 0.6;
  float t = u_time * speed;
  float epoch = floor(t);
  float blend = fract(t);
  blend = blend * blend * (3.0 - 2.0 * blend);

  float h1 = hash(cell + epoch * 0.17);
  float h2 = hash(cell + (epoch + 1.0) * 0.17);
  float flicker = mix(h1, h2, blend);

  float darkBoost = 1.0 + u_dark * 1.0;
  float baseOpacity = (0.08 + ambient * 0.14 + flicker * 0.06) * darkBoost;

  // Mouse glow
  vec2 mousePos = u_mouse;
  float dist = length(px - mousePos);
  float glow = smoothstep(200.0, 0.0, dist);
  glow = glow * glow;
  baseOpacity += glow * 0.35;

  // Ripple rings from trail
  for (int i = 0; i < ${TRAIL_COUNT}; i++) {
    vec3 trail = u_trail[i];
    if (trail.z < 0.0) continue;

    float age = u_time - trail.z;
    if (age < 0.0 || age > 3.0) continue;

    float trailDist = length(px - trail.xy);
    float ringRadius = age * 250.0;
    float ringWidth = 60.0 + age * 30.0;
    float ring = 1.0 - smoothstep(0.0, ringWidth, abs(trailDist - ringRadius));

    float decay = exp(-age * 1.8);
    baseOpacity += ring * decay * 0.18;
  }

  // Click splash ripples
  for (int i = 0; i < ${CLICK_COUNT}; i++) {
    vec3 click = u_clicks[i];
    if (click.z < 0.0) continue;

    float age = u_time - click.z;
    if (age < 0.0 || age > 3.5) continue;

    float clickDist = length(px - click.xy);
    float decay = exp(-age * 1.5);

    for (int r = 0; r < 3; r++) {
      float offset = float(r) * 40.0;
      float ringRadius = age * 350.0 + offset;
      float ringWidth = 50.0 + age * 40.0;
      float ring = 1.0 - smoothstep(0.0, ringWidth, abs(clickDist - ringRadius));
      baseOpacity += ring * decay * 0.3;
    }
  }

  baseOpacity = clamp(baseOpacity, 0.0, 0.6);

  vec3 color = mix(vec3(0.0), vec3(1.0), u_dark);
  gl_FragColor = vec4(color, baseOpacity);
}
`

interface DotGridBackgroundProps {
  className?: string
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(gl: WebGLRenderingContext, vert: string, frag: string): WebGLProgram | null {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vert)
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, frag)
  if (!vs || !fs) return null

  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    return null
  }

  gl.deleteShader(vs)
  gl.deleteShader(fs)
  return program
}

export function DotGridBackground({ className }: DotGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)

  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    })
    if (!gl) return

    const program = createProgram(gl, VERT, FRAG)
    if (!program) return

    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const aPosition = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(aPosition)
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, "u_resolution")
    const uMouse = gl.getUniformLocation(program, "u_mouse")
    const uTime = gl.getUniformLocation(program, "u_time")
    const uDark = gl.getUniformLocation(program, "u_dark")
    const uDpr = gl.getUniformLocation(program, "u_dpr")

    const uTrail: (WebGLUniformLocation | null)[] = []
    for (let i = 0; i < TRAIL_COUNT; i++) {
      uTrail.push(gl.getUniformLocation(program, `u_trail[${i}]`))
    }

    const uClicks: (WebGLUniformLocation | null)[] = []
    for (let i = 0; i < CLICK_COUNT; i++) {
      uClicks.push(gl.getUniformLocation(program, `u_clicks[${i}]`))
    }

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const startTime = performance.now() / 1000
    const mouse = { x: -9999, y: -9999 }
    const trail: Array<{ x: number; y: number; t: number }> = []
    let lastTrailTime = 0
    const clicks: Array<{ x: number; y: number; t: number }> = new Array(CLICK_COUNT).fill(null).map(() => ({ x: 0, y: 0, t: -1 }))
    let clickIndex = 0
    let isInView = true
    let raf = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const w = container.clientWidth
      const h = container.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()

    const draw = () => {
      if (!isInView) {
        raf = requestAnimationFrame(draw)
        return
      }

      const dpr = window.devicePixelRatio || 1
      const w = container.clientWidth
      const h = container.clientHeight
      const now = performance.now() / 1000 - startTime

      gl.uniform2f(uResolution, w, h)
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.uniform1f(uTime, now)
      gl.uniform1f(uDark, themeRef.current === "dark" ? 1.0 : 0.0)
      gl.uniform1f(uDpr, dpr)

      for (let i = 0; i < TRAIL_COUNT; i++) {
        if (i < trail.length) {
          gl.uniform3f(uTrail[i], trail[i].x, trail[i].y, trail[i].t)
        } else {
          gl.uniform3f(uTrail[i], 0, 0, -1)
        }
      }

      for (let i = 0; i < CLICK_COUNT; i++) {
        gl.uniform3f(uClicks[i], clicks[i].x, clicks[i].y, clicks[i].t)
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouse.x = x
      mouse.y = y

      const now = performance.now() / 1000 - startTime
      if (now - lastTrailTime > 0.05) {
        lastTrailTime = now
        trail.push({ x, y, t: now })
        if (trail.length > TRAIL_COUNT) trail.shift()
      }
    }

    const handlePointerLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const handlePointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const now = performance.now() / 1000 - startTime
      const slot = clickIndex % CLICK_COUNT
      clicks[slot] = { x, y, t: now }
      clickIndex++
    }

    document.addEventListener("pointermove", handlePointerMove)
    document.addEventListener("pointerleave", handlePointerLeave)
    document.addEventListener("pointerdown", handlePointerDown)

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting
      },
      { threshold: 0 },
    )
    intersectionObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("pointerleave", handlePointerLeave)
      document.removeEventListener("pointerdown", handlePointerDown)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
