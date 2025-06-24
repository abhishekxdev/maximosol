import dynamic from 'next/dynamic'
import { HeroHeader } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { IconUsers, IconGlobe, IconArrowRight } from '@tabler/icons-react'

// Dynamic import for client-side component
const IndustriesBentoGrid = dynamic(() => import('@/components/industries-bento-grid').then(mod => ({ default: mod.IndustriesBentoGrid })), {
  ssr: false,
  loading: () => <div className="h-96 bg-muted/50 rounded-lg animate-pulse" />
})

export default function Industries() {
  return (
    <div className="min-h-screen">
      <HeroHeader />
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Industries We Serve</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Empowering <span className="text-primary">Every Industry</span> with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From healthcare to autonomous vehicles, geospatial mapping to customer support, we provide specialized data annotation and business services tailored to the unique requirements of diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Bento Grid */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <IndustriesBentoGrid />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Impact Across Industries</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering exceptional results across diverse sectors with proven expertise and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "8+", label: "Industries Served", description: "Diverse sector expertise", icon: "🏢" },
              { number: "200+", label: "Enterprise Clients", description: "Trusted partnerships", icon: "🤝" },
              { number: "5M+", label: "Hours of Data", description: "Processed and annotated", icon: "📊" },
              { number: "50+", label: "Countries", description: "Global service coverage", icon: "🌍" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-3">{stat.number}</div>
                <div className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-0 bg-white/60 backdrop-blur-sm shadow-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Get Started Today</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join industry leaders who trust Maximo Solutions for their AI data needs and business services. Let&apos;s discuss your specific requirements and create a custom solution.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <IconUsers className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Industry Expertise</h3>
                  </div>
                  <p className="text-sm text-gray-600">Specialized knowledge across diverse sectors</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <IconGlobe className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Global Reach</h3>
                  </div>
                  <p className="text-sm text-gray-600">Serving clients across 50+ countries</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Get Industry-Specific Quote
                    <IconArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                  <Link href="/services">
                    Explore Our Services
                    <IconArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}