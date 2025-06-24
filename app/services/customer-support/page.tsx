import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Headphones, MessageSquare, Clock, Users, Globe, Phone, Mail, ExternalLink, BarChart3, Zap, Heart, Shield, Settings } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CustomerSupport() {
  const capabilities = [
    {
      title: "Inbound Call Support",
      description: "Responding to customer queries, product assistance, complaints, order tracking, billing, and issue resolution through live phone calls.",
      icon: Phone,
      features: [
        "Customer query handling",
        "Product assistance",
        "Order tracking & billing"
      ],
      applications: ["E-commerce", "SaaS Platforms", "Healthcare", "Financial Services"],
      image: "/team.jpeg"
    },
    {
      title: "Live Chat Support (24/7)",
      description: "Real-time website and in-app chat support for instant help with product questions, order assistance, and general inquiries—boosting customer satisfaction and conversions.",
      icon: MessageSquare,
      features: [
        "Real-time chat support",
        "Instant help & assistance",
        "Conversion optimization"
      ],
      applications: ["E-commerce Websites", "Service Portals", "Mobile Apps", "Online Platforms"],
      image: "/fintech.jpeg"
    },
    {
      title: "Email Support",
      description: "Prompt and detailed responses for billing issues, account changes, feedback, and documentation-related requests.",
      icon: Mail,
      features: [
        "Billing issue resolution",
        "Account management",
        "Documentation support"
      ],
      applications: ["Business Services", "Software Companies", "Subscription Services", "Enterprise Solutions"],
      image: "/accuracy.jpeg"
    },
    {
      title: "Social Media Support",
      description: "Managing queries, feedback, and complaints across platforms like Facebook, Instagram, and Twitter/X with timely and brand-aligned responses.",
      icon: Globe,
      features: [
        "Multi-platform management",
        "Brand-aligned responses",
        "Complaint resolution"
      ],
      applications: ["Social Commerce", "Brand Management", "Digital Marketing", "Community Management"],
      image: "/global.jpeg"
    },
    {
      title: "Outbound Support",
      description: "Feedback calls, follow-ups, customer retention outreach, subscription renewals, and appointment confirmations.",
      icon: Headphones,
      features: [
        "Customer retention calls",
        "Subscription renewals",
        "Appointment confirmations"
      ],
      applications: ["Subscription Services", "Healthcare", "Professional Services", "B2B Solutions"],
      image: "/advance.jpeg"
    }
  ]

  const whyChooseUs = [
    {
      icon: "🗣️",
      title: "Trained, multilingual agents with domain-specific knowledge",
      description: "Professional customer service agents with deep industry expertise and multilingual capabilities."
    },
    {
      icon: "🕔",
      title: "24/7/365 availability or flexible coverage based on your business hours",
      description: "Round-the-clock support or customized coverage that aligns with your operational needs."
    },
    {
      icon: "📞",
      title: "Omnichannel support—phone, live chat, email & social media",
      description: "Seamless customer experience across all communication channels."
    },
    {
      icon: "🧩",
      title: "Seamless CRM and helpdesk platform integration",
      description: "Easy integration with your existing customer management systems and workflows."
    },
    {
      icon: "🔄",
      title: "Scalable solutions for startups, SMEs, and enterprise operations",
      description: "Flexible support solutions that grow with your business from startup to enterprise level."
    },
    {
      icon: "🔐",
      title: "Data privacy and security aligned with global standards (GDPR, HIPAA, ISO)",
      description: "Strict compliance with international data protection and security regulations."
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Customer Support Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Exceptional <span className="text-primary">Customer Support</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enhance your customer experience with our comprehensive customer service solutions. From inbound call support to social media management, we help you build lasting customer relationships and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Customer Support Capabilities Include</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Complete Customer Service Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From inbound call support to social media management, we provide comprehensive customer service solutions that enhance satisfaction and drive conversions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <capability.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-gray-800">Key Features</h4>
                      <ul className="space-y-1">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-gray-800">Applications</h4>
                      <div className="flex flex-wrap gap-1">
                        {capability.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">✅ Why Choose Maximo for Customer Support?</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Your Trusted Customer Service Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our professional, customer-centric approach to support services that drive satisfaction and business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">How We Deliver Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures exceptional customer service and satisfaction across all touchpoints
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Needs Assessment",
                description: "We analyze your customer support requirements and design a customized omnichannel service strategy."
              },
              {
                step: "02", 
                title: "Team Training",
                description: "Our agents receive comprehensive training on your products, services, brand values, and industry-specific knowledge."
              },
              {
                step: "03",
                title: "Service Delivery",
                description: "Professional customer support across all channels with real-time monitoring and quality assurance."
              },
              {
                step: "04",
                title: "Continuous Improvement",
                description: "Regular performance reviews and optimization based on customer feedback, analytics, and industry best practices."
              }
            ].map((process, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Performance</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Proven Customer Support Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to exceptional customer service and business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "98%", 
                label: "Customer Satisfaction", 
                description: "Average customer satisfaction rating",
                icon: Heart 
              },
              { 
                number: "< 30sec", 
                label: "Response Time", 
                description: "Average first response time",
                icon: Zap 
              },
              { 
                number: "24/7", 
                label: "Support Coverage", 
                description: "Round-the-clock availability",
                icon: Clock 
              },
              { 
                number: "25+", 
                label: "Languages Supported", 
                description: "Multilingual support capabilities",
                icon: Globe 
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-6" />
                <div className="text-4xl font-bold text-primary mb-3">{stat.number}</div>
                <div className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
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
                <Badge variant="outline" className="mb-4">Enhance Your Customer Experience</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Ready to Elevate Your Customer Support?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your customer support needs and create a custom omnichannel solution that enhances satisfaction, drives conversions, and builds lasting relationships.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Settings className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Omnichannel Integration</h3>
                  </div>
                  <p className="text-sm text-gray-600">Seamless support across all channels</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Global Compliance</h3>
                  </div>
                  <p className="text-sm text-gray-600">GDPR, HIPAA, and ISO standards</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your Support Solution
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                  <Link href="/services">
                    Explore All Services
                    <ExternalLink className="ml-2 h-5 w-5" />
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