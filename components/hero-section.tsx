import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Play, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from "@/components/header"
import { DataDashboard } from '@/components/data-dashboard'
import Image from 'next/image'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,50%,.08)_0,hsla(220,70%,50%,.02)_50%,hsla(220,70%,50%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(220,70%,50%,.06)_0,hsla(220,70%,50%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(220,70%,50%,.04)_0,hsla(220,70%,50%,.02)_80%,transparent_100%)]" />
                </div>
                <section className="pt-48 pb-8 md:pt-56 md:pb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="text-left">
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="h1"
                                        className="text-6xl md:text-7xl lg:text-8xl font-normal mb-6 font-['Helvetica'] tracking-[-3px]">
                                        <span className="block">Shaping the <span className="bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">Future</span> of AI with <span className="bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">Accurate</span> <span className="bg-gradient-to-r from-purple-900 to-indigo-600 bg-clip-text text-transparent">Data</span></span>
                                    </TextEffect>
                                    
                                    <TextEffect
                                        per="line"
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.5}
                                        as="p"
                                        className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
                                        Maximo Global Solutions provides high-quality data labeling and annotation services to transform your AI and machine learning projects with precision and reliability.
                                    </TextEffect>

                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 0.75,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                        className="flex flex-col sm:flex-row items-start gap-4">
                                        <Link href="/services" className="w-full sm:w-auto">
                                            <Button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gray-900 to-purple-900 text-white font-medium flex items-center justify-center group hover:from-purple-900 hover:to-gray-900 transition-all shadow-lg">
                                                Explore Services
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                        
                                        <Link href="/contact" className="w-full sm:w-auto">
                                            <Button variant="ghost" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm font-medium flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg">
                                                <Play className="mr-2 h-5 w-5 text-purple-900" /> 
                                                <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">Request a Quote</span>
                                            </Button>
                                        </Link>
                                    </AnimatedGroup>
                                </div>
                                <div className="relative">
                                    <Image
                                        src="/robot3.png"
                                        alt="AI Robot"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-4">
                                <DataDashboard />
                            </div>
                        </div>
                    </AnimatedGroup>
                </section>
                <section className="bg-white/60 backdrop-blur-sm pb-16 pt-16 md:pb-32">
                    <div className="relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                          
                        </div>
                        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-12 gap-y-8 transition-all duration-500 sm:grid-cols-4 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex overflow-hidden">
                                <div className="flex animate-scroll">
                                    {[
                                        { name: "Healthcare", desc: "Medical AI" },
                                        { name: "Automotive", desc: "Autonomous Vehicles" },
                                        { name: "Finance", desc: "FinTech Solutions" },
                                        { name: "Retail", desc: "E-commerce AI" },
                                        { name: "Healthcare", desc: "Medical AI" },
                                        { name: "Automotive", desc: "Autonomous Vehicles" },
                                        { name: "Finance", desc: "FinTech Solutions" },
                                        { name: "Retail", desc: "E-commerce AI" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex-shrink-0 mx-8 text-center">
                                            <div className="text-2xl font-bold text-primary">{item.name}</div>
                                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
} 