'use client'
import React, { Suspense, lazy } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "@/components/header"
import Image from 'next/image'

// Lazy load heavy components
const DataDashboard = lazy(() => import('@/components/data-dashboard').then(module => ({ default: module.DataDashboard })))

// Helper component for gradient text
const GradientText = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">
        {children}
    </span>
)

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Simplified background effects */}
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-30 contain-strict lg:block pointer-events-none">
                    <div className="w-96 h-96 absolute left-0 top-0 -rotate-45 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
                    <div className="w-64 h-64 absolute right-0 top-1/4 rotate-45 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl" />
                </div>
                
                <section className="pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Text Content - Mobile First */}
                            <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 sm:space-y-8">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                                    <span className="block mb-2 sm:mb-4">
                                        Shaping the <GradientText>Future</GradientText> of AI
                                    </span>
                                    <span className="block">
                                        with <GradientText>Accurate Data</GradientText>
                                    </span>
                                </h1>
                                
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    Maximo Global Solutions provides high-quality data labeling and annotation services to transform your AI and machine learning projects with precision and reliability.
                                </p>

                                {/* CTA Buttons - Mobile Optimized */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                                    <Link href="/services" className="w-full sm:w-auto">
                                        <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-purple-900 text-white font-medium flex items-center justify-center group hover:from-purple-900 hover:to-gray-900 transition-all shadow-lg text-sm sm:text-base min-h-[48px]">
                                            Explore Services
                                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    
                                    <Link href="/contact" className="w-full sm:w-auto">
                                        <Button variant="ghost" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/80 backdrop-blur-sm font-medium flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg text-sm sm:text-base min-h-[48px]">
                                            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-purple-900" /> 
                                            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Request a Quote</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Robot Image - Mobile Optimized */}
                            <div className="relative order-1 lg:order-2 flex justify-center">
                                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] mx-auto">
                                    <Image
                                        src="/robot3.png"
                                        alt="AI Robot"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto object-contain"
                                        priority
                                        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, 600px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Section - Mobile Responsive */}
                    <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-2 sm:px-4">
                        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-2 sm:p-4">
                            <Suspense fallback={
                                <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-white/30 backdrop-blur-lg rounded-2xl border flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-primary"></div>
                                </div>
                            }>
                                <DataDashboard />
                            </Suspense>
                        </div>
                    </div>
                </section>
                
                {/* Industry Cards Section - Mobile Responsive */}
                <section className="bg-white/60 backdrop-blur-sm py-8 sm:py-12 md:py-16 px-4 sm:px-6">
                    <div className="relative mx-auto max-w-5xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 transition-all duration-500">
                            {[
                                { name: "Healthcare", desc: "Medical AI", icon: "🏥" },
                                { name: "Automotive", desc: "Autonomous Vehicles", icon: "🚗" },
                                { name: "Finance", desc: "FinTech Solutions", icon: "💰" },
                                { name: "Retail", desc: "E-commerce AI", icon: "🛒" }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-4 sm:p-6 bg-white/40 rounded-lg backdrop-blur-sm hover:bg-white/60 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">{item.name}</div>
                                    <div className="text-xs sm:text-sm text-muted-foreground">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}