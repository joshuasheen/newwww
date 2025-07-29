"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"
import { TrendingUp, Users, DollarSign, Award } from "lucide-react"

export function InteractiveStats() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const stats = [
    {
      icon: Users,
      value: 100,
      suffix: "+",
      label: "Active Investors",
      description: "Trust VestWealth with their investments",
      color: "bg-blue-500",
    },
    {
      icon: DollarSign,
      value: 15,
      suffix: "lack+",
      prefix: "$",
      label: "Assets Under Management",
      description: "Managed across our platform",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      value: 23,
      suffix: "%",
      label: "Average Annual Return",
      description: "Outperforming market benchmarks",
      color: "bg-purple-500",
    },
    {
      icon: Award,
      value: 99.9,
      suffix: "%",
      label: "Customer Satisfaction",
      description: "Based on user feedback",
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
          onMouseEnter={() => setHoveredStat(index)}
          onMouseLeave={() => setHoveredStat(null)}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-full ${stat.color} text-white transition-transform duration-300 ${
                  hoveredStat === index ? "scale-110 rotate-12" : ""
                }`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-gray-900">{stat.label}</p>
                <p
                  className={`text-xs text-gray-600 transition-opacity duration-300 ${
                    hoveredStat === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {stat.description}
                </p>
              </div>
            </div>
            <div
              className={`absolute bottom-0 left-0 h-1 ${stat.color} transition-all duration-300 ${
                hoveredStat === index ? "w-full" : "w-0"
              }`}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
