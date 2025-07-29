"use client"

import { useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Users, BarChart3, ChevronRight, Play } from "lucide-react"

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Get intelligent investment recommendations based on market analysis and your risk profile.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      demo: "Real-time AI analysis of 10,000+ stocks",
      benefits: ["Personalized recommendations", "Risk assessment", "Market predictions"],
    },
    {
      icon: Users,
      title: "Portfolio Management",
      description: "Diversify and manage your investments with professional-grade portfolio tools and analytics.",
      color: "bg-green-100",
      iconColor: "text-green-600",
      demo: "Interactive portfolio dashboard",
      benefits: ["Asset allocation", "Rebalancing alerts", "Performance tracking"],
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Access real-time market data, trends, and performance metrics to make informed decisions.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      demo: "Live market data visualization",
      benefits: ["Real-time data", "Technical analysis", "Market insights"],
    },
    {
      icon: Shield,
      title: "Secure Trading",
      description:
        "Bank-level security with encrypted transactions, two-factor authentication, and regulatory compliance.",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      demo: "256-bit encryption demonstration",
      benefits: ["Bank-level security", "2FA protection", "Regulatory compliance"],
    },
  ]

  const handlePlayDemo = (index: number) => {
    setActiveFeature(index)
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 3000)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Card
          key={index}
          className={`border-0 shadow-lg transition-all duration-500 cursor-pointer ${
            activeFeature === index ? "scale-105 shadow-2xl ring-2 ring-blue-500" : "hover:shadow-xl hover:scale-102"
          }`}
          onClick={() => setActiveFeature(index)}
        >
          <CardHeader className="relative">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} transition-all duration-300 ${
                activeFeature === index ? "scale-110 rotate-6" : ""
              }`}
            >
              <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
            </div>
            <CardTitle className="transition-colors duration-300">{feature.title}</CardTitle>
            <CardDescription className="transition-opacity duration-300">{feature.description}</CardDescription>

            {activeFeature === index && (
              <div className="mt-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
                <Badge variant="secondary" className="animate-pulse">
                  {feature.demo}
                </Badge>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center text-sm text-gray-600 animate-in slide-in-from-left-2"
                      style={{ animationDelay: `${benefitIndex * 100}ms` }}
                    >
                      <ChevronRight className="h-3 w-3 mr-1 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full mt-3 bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePlayDemo(index)
                  }}
                  disabled={isPlaying}
                >
                  <Play className={`h-3 w-3 mr-1 ${isPlaying ? "animate-spin" : ""}`} />
                  {isPlaying ? "Playing Demo..." : "Try Demo"}
                </Button>
              </div>
            )}
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
