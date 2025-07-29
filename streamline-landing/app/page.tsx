"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, ArrowRight, Menu, Facebook, Twitter, Linkedin, Instagram, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FloatingElements } from "@/components/floating-elements"
import { InteractiveStats } from "@/components/interactive-stats"
import { InteractiveFeatures } from "@/components/interactive-features"
import { ScrollProgress } from "@/components/scroll-progress"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      text: "VestWealth has completely transformed how I manage my investments. My portfolio performance has improved by 40% and I feel more confident about my financial future.",
      author: "Sarah Johnson",
      role: "VP of Operations, TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      text: "The AI insights are incredible. Investment decisions that used to take hours of research now happen with data-driven recommendations. It's like having a personal financial advisor.",
      author: "Michael Chen",
      role: "CTO, StartupXYZ",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      text: "Best investment platform I've used. The portfolio management tools keep me diversified and the analytics help me make better financial decisions.",
      author: "Emily Rodriguez",
      role: "Project Manager, DesignStudio",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <ScrollProgress />
      <FloatingElements />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/vestwealth-logo.png"
              alt="VestWealth Logo"
              width={120}
              height={40}
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Features", "Testimonials", "Pricing", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-blue-600 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex hover:scale-105 transition-transform duration-200">
              Sign In
            </Button>
            <Button className="hover:scale-105 transition-all duration-200 hover:shadow-lg">Start Free Trial</Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-transform duration-200 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-4 bg-white border-t">
            {["Features", "Testimonials", "Pricing", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit animate-bounce">
                  🚀 New: AI-Powered Workflows
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Where People
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                    {" "}
                    Vest for the Best
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-[600px]">
                  Maximize your investment potential with our AI-powered wealth management platform. Build portfolios,
                  track performance, and achieve your financial goals with confidence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2 animate-in slide-in-from-left-2 duration-500">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2 animate-in slide-in-from-left-2 duration-700">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative group">
                <Image
                  src="/vestwealth-hero.png"
                  alt="VestWealth - Where People Vest for the Best"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <InteractiveStats />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to build wealth
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Powerful investment tools designed to help you make smarter financial decisions and grow your portfolio.
            </p>
          </div>

          <InteractiveFeatures />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Loved by investors worldwide</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              See what our customers have to say about VestWealth and how it's transformed their investment journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl relative overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4 pt-6">
                    <Image
                      src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].author}
                      width={60}
                      height={60}
                      className="rounded-full ring-4 ring-blue-100"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-lg">{testimonials[activeTestimonial].author}</p>
                      <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Testimonial indicators */}
              <div className="flex justify-center space-x-2 pb-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Choose the perfect plan for your investment journey. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$9",
                description: "Perfect for individual investors getting started",
                features: ["Up to $10K portfolio", "Basic AI insights", "Standard support", "Mobile app access"],
                popular: false,
              },
              {
                name: "Professional",
                price: "$19",
                description: "Best for serious investors and small teams",
                features: [
                  "Up to $100K portfolio",
                  "Advanced AI automation",
                  "Priority support",
                  "Advanced analytics",
                  "Tax optimization",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For institutions and high-net-worth individuals",
                features: [
                  "Unlimited portfolio size",
                  "Custom AI strategies",
                  "24/7 dedicated support",
                  "White-label options",
                  "API access",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  plan.popular ? "border-blue-500 relative hover:border-blue-600 shadow-xl" : "hover:border-blue-200"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 animate-pulse">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/signup">
                    <Button
                      className={`w-full transition-all duration-300 hover:scale-105 ${
                        plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""
                      }`}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 animate-in slide-in-from-left-2"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-in slide-in-from-bottom-4 duration-700">
              Ready to vest for the best?
            </h2>
            <p className="text-xl text-blue-100 animate-in slide-in-from-bottom-4 duration-700 delay-200">
              Join thousands of investors who have already transformed their wealth-building journey with VestWealth.
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-700 delay-400">
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 hover:scale-110 transition-all duration-300 hover:shadow-2xl group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-200" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent hover:scale-110 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-blue-200 animate-in slide-in-from-bottom-4 duration-700 delay-600">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/vestwealth-logo.png"
                  alt="VestWealth Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto brightness-0 invert hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-400">
                Where people vest for the best. Build wealth with our AI-powered investment platform.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "API"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Support",
                links: ["Help Center", "Documentation", "Status", "Privacy Policy"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VestWealth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
