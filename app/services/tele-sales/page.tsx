import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Phone, Users, Target, TrendingUp, Globe, MessageSquare, Clock, ExternalLink, Headphones, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TeleSales() {
  const capabilities = [
    {
      title: "Outbound Sales Campaigns",
      description: "Proactive calling to potential customers for product promotions, service offerings, and lead generation.",
      icon: Phone,
      features: [
        "Product promotion campaigns",
        "Service offering outreach",
        "Lead generation calls",
        "Market penetration strategies",
        "Customer acquisition",
        "Brand awareness building"
      ],
      applications: ["B2B Sales", "Product Launches", "Market Expansion", "Customer Acquisition"],
      image: "/fintech.jpeg"
    },
    {
      title: "Inbound Sales Support",
      description: "Handling incoming inquiries, converting prospects into paying customers with persuasive, solution-based conversations.",
      icon: Headphones,
      features: [
        "Inquiry handling",
        "Prospect conversion",
        "Solution-based selling",
        "Customer consultation",
        "Product recommendations",
        "Sales closure support"
      ],
      applications: ["Customer Service", "Sales Support", "Product Consultation", "Order Processing"],
      image: "/team.jpeg"
    },
    {
      title: "Lead Qualification & Nurturing",
      description: "Filtering raw leads into sales-qualified leads through structured conversations and follow-ups.",
      icon: Target,
      features: [
        "Lead scoring and qualification",
        "Structured conversation flows",
        "Follow-up campaigns",
        "Prospect nurturing",
        "Sales pipeline management",
        "Conversion optimization"
      ],
      applications: ["CRM Management", "Sales Pipeline", "Marketing Qualified Leads", "Customer Journey"],
      image: "/accuracy.jpeg"
    },
    {
      title: "Appointment Setting",
      description: "Booking qualified meetings and demos for your sales team with decision-makers.",
      icon: Clock,
      features: [
        "Decision-maker identification",
        "Meeting scheduling",
        "Demo appointments",
        "Calendar coordination",
        "Follow-up reminders",
        "Confirmation calls"
      ],
      applications: ["Sales Meetings", "Product Demos", "Consultation Booking", "Executive Meetings"],
      image: "/advance.jpeg"
    },
    {
      title: "B2B & B2C Tele Sales",
      description: "Customized campaigns for both business and consumer markets, across sectors like finance, real estate, healthcare, and tech.",
      icon: Users,
      features: [
        "B2B sales strategies",
        "B2C market approach",
        "Sector-specific campaigns",
        "Customized messaging",
        "Market segmentation",
        "Industry expertise"
      ],
      applications: ["Finance", "Real Estate", "Healthcare", "Technology", "Insurance", "Education"],
      image: "/global.jpeg"
    }
  ]

  const whyChooseUs = [
    {
      icon: "🗣️",
      title: "Trained, multilingual tele sales agents with domain expertise",
      description: "Our agents are professionally trained with deep knowledge across various industries and can communicate in multiple languages."
    },
    {
      icon: "🧩",
      title: "Personalized call scripts aligned with your product & audience",
      description: "Custom-crafted scripts that resonate with your target audience and effectively communicate your value proposition."
    },
    {
      icon: "🔄",
      title: "Scalable calling operations—regional or global",
      description: "Flexible operations that can scale from local markets to global campaigns based on your business needs."
    },
    {
      icon: "📊",
      title: "Real-time reporting, call analytics, and conversion tracking",
      description: "Comprehensive analytics and reporting to track performance, optimize campaigns, and measure ROI."
    },
    {
      icon: "🔐",
      title: "100% data privacy and compliance with calling regulations",
      description: "Strict adherence to data protection laws and calling regulations across different jurisdictions."
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Tele Sales Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Professional <span className="text-primary">Tele Sales</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Drive business growth with our comprehensive telemarketing and sales support services. From lead generation to customer conversion, we help you reach your sales targets effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Tele Sales Capabilities Include</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive Sales Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From outbound campaigns to inbound support, we provide end-to-end tele sales solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid gap-16 max-w-7xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="overflow-hidden border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-12 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={capability.image}
                      alt={capability.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                  <div className={`p-10 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-start gap-6 mb-8">
                      <capability.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{capability.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg text-gray-800">Key Features</h4>
                        <ul className="space-y-3">
                          {capability.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg text-gray-800">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {capability.applications.map((app, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Maximo for Tele Sales?</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Your Trusted Tele Sales Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our professional, results-driven approach to telemarketing and sales support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">How We Drive Sales Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures maximum conversion rates and sustainable sales growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Campaign Strategy",
                description: "We develop customized tele sales strategies aligned with your business goals and target audience."
              },
              {
                step: "02", 
                title: "Script Development",
                description: "Creating personalized call scripts that resonate with your prospects and drive conversions."
              },
              {
                step: "03",
                title: "Execution & Monitoring",
                description: "Professional execution with real-time monitoring and performance optimization."
              },
              {
                step: "04",
                title: "Analytics & Reporting",
                description: "Comprehensive reporting with actionable insights for continuous improvement."
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
              Proven Results in Tele Sales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to driving your sales success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "85%", 
                label: "Lead Conversion Rate", 
                description: "Average conversion from leads to sales",
                icon: TrendingUp 
              },
              { 
                number: "200+", 
                label: "Campaigns Executed", 
                description: "Successful tele sales campaigns",
                icon: BarChart3 
              },
              { 
                number: "50K+", 
                label: "Calls Per Month", 
                description: "Professional sales calls handled",
                icon: Phone 
              },
              { 
                number: "15+", 
                label: "Languages Supported", 
                description: "Multilingual sales capabilities",
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
                <Badge variant="outline" className="mb-4">Get Started Today</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Ready to Boost Your Sales?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your tele sales needs and create a custom campaign that drives results and accelerates your business growth.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Professional Agents</h3>
                  </div>
                  <p className="text-sm text-gray-600">Trained multilingual sales professionals</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Real-time Analytics</h3>
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive reporting and insights</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your Campaign
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