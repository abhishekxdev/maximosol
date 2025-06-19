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
                
                <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="text-center lg:text-left order-2 lg:order-1">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 sm:mb-6 font-sans tracking-tight leading-tight">
                                        <span className="block">
                                            Shaping the <GradientText>Future</GradientText> of AI with <GradientText>Accurate</GradientText> <GradientText>Data</GradientText>
                                        </span>
                                    </h1>
                                    
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                                        Maximo Global Solutions provides high-quality data labeling and annotation services to transform your AI and machine learning projects with precision and reliability.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-0">
                                        <Link href="/services" className="w-full sm:w-auto">
                                            <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-900 to-purple-900 text-white font-medium flex items-center justify-center group hover:from-purple-900 hover:to-gray-900 transition-all shadow-lg text-sm sm:text-base">
                                                Explore Services
                                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                        
                                        <Link href="/contact" className="w-full sm:w-auto">
                                            <Button variant="ghost" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/80 backdrop-blur-sm font-medium flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg text-sm sm:text-base">
                                                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-purple-900" /> 
                                                <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Request a Quote</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative order-1 lg:order-2">
                                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                                        <Image
                                            src="/robot3.png"
                                            alt="AI Robot"
                                            width={600}
                                            height={600}
                                            className="w-full h-auto object-contain"
                                            priority
                                            sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, (max-width: 1280px) 512px, 576px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lazy load dashboard with loading state */}
                    <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-2 sm:px-4">
                        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-2 sm:p-4">
                            <Suspense fallback={
                                <div className="w-full h-64 sm:h-80 md:h-96 bg-white/30 backdrop-blur-lg rounded-2xl border flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-primary"></div>
                                </div>
                            }>
                                <DataDashboard />
                            </Suspense>
                        </div>
                    </div>
                </section>
                
                {/* Simplified scrolling section */}
                <section className="bg-white/60 backdrop-blur-sm pb-8 pt-8 sm:pb-12 sm:pt-12 md:pb-16 md:pt-16">
                    <div className="relative m-auto max-w-5xl px-4 sm:px-6">
                        <div className="mx-auto mt-4 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8 transition-all duration-500">
                            {[
                                { name: "Healthcare", desc: "Medical AI" },
                                { name: "Automotive", desc: "Autonomous Vehicles" },
                                { name: "Finance", desc: "FinTech Solutions" },
                                { name: "Retail", desc: "E-commerce AI" }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-3 sm:p-4 bg-white/40 rounded-lg backdrop-blur-sm">
                                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1">{item.name}</div>
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