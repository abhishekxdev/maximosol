import HeroSection from '@/components/hero-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Target, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamically import components that use client-side features with proper error handling
const AppleCardsCarousel = dynamic(
  () => import('@/components/ui/apple-cards-carousel').then((mod) => ({ default: mod.AppleCardsCarousel })), 
  { 
    ssr: false,
    loading: () => <div className="h-48 sm:h-64 md:h-80 lg:h-96 animate-pulse bg-gray-200 rounded-lg"></div>
  }
)

const WhyChooseUsBento = dynamic(
  () => import('@/components/why-choose-us-bento').then((mod) => ({ default: mod.WhyChooseUsBento })), 
  { 
    ssr: false,
    loading: () => <div className="h-48 sm:h-64 md:h-80 lg:h-96 animate-pulse bg-gray-200 rounded-lg"></div>
  }
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Services Overview with Apple Cards Carousel */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <Badge variant="outline" className="mb-2 sm:mb-4">Our Services</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive Data Annotation Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From image and video annotation to text and audio labeling, we provide end-to-end data preparation services for your AI models.
            </p>
          </div>
          
          <AppleCardsCarousel
            items={[
              {
                id: 1,
                title: "Image Annotation",
                description: "Precise object detection, segmentation, and classification for computer vision models.",
                features: ["Bounding Boxes", "Polygonal Annotation", "Semantic Segmentation"],
                image: "/imagean.jpeg"
              },
              {
                id: 2,
                title: "Video Annotation",
                description: "Frame-by-frame annotation for video understanding and temporal analysis.",
                features: ["Object Tracking", "Action Recognition", "Temporal Labeling"],
                image: "/video1.jpeg"
              },
              {
                id: 3,
                title: "Text Annotation",
                description: "Natural language processing data preparation for NLP models and chatbots.",
                features: ["Entity Recognition", "Sentiment Analysis", "Intent Classification"],
                image: "/textan.jpeg"
              },
              {
                id: 4,
                title: "Audio Annotation",
                description: "Speech recognition and audio processing data labeling services.",
                features: ["Speech-to-Text", "Audio Classification", "Sound Event Detection"],
                image: "/audio.jpeg"
              },
              {
                id: 5,
                title: "3D Point Cloud",
                description: "Advanced 3D data annotation for autonomous vehicles and robotics.",
                features: ["LiDAR Processing", "3D Object Detection", "Semantic Mapping"],
                image: "/3dcloud.jpeg"
              },
              {
                id: 6,
                title: "Custom Solutions",
                description: "Tailored annotation services for unique project requirements.",
                features: ["Domain Expertise", "Scalable Teams", "Quality Assurance"],
                image: "/custom.jpeg"
              }
            ]}
          />
        </div>
      </section>

      {/* Why Choose Us with Bento Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <Badge variant="outline" className="mb-2 sm:mb-4">Why Choose Maximo</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Built for Precision and Scale
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our expertise and commitment to quality make us the preferred partner for AI data preparation.
            </p>
          </div>
          
          <WhyChooseUsBento />
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 bg-white/90 p-6 sm:p-8 md:p-12 text-center flex flex-col items-center space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Ready to Transform Your AI Projects?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Join leading companies who trust Maximo Solutions for their data annotation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Button asChild size="lg" variant="default" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 w-full sm:w-auto rounded-full shadow-md min-h-[48px]">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 w-full sm:w-auto rounded-full border-gray-300 text-gray-900 hover:bg-gray-100 shadow-md min-h-[48px]">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}