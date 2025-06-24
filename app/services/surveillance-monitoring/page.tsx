import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Eye, Shield, Monitor, Clock, Users, AlertTriangle, Camera, FileText, ExternalLink, BarChart3, Globe, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SurveillanceMonitoring() {
  const capabilities = [
    {
      title: "24/7 Remote Video Monitoring",
      description: "Live surveillance by trained professionals to detect suspicious activity, intrusions, or safety violations.",
      icon: Monitor,
      features: [
        "Real-time live monitoring",
        "Suspicious activity detection",
        "Intrusion alerts"
      ],
      applications: ["Corporate Security", "Retail Stores", "Industrial Facilities"],
      image: "/survilleance.jpeg"
    },
    {
      title: "CCTV Footage Review & Incident Reporting",
      description: "Thorough analysis of recorded footage to identify events, prepare incident logs, and support investigations.",
      icon: FileText,
      features: [
        "Detailed footage analysis",
        "Event identification",
        "Incident documentation"
      ],
      applications: ["Legal Proceedings", "Insurance Claims", "Security Audits"],
      image: "/security.jpeg"
    },
    {
      title: "Smart Alerts & Real-Time Escalation",
      description: "Integration with AI-based motion detection and alert systems to instantly notify relevant personnel.",
      icon: AlertTriangle,
      features: [
        "AI-powered motion detection",
        "Instant alert notifications",
        "Emergency response coordination"
      ],
      applications: ["Emergency Response", "Critical Infrastructure", "High-Security Areas"],
      image: "/advance.jpeg"
    },
    {
      title: "Access Control Monitoring",
      description: "Real-time supervision of entry/exit points, badge access, and unauthorized movements.",
      icon: Shield,
      features: [
        "Entry/exit point monitoring",
        "Badge access verification",
        "Unauthorized movement detection"
      ],
      applications: ["Corporate Buildings", "Data Centers", "Government Facilities"],
      image: "/team.jpeg"
    },
    {
      title: "Retail & Facility Surveillance",
      description: "Monitoring to prevent theft, ensure crowd control, track inventory zones, or support operations.",
      icon: Camera,
      features: [
        "Theft prevention monitoring",
        "Crowd control management",
        "Inventory zone tracking"
      ],
      applications: ["Retail Stores", "Warehouses", "Shopping Centers"],
      image: "/retail.jpeg"
    },
    {
      title: "Health, Safety & Compliance Checks",
      description: "Observe worker safety gear usage, hazardous zones, restricted areas, and SOP adherence.",
      icon: Users,
      features: [
        "Safety gear compliance",
        "Hazardous zone monitoring",
        "SOP adherence verification"
      ],
      applications: ["Construction Sites", "Manufacturing Plants", "Chemical Facilities"],
      image: "/manufacturing.jpeg"
    }
  ]

  const whyChooseUs = [
    {
      icon: "👁️",
      title: "Expert Surveillance Professionals",
      description: "Trained security specialists with extensive experience in threat detection and incident response."
    },
    {
      icon: "🔒",
      title: "Advanced Technology Integration",
      description: "State-of-the-art surveillance systems with AI-powered analytics for enhanced detection."
    },
    {
      icon: "⚡",
      title: "Real-Time Response & Escalation",
      description: "Immediate threat detection with rapid escalation protocols for swift response."
    },
    {
      icon: "📊",
      title: "Comprehensive Reporting & Analytics",
      description: "Detailed incident reports, trend analysis, and security insights."
    },
    {
      icon: "🌍",
      title: "Global Coverage & Local Expertise",
      description: "Worldwide surveillance capabilities with local knowledge and compliance."
    },
    {
      icon: "🛡️",
      title: "Proactive Security Approach",
      description: "Prevention-focused monitoring that identifies potential threats early."
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Surveillance Monitoring Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              <span className="text-primary">Watch. Detect. Respond. Protect.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Maximo, our Surveillance Monitoring services offer real-time, around-the-clock monitoring to help businesses, facilities, and public spaces stay secure and operationally efficient. Combining skilled human oversight with intelligent video analytics, we help you detect threats, ensure safety, and respond proactively—before issues escalate.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether it's monitoring for security breaches, asset protection, workforce compliance, or public safety—Maximo delivers consistent vigilance you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">🛡️ Our Surveillance Monitoring Capabilities Include</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From live monitoring to incident reporting, we provide end-to-end surveillance services that keep your assets and people safe.
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
            <Badge variant="outline" className="mb-4">Why Choose Maximo for Surveillance?</Badge>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Your Trusted Security Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our professional, technology-driven approach to surveillance and security monitoring.
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
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">How We Ensure Your Security</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures comprehensive security coverage and rapid response to any threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Security Assessment",
                description: "We evaluate your facility and security needs to design a comprehensive monitoring strategy."
              },
              {
                step: "02", 
                title: "System Integration",
                description: "Seamless integration with your existing security infrastructure and surveillance systems."
              },
              {
                step: "03",
                title: "Live Monitoring",
                description: "24/7 professional monitoring with real-time threat detection and immediate response protocols."
              },
              {
                step: "04",
                title: "Reporting & Analysis",
                description: "Detailed incident reports and security analytics for continuous improvement and compliance."
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
              Proven Security Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to keeping your assets and people safe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                number: "99.8%", 
                label: "Threat Detection Rate", 
                description: "Accurate identification of security threats",
                icon: Eye 
              },
              { 
                number: "24/7", 
                label: "Continuous Monitoring", 
                description: "Round-the-clock surveillance coverage",
                icon: Clock 
              },
              { 
                number: "< 30sec", 
                label: "Response Time", 
                description: "Average alert response time",
                icon: Zap 
              },
              { 
                number: "500+", 
                label: "Facilities Protected", 
                description: "Secure locations under monitoring",
                icon: Shield 
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
                <Badge variant="outline" className="mb-4">Secure Your Assets Today</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Ready to Enhance Your Security?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your surveillance monitoring needs and create a custom security solution that protects what matters most to your business.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Eye className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Expert Monitoring</h3>
                  </div>
                  <p className="text-sm text-gray-600">Professional surveillance specialists</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Advanced Security</h3>
                  </div>
                  <p className="text-sm text-gray-600">AI-powered threat detection systems</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Get Security Assessment
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