import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Headphones, MessageSquare, Clock, Users, Globe, Phone, Mail, ExternalLink, BarChart3, Zap, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CustomerSupport() {
  const capabilities = [
    {
      title: "24/7 Multi-Channel Support",
      description: "Round-the-clock customer service across phone, email, chat, and social media platforms.",
      icon: Headphones,
      features: [
        "24/7 availability",
        "Multi-channel support",
        "Real-time assistance"
      ],
      applications: ["E-commerce", "SaaS Platforms", "Healthcare", "Financial Services"],
      image: "/team.jpeg"
    },
    {
      title: "Technical Help Desk",
      description: "Expert technical assistance for software, hardware, and IT-related customer inquiries.",
      icon: Users,
      features: [
        "Technical troubleshooting",
        "Software support",
        "Hardware assistance"
      ],
      applications: ["Software Companies", "IT Services", "Technology Products", "Cloud Services"],
      image: "/advance.jpeg"
    },
    {
      title: "Live Chat Services",
      description: "Real-time chat support to engage customers instantly and resolve queries efficiently.",
      icon: MessageSquare,
      features: [
        "Instant response",
        "Real-time engagement",
        "Query resolution"
      ],
      applications: ["E-commerce Websites", "Service Portals", "Mobile Apps", "Online Platforms"],
      image: "/fintech.jpeg"
    },
    {
      title: "Help Desk Management",
      description: "Comprehensive ticket management system for tracking, prioritizing, and resolving customer issues.",
      icon: Clock,
      features: [
        "Ticket management",
        "Issue prioritization",
        "Resolution tracking"
      ],
      applications: ["Enterprise Software", "Service Companies", "Product Support", "Internal IT"],
      image: "/accuracy.jpeg"
    },
    {
      title: "Multilingual Support",
      description: "Customer service in multiple languages to serve global customer base effectively.",
      icon: Globe,
      features: [
        "Multiple languages",
        "Cultural awareness",
        "Global coverage"
      ],
      applications: ["International Business", "Global E-commerce", "Travel & Tourism", "Education"],
      image: "/global.jpeg"
    },
    {
      title: "Customer Success Management",
      description: "Proactive customer relationship management to ensure satisfaction and retention.",
      icon: Heart,
      features: [
        "Proactive outreach",
        "Relationship management",
        "Retention strategies"
      ],
      applications: ["SaaS Companies", "Subscription Services", "B2B Platforms", "Enterprise Solutions"],
      image: "/retail.jpeg"
    }
  ]

  const whyChooseUs = [
    {
      icon: "🎧",
      title: "Expert Support Agents",
      description: "Trained customer service professionals with deep product knowledge and communication skills."
    },
    {
      icon: "⚡",
      title: "Fast Response Times",
      description: "Quick resolution of customer queries with industry-leading response and resolution times."
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "24/7 support across multiple time zones with multilingual capabilities."
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Detailed reporting and analytics to track customer satisfaction and support metrics."
    },
    {
      icon: "🔧",
      title: "Custom Solutions",
      description: "Tailored support solutions designed to meet your specific business requirements."
    },
    {
      icon: "💝",
      title: "Customer-Centric Approach",
      description: "Focus on customer satisfaction and building long-term relationships with your clients."
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
              Enhance your customer experience with our comprehensive 24/7 customer service solutions. From technical support to live chat services, we help you build lasting customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Customer Support Capabilities</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Complete Customer Service Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From multi-channel support to technical assistance, we provide comprehensive customer service solutions that enhance satisfaction and loyalty.
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
            <Badge variant="outline" className="mb-4">Why Choose Maximo for Customer Support?</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Your Trusted Customer Service Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our professional, customer-centric approach to support services.
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
              Our proven methodology ensures exceptional customer service and satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Needs Assessment",
                description: "We analyze your customer support requirements and design a customized service strategy."
              },
              {
                step: "02", 
                title: "Team Training",
                description: "Our agents receive comprehensive training on your products, services, and brand values."
              },
              {
                step: "03",
                title: "Service Delivery",
                description: "Professional customer support with real-time monitoring and quality assurance."
              },
              {
                step: "04",
                title: "Continuous Improvement",
                description: "Regular performance reviews and optimization based on customer feedback and metrics."
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
              Numbers that demonstrate our commitment to exceptional customer service
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
                number: "< 2min", 
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
                number: "20+", 
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
                  Let's discuss your customer support needs and create a custom solution that enhances satisfaction and builds lasting relationships.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Headphones className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Expert Agents</h3>
                  </div>
                  <p className="text-sm text-gray-600">Trained customer service professionals</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Performance Analytics</h3>
                  </div>
                  <p className="text-sm text-gray-600">Detailed reporting and insights</p>
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