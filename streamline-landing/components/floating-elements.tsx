"use client"

import { useEffect, useState } from "react"
import { TrendingUp, DollarSign, BarChart3, PieChart } from "lucide-react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const elements = [
    { Icon: TrendingUp, delay: 0, color: "text-green-500" },
    { Icon: DollarSign, delay: 1, color: "text-blue-500" },
    { Icon: BarChart3, delay: 2, color: "text-purple-500" },
    { Icon: PieChart, delay: 3, color: "text-orange-500" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map(({ Icon, delay, color }, index) => (
        <div
          key={index}
          className={`absolute ${color} opacity-20 transition-transform duration-1000 ease-out`}
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + index * 15}%`,
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01 * (index + 1)}px, ${
              (mousePosition.y - window.innerHeight / 2) * 0.01 * (index + 1)
            }px)`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon className="h-8 w-8 animate-pulse" />
        </div>
      ))}
    </div>
  )
}
