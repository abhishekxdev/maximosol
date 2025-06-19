import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Award, Shield, Users, Clock, Target, Globe, Zap, HeadphonesIcon, Cog } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function WhyChooseUs() {
  const advantages = [
    {
      title: "99.9% Accuracy Guarantee",
      description: "Industry-leading precision with rigorous quality control processes and multi-level validation.",
      icon: Target,
      details: [
        "Multi-tier quality assurance",
        "Expert human validation", 
        "Automated quality checks",
        "Continuous improvement processes"
      ],
      image: "/accuracy.jpeg"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your data is protected with military-grade security measures and compliance certifications.",
      icon: Shield,
      details: [
        "ISO 27001 certified processes",
        "End-to-end encryption",
        "Secure data handling protocols",
        "GDPR & HIPAA compliance"
      ],
      image: "/security.jpeg"
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with deep domain expertise across various industries and AI applications.",
      icon: Users,
      details: [
        "Domain-specific expertise",
        "Continuous training programs",
        "Quality-focused culture",
        "Experienced project managers"
      ],
      image: "/team.jpeg"
    },
    {
      title: "Rapid Turnaround",
      description: "Efficient workflows and scalable teams ensure fast delivery without compromising quality.",
      icon: Clock,
      details: [
        "Scalable workforce",
        "Optimized workflows",
        "24/7 operations capability",
        "Agile project management"
      ],
      image: "/rapid.jpeg"
    },
    {
      title: "Global Scale",
      description: "Worldwide presence with local expertise to handle projects of any size and complexity.",
      icon: Globe,
      details: [
        "Multi-location operations",
        "Diverse talent pool",
        "Cultural expertise",
        "Time zone coverage"
      ],
      image: "/global.jpeg"
    },
    {
      title: "Advanced Technology",
      description: "Cutting-edge tools and platforms that enhance efficiency and maintain consistency.",
      icon: Cog,
      details: [
        "Proprietary annotation tools",
        "AI-assisted workflows",
        "Real-time collaboration",
        "Advanced analytics"
      ],
      image: "/advance.jpeg"
    }
  ]

  const testimonials = [
    {
      quote: "Maximo Solutions transformed our computer vision project. Their attention to detail and quality of annotations exceeded our expectations.",
      author: "Dr. Sarah Chen",
      role: "AI Research Director",
      company: "TechMed Solutions"
    },
    {
      quote: "The team's expertise in automotive AI data annotation helped us accelerate our autonomous vehicle development by 6 months.",
      author: "Michael Rodriguez",
      role: "Head of AI",
      company: "AutoDrive Inc."
    },
    {
      quote: "Outstanding quality and reliability. Their secure processes gave us confidence in handling our sensitive healthcare data.",
      author: "Dr. Emily Johnson",
      role: "Chief Data Officer",
      company: "HealthAI Systems"
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <Badge variant="outline" className="mb-4">Why Choose Maximo</Badge>
                <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  The <span className="text-primary">Trusted Choice</span> for AI Data Annotation
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover why leading organizations worldwide choose Maximo Solutions for their mission-critical AI data preparation needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                    <Link href="/contact">
                      Get Started Today
                      <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                    <Link href="/services">
                      Explore Services
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Competitive Edge</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining cutting-edge technology with human expertise to deliver unmatched quality and reliability.
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
                      <div className="p-4 bg-primary text-primary-foreground rounded-xl shadow-lg">
                        <advantage.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                  <div className={`p-10 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-8">
                      <CardTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{advantage.title}</CardTitle>
                      <CardDescription className="text-lg leading-relaxed">{advantage.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg text-gray-800">Key Benefits:</h4>
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Proven Track Record</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Numbers That Speak for Themselves</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our performance metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "99.9%", 
                label: "Accuracy Rate", 
                description: "Consistent precision across all projects",
                icon: Target 
              },
              { 
                number: "48hrs", 
                label: "Average Turnaround", 
                description: "Fast delivery without compromising quality",
                icon: Clock 
              },
              { 
                number: "500+", 
                label: "Projects Completed", 
                description: "Successful deliveries across industries",
                icon: Award 
              },
              { 
                number: "24/7", 
                label: "Support Available", 
                description: "Round-the-clock assistance",
                icon: HeadphonesIcon 
              }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-xl w-fit">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-3">{stat.number}</div>
                <div className="text-lg font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Methodology</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Excellence in Every Step</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process ensures consistent quality and successful project outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Consultation", description: "Understanding your specific requirements" },
              { step: "02", title: "Planning", description: "Designing the optimal annotation strategy" },
              { step: "03", title: "Execution", description: "Expert annotation with quality controls" },
              { step: "04", title: "Validation", description: "Multi-level quality assurance checks" },
              { step: "05", title: "Delivery", description: "Timely delivery with ongoing support" }
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-0 bg-white/60 backdrop-blur-sm shadow-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Get Started Today</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Experience the Maximo Difference
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of satisfied clients who have transformed their AI projects with our expert data annotation services.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Proven Excellence</h3>
                  </div>
                  <p className="text-sm text-gray-600">99.9% accuracy rate across all projects</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Fast Delivery</h3>
                  </div>
                  <p className="text-sm text-gray-600">48-hour average turnaround time</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Start Your Project Today
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
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}