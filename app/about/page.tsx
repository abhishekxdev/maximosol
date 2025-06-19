import { HeroHeader } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { AboutHeroBento, AboutStatsBento, AboutValuesBento } from '@/components/about-bento-sections'

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroHeader />
      {/* Hero Section */}
      <section className="pt-32 pb-16">
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
          <AboutHeroBento />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
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
      <section className="py-24">
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