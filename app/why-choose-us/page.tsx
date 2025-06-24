import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Award, Shield, Users, Clock, Target, Globe, Zap, HeadphonesIcon, Cog, Brain, Settings, TrendingUp, DollarSign, Handshake, Layers } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function WhyChooseUs() {
  const advantages = [
    {
      title: "Domain Expertise Across Industries",
      description: "With specialized experience in Machine Learning and AI, Retail, Customer Support, Surveillance, Finance, Insurance, and Social Media, we understand the nuances of each sector and tailor our services to meet your specific needs.",
      icon: Brain,
      details: [
        "Machine Learning & AI specialization",
        "Retail and e-commerce expertise", 
        "Customer support optimization",
        "Surveillance and security systems",
        "Finance and insurance knowledge",
        "Social media analytics"
      ],
      image: "/team.jpeg"
    },
    {
      title: "End-to-End Service Delivery",
      description: "From data annotation and content management to back-office operations and customer support, our comprehensive suite of services enables you to focus on core business priorities while we handle the rest.",
      icon: Layers,
      details: [
        "Complete data annotation services",
        "Content management solutions",
        "Back-office operations support",
        "Customer service management",
        "Quality assurance processes",
        "Project management expertise"
      ],
      image: "/advance.jpeg"
    },
    {
      title: "Scalable & Flexible Solutions",
      description: "Whether you're a startup or a global enterprise, our solutions are designed to scale with your business. We adapt quickly to changing demands without compromising on quality.",
      icon: TrendingUp,
      details: [
        "Startup to enterprise scalability",
        "Flexible resource allocation",
        "Rapid demand adaptation",
        "Quality maintenance at scale",
        "Agile project methodologies",
        "Custom solution development"
      ],
      image: "/global.jpeg"
    },
    {
      title: "Technology-Driven Approach",
      description: "We leverage smart tools, automation, and advanced workflows to ensure efficiency, consistency, and high accuracy in every project.",
      icon: Cog,
      details: [
        "Smart automation tools",
        "Advanced workflow systems",
        "AI-powered quality checks",
        "Real-time project tracking",
        "Cutting-edge technology stack",
        "Continuous process optimization"
      ],
      image: "/advance.jpeg"
    },
    {
      title: "Client-Centric Focus",
      description: "Your success is our mission. We build long-term partnerships by understanding your goals, aligning with your vision, and delivering on our promises—on time, every time.",
      icon: Handshake,
      details: [
        "Long-term partnership approach",
        "Goal-oriented service delivery",
        "Vision alignment strategies",
        "Promise-based commitments",
        "Timely project completion",
        "Dedicated account management"
      ],
      image: "/team.jpeg"
    },
    {
      title: "Cost-Effective Excellence",
      description: "Our global delivery model ensures you get the highest quality at competitive rates, helping you optimize costs without sacrificing performance.",
      icon: DollarSign,
      details: [
        "Global delivery model",
        "Competitive pricing structure",
        "Cost optimization strategies",
        "Performance maintenance",
        "Value-driven solutions",
        "ROI-focused approach"
      ],
      image: "/accuracy.jpeg"
    }
  ]

  const testimonials = [
    {
      quote: "Maximo's domain expertise in AI and machine learning transformed our computer vision project. Their attention to detail and industry knowledge exceeded our expectations.",
      author: "Dr. Sarah Chen",
      role: "AI Research Director",
      company: "TechMed Solutions"
    },
    {
      quote: "The scalability and flexibility of Maximo's solutions helped us grow from a startup to enterprise level without any service disruption. Truly impressive!",
      author: "Michael Rodriguez",
      role: "Head of Operations",
      company: "AutoDrive Inc."
    },
    {
      quote: "Their client-centric approach and technology-driven solutions gave us the competitive edge we needed in the finance sector. Outstanding partnership!",
      author: "Dr. Emily Johnson",
      role: "Chief Data Officer",
      company: "FinTech Innovations"
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <Badge variant="outline" className="mb-4">Why Choose Maximo</Badge>
                <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  More Than Just <span className="text-primary">Data Services</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  At Maximo, we understand that in today's fast-paced digital world, accuracy, efficiency, and scalability are critical to business success. That's why we offer more than just data services—we deliver customized, results-driven solutions that empower your business to thrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                    <Link href="/contact">
                      Start Your Partnership
                      <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                    <Link href="/services">
                      Explore Our Services
                      <Zap className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/robot.png"
                  alt="AI Robot"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">What Sets Us Apart</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Here's What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six key differentiators that make Maximo your ideal business partner for sustainable growth and success.
            </p>
          </div>
          
          <div className="grid gap-16 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="overflow-hidden border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={advantage.image}
                      alt={advantage.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center shadow-lg">
                        <advantage.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                  <div className={`p-10 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{advantage.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg leading-relaxed">{advantage.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg text-gray-800">Key Capabilities:</h4>
                        <ul className="space-y-3">
                          {advantage.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Proven Track Record</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Numbers That Speak for Themselves</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our performance metrics across all service areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "7+", 
                label: "Industry Domains", 
                description: "Specialized expertise across sectors",
                icon: Brain 
              },
              { 
                number: "500+", 
                label: "Projects Delivered", 
                description: "End-to-end successful completions",
                icon: Award 
              },
              { 
                number: "99.9%", 
                label: "Client Satisfaction", 
                description: "Long-term partnership success",
                icon: Handshake 
              },
              { 
                number: "24/7", 
                label: "Global Support", 
                description: "Round-the-clock service availability",
                icon: HeadphonesIcon 
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

      {/* Testimonials */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Client Success Stories</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">What Our Partners Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by industry leaders who have experienced the Maximo difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-primary text-6xl mb-6">"</div>
                <div className="text-base italic text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </div>
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Excellence */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Methodology</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Excellence in Every Step</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process ensures consistent quality and successful project outcomes across all service areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
              { step: "02", title: "Strategy", description: "Designing customized solutions aligned with your vision" },
              { step: "03", title: "Execution", description: "Delivering services with precision and quality focus" },
              { step: "04", title: "Validation", description: "Multi-level quality assurance and testing" },
              { step: "05", title: "Partnership", description: "Ongoing support and continuous improvement" }
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

      {/* CTA Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-0 bg-white/60 backdrop-blur-sm shadow-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Ready to Get Started?</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Experience the Maximo Advantage
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of satisfied clients who have transformed their business operations with our comprehensive, results-driven solutions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Handshake className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Partnership Approach</h3>
                  </div>
                  <p className="text-sm text-gray-600">Long-term relationships built on trust and results</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Cost-Effective Excellence</h3>
                  </div>
                  <p className="text-sm text-gray-600">Premium quality at competitive global rates</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your Partnership Today
                    <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                  <Link href="/services">
                    Explore All Services
                    <Zap className="ml-2 h-5 w-5" />
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