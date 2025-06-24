import { HeroHeader } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Image as ImageIcon, Video, FileText, Headphones, Box, Settings, Clock, ExternalLink, Database, Filter, Edit, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function DataServices() {
  const services = [
    {
      title: "Image Annotation",
      description: "Object detection, segmentation, and tagging for computer vision models.",
      icon: ImageIcon,
      features: [
        "Object detection",
        "Segmentation",
        "Tagging",
        "Bounding boxes",
        "Polygons",
        "Landmark annotation"
      ],
      applications: ["Autonomous Vehicles", "Medical Imaging", "Retail AI", "Agriculture"],
      image: "/imagean.jpeg",
      href: "/services/image-annotation"
    },
    {
      title: "Video Annotation",
      description: "Frame-by-frame object tracking, activity recognition, and keyframe extraction.",
      icon: Video,
      features: [
        "Frame-by-frame object tracking",
        "Activity recognition",
        "Keyframe extraction"
      ],
      applications: ["Surveillance", "Sports Analytics", "Autonomous Vehicles", "Media AI"],
      image: "/video1.jpeg",
      href: "/services/video-annotation"
    },
    {
      title: "Text Annotation",
      description: "Named entity recognition (NER), sentiment analysis, and linguistic tagging for NLP.",
      icon: FileText,
      features: [
        "Named entity recognition (NER)",
        "Sentiment analysis",
        "Linguistic tagging"
      ],
      applications: ["Chatbots", "Document Processing", "Social Media Analysis", "Finance"],
      image: "/textan.jpeg",
      href: "/services/text-annotation"
    },
    {
      title: "Audio Annotation",
      description: "Speech-to-text transcription, sound event tagging, and classification.",
      icon: Headphones,
      features: [
        "Speech-to-text transcription",
        "Sound event tagging",
        "Sound classification"
      ],
      applications: ["Voice Assistants", "Call Centers", "Accessibility", "Music Platforms"],
      image: "/audio.jpeg",
      href: "/services/audio-annotation"
    },
    {
      title: "3D Point Cloud Annotation",
      description: "Lidar-based object detection for autonomous vehicles and 3D environment mapping.",
      icon: Box,
      features: [
        "Lidar-based object detection",
        "3D environment mapping"
      ],
      applications: ["Autonomous Vehicles", "Robotics", "Smart Cities", "AR/VR"],
      image: "/3dcloud.jpeg",
      href: "/services/3d-point-cloud"
    },
    {
      title: "Data Collection",
      description: "Comprehensive data gathering from multiple sources to build robust datasets.",
      icon: Database,
      features: [
        "Web scraping and crawling",
        "Survey data collection",
        "API data extraction",
        "Real-time data gathering",
        "Multi-source aggregation",
        "Custom data acquisition"
      ],
      applications: ["Market Research", "AI Training", "Business Intelligence", "Academic Research"],
      image: "/custom.jpeg",
      href: "/services/data-collection"
    },
    {
      title: "Data Entry",
      description: "Accurate and efficient manual data entry services for various document types.",
      icon: Edit,
      features: [
        "Document digitization",
        "Form processing",
        "Database entry",
        "Invoice processing",
        "Catalog management",
        "CRM data entry"
      ],
      applications: ["Healthcare Records", "Financial Documents", "E-commerce", "Legal Services"],
      image: "/textan.jpeg",
      href: "/services/data-entry"
    },
    {
      title: "Data Cleansing",
      description: "Data quality improvement through cleaning, validation, and standardization.",
      icon: Filter,
      features: [
        "Duplicate removal",
        "Data validation",
        "Format standardization",
        "Error correction",
        "Missing data handling",
        "Quality assurance"
      ],
      applications: ["CRM Systems", "Marketing Databases", "Financial Records", "Healthcare Data"],
      image: "/accuracy.jpeg",
      href: "/services/data-cleansing"
    },
    {
      title: "Data Processing",
      description: "Advanced data transformation and analysis for actionable business insights.",
      icon: BarChart3,
      features: [
        "Data transformation",
        "Statistical analysis",
        "Data mining",
        "Pattern recognition",
        "Report generation",
        "Business intelligence"
      ],
      applications: ["Business Analytics", "Predictive Modeling", "Performance Metrics", "Decision Support"],
      image: "/advance.jpeg",
      href: "/services/data-processing"
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">Data Services</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive <span className="text-primary">Data Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From data annotation and collection to processing and cleansing, we provide end-to-end data services that power the next generation of AI applications and business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-12 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                  <div className={`p-10 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-start gap-6 mb-8">
                      <service.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{service.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                        <h4 className="font-semibold mb-4 text-lg text-gray-800">Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.slice(0, 3).map((feature, idx) => (
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
                          {service.applications.map((app, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button asChild className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-3 rounded-full shadow-lg">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
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
              Our proven methodology ensures consistent quality and timely delivery for every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Project Analysis",
                description: "We analyze your requirements and design a custom data strategy."
              },
              {
                step: "02", 
                title: "Team Assembly",
                description: "Expert data specialists with relevant domain knowledge are assigned to your project."
              },
              {
                step: "03",
                title: "Quality Control",
                description: "Multi-level quality checks ensure accuracy and consistency throughout."
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "Timely delivery with ongoing support and iteration based on feedback."
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

      {/* CTA Section */}
      <section className="py-24 section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 border-0 bg-white/60 backdrop-blur-sm shadow-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="mb-4">Get Started Today</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your data needs and create a custom solution that accelerates your business growth and AI development.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Free Consultation</h3>
                  </div>
                  <p className="text-sm text-gray-600">Get expert advice on your data strategy</p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg text-gray-800">Quick Turnaround</h3>
                  </div>
                  <p className="text-sm text-gray-600">Fast delivery with quality assurance</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold">
                  <Link href="/contact">
                    Request Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all">
                  <Link href="/industries">
                    Explore Industries
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