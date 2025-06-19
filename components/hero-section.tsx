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
                
                <section className="pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
                    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            {/* Text Content - Mobile First */}
                            <div className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight px-2 sm:px-0">
                                    <span className="block mb-1 sm:mb-2">
                                        Shaping the <GradientText>Future</GradientText> of AI
                                    </span>
                                    <span className="block">
                                        with <GradientText>Accurate Data</GradientText>
                                    </span>
                                </h1>
                                
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                                    Maximo Global Solutions provides high-quality data labeling and annotation services to transform your AI and machine learning projects with precision and reliability.
                                </p>

                                {/* CTA Buttons - Mobile Optimized */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full px-2 sm:px-0">
                                    <Link href="/services" className="w-full sm:w-auto">
                                        <Button className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gray-900 to-purple-900 text-white font-medium flex items-center justify-center group hover:from-purple-900 hover:to-gray-900 transition-all shadow-lg text-sm min-h-[44px]">
                                            Explore Services
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    
                                    <Link href="/contact" className="w-full sm:w-auto">
                                        <Button variant="ghost" className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm font-medium flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg text-sm min-h-[44px]">
                                            <Play className="mr-2 h-4 w-4 text-purple-900" /> 
                                            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Request Quote</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Robot Image - Mobile Optimized */}
                            <div className="relative order-1 lg:order-2 flex justify-center px-2 sm:px-0">
                                <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[450px] xl:max-w-[550px] mx-auto">
                                    <Image
                                        src="/robot3.png"
                                        alt="AI Robot"
                                        width={550}
                                        height={550}
                                        className="w-full h-auto object-contain"
                                        priority
                                        sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 350px, (max-width: 1280px) 450px, 550px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Section - Mobile Responsive */}
                    <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-1 sm:px-2 md:px-4">
                        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl p-1 sm:p-2 md:p-4">
                            <Suspense fallback={
                                <div className="w-full h-40 sm:h-48 md:h-64 lg:h-80 bg-white/30 backdrop-blur-lg rounded-xl sm:rounded-2xl border flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary"></div>
                                </div>
                            }>
                                <DataDashboard />
                            </Suspense>
                        </div>
                    </div>
                </section>
                
                {/* Industry Cards Section - Mobile Responsive */}
                <section className="bg-white/60 backdrop-blur-sm py-6 sm:py-8 md:py-12">
                    <div className="relative mx-auto max-w-5xl px-3 sm:px-4 md:px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 transition-all duration-500">
                            {[
                                { name: "Healthcare", desc: "Medical AI", icon: "🏥" },
                                { name: "Automotive", desc: "Auto Vehicles", icon: "🚗" },
                                { name: "Finance", desc: "FinTech", icon: "💰" },
                                { name: "Retail", desc: "E-commerce", icon: "🛒" }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-3 sm:p-4 md:p-6 bg-white/40 rounded-lg backdrop-blur-sm hover:bg-white/60 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                                    <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                                    <div className="text-sm sm:text-base md:text-lg font-bold text-primary mb-1">{item.name}</div>
                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}