"use client"

import { useEffect, useRef } from "react"

interface MeshGradientBackgroundProps {
  className?: string
  colors?: string[]
  speed?: number
}

export function MeshGradientBackground({
  className = "",
  colors = ["#f9d1d1", "#ffe4e6", "#d1fae5", "#e0f2fe", "#f5f3ff"],
  speed = 0.003,
}: MeshGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    const createGradient = (x: number, y: number, color1: string, color2: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, canvas.width * 0.6)
      gradient.addColorStop(0, color1)
      gradient.addColorStop(1, color2)
      return gradient
    }

    const render = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create multiple gradient blobs that move with time
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // First blob
      const x1 = width * (0.5 + 0.3 * Math.cos(time * 0.7))
      const y1 = height * (0.5 + 0.2 * Math.sin(time * 0.6))
      ctx.fillStyle = createGradient(x1, y1, colors[0] + "80", "transparent")
      ctx.fillRect(0, 0, width, height)

      // Second blob
      const x2 = width * (0.5 + 0.25 * Math.cos(time * 0.5 + 1))
      const y2 = height * (0.5 + 0.3 * Math.sin(time * 0.4 + 2))
      ctx.fillStyle = createGradient(x2, y2, colors[1] + "80", "transparent")
      ctx.fillRect(0, 0, width, height)

      // Third blob
      const x3 = width * (0.5 + 0.2 * Math.cos(time * 0.3 + 3))
      const y3 = height * (0.5 + 0.25 * Math.sin(time * 0.5 + 1))
      ctx.fillStyle = createGradient(x3, y3, colors[2] + "80", "transparent")
      ctx.fillRect(0, 0, width, height)

      // Fourth blob
      const x4 = width * (0.5 + 0.3 * Math.cos(time * 0.4 + 2))
      const y4 = height * (0.5 + 0.2 * Math.sin(time * 0.6 + 3))
      ctx.fillStyle = createGradient(x4, y4, colors[3] + "80", "transparent")
      ctx.fillRect(0, 0, width, height)

      time += speed
      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", resize)
    resize()
    render()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [colors, speed])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}
