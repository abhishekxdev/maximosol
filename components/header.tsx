'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    'font-medium transition-colors',
                                    item.href === '/' && isScrolled 
                                        ? 'text-purple-900 border-b-2 border-purple-900' 
                                        : 'text-gray-600 hover:text-purple-900'
                                )}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button className="px-4 py-2 rounded-full bg-gray-900 text-white font-medium flex items-center hover:bg-purple-900">
                            Get Started For Free <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setMenuState(!menuState)}
                            className="text-gray-500 hover:text-gray-800"
                        >
                            {menuState ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {menuState && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    'block px-3 py-2 text-base font-medium rounded-md',
                                    item.href === '/' 
                                        ? 'text-purple-900 bg-purple-50' 
                                        : 'text-gray-600 hover:bg-gray-50'
                                )}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex flex-col space-y-3 px-3">
                            <Button className="px-4 py-2 rounded-full bg-gray-900 text-white font-medium w-full text-center flex items-center justify-center">
                                Get Started For Free <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}