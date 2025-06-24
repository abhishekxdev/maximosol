import { HeroHeader } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Database, Headphones, MessageSquare, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Data Services",
      description: "Comprehensive data annotation and labeling services for AI and machine learning projects.",
      icon: Database,
      features: [
        "Image & Video Annotation",
        "Text & Audio Labeling", 
        "3D Point Cloud Processing",
        "Custom Data Solutions"
      ],
      href: "/services/data-services",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Tele Sales",
      description: "Professional telemarketing and sales support services to drive your business growth.",
      icon: MessageSquare,
      features: [
        "Lead Generation",
        "Sales Conversion",
        "Customer Outreach",
        "Market Research"
      ],
      href: "/services/tele-sales",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Customer Support",
      description: "24/7 customer service solutions to enhance your customer experience and satisfaction.",
      icon: Headphones,
      features: [
        "Multi-channel Support",
        "Technical Assistance",
        "Live Chat Services",
        "Help Desk Management"
      ],
      href: "/services/customer-support",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Surveillance Monitoring",
      description: "Advanced surveillance and security monitoring services for enhanced safety and security.",
      icon: Eye,
      features: [
        "Real-time Monitoring",
        "Threat Detection",
        "Incident Response",
        "Security Analytics"
      ],
      href: "/services/surveillance-monitoring",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive <span className="text-primary">Business Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From data annotation to customer support, we provide end-to-end business solutions that drive growth and efficiency across multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="font-semibold mb-4 text-lg text-gray-800">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="h-2 w-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className={`w-full group bg-gradient-to-r ${service.color} hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold transition-all duration-300`}>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your specific requirements and create a custom solution that accelerates your business growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                  <Link href="/about">
                    Learn About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
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