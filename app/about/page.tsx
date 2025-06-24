import dynamic from 'next/dynamic'
import { HeroHeader } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Target, Users } from 'lucide-react'

// Dynamic imports with SSR disabled for components that use client-side features
const AboutHeroBento = dynamic(() => import('@/components/about-bento-sections').then(mod => ({ default: mod.AboutHeroBento })), {
  ssr: false,
  loading: () => <div className="h-96 bg-muted/50 rounded-lg animate-pulse" />
})

const AboutStatsBento = dynamic(() => import('@/components/about-bento-sections').then(mod => ({ default: mod.AboutStatsBento })), {
  ssr: false,
  loading: () => <div className="h-96 bg-muted/50 rounded-lg animate-pulse" />
})

const AboutValuesBento = dynamic(() => import('@/components/about-bento-sections').then(mod => ({ default: mod.AboutValuesBento })), {
  ssr: false,
  loading: () => <div className="h-96 bg-muted/50 rounded-lg animate-pulse" />
})

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroHeader />
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-4">About Maximo Solutions</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Transforming the Digital Landscape with <span className="text-primary">Precision Data</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Maximo Global Solutions Private Limited is a leading provider of high-quality data labelling and annotation services, empowering organizations to harness the true potential of artificial intelligence and machine learning.
            </p>
          </div>

          {/* Three Stacked Description Cards */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative">
              {/* Card 1 - Foundation */}
              <Card className="relative z-10 border-0 bg-white/95 backdrop-blur-sm shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Dynamic Data Services Provider</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Maximo is a dynamic and forward-thinking provider of data services and back-office operations, dedicated to supporting businesses across a wide range of industries. Founded with a vision to streamline complex workflows, Maximo delivers customized, scalable solutions that help organizations improve efficiency, reduce operational costs, and accelerate growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 - Expertise */}
              <Card className="relative z-20 border-0 bg-white/95 backdrop-blur-sm shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 -mt-4">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Domain Expertise</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our expertise spans multiple domains, including Machine Learning & Artificial Intelligence, Retail, Customer Support, Surveillance Support, Finance, Insurance, and Social Media. We specialize in providing high-quality data services, content management, and administrative services, all tailored to meet the unique needs of each client.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 - Commitment */}
              <Card className="relative z-30 border-0 bg-white/95 backdrop-blur-sm shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 -mt-4">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Client-First Approach</h3>
                      <p className="text-gray-700 leading-relaxed">
                        By leveraging advanced technologies, domain-specific knowledge, and a client-first approach, Maximo offers reliable and business-friendly and cost effective outsourcing solutions that empower our partners to focus on innovation and core operations. At Maximo, we are committed to delivering data with high accuracy, speed, and cost effective solution—every step of the way.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <AboutHeroBento />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak to our commitment and expertise
            </p>
          </div>
          <AboutStatsBento />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision and shape the way we serve our clients
            </p>
          </div>
          <AboutValuesBento />
        </div>
      </section>
    </div>
  )
}