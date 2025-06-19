'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { memo, useCallback } from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
]

// Memoized menu item component
const MenuItem = memo(({ item, isActive, onClick }: { item: any, isActive: boolean, onClick?: () => void }) => (
    <Link
        href={item.href}
        onClick={onClick}
        className={cn(
            'font-medium transition-all duration-300 text-sm sm:text-base relative pb-1',
            isActive 
                ? 'text-purple-900' 
                : 'text-gray-600 hover:text-purple-900'
        )}>
        {item.name}
        {isActive && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-900 rounded-full"></span>
        )}
    </Link>
))

MenuItem.displayName = 'MenuItem'

export const HeroHeader = memo(() => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 10)
    }, [])

    const toggleMenu = useCallback(() => {
        setMenuState(prev => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setMenuState(false)
    }, [])

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])
    
    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled ? 'bg-white shadow-md py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {menuItems.map((item, index) => (
                            <MenuItem 
                                key={index} 
                                item={item} 
                                isActive={pathname === item.href}
                            />
                        ))}
                    </div>
                    
                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button className="px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gray-900 text-white font-medium flex items-center hover:bg-purple-900 text-sm sm:text-base transition-colors duration-300">
                            Get Started For Free <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-500 hover:text-gray-800 p-2 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {menuState ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {menuState && (
                <div className="md:hidden bg-white shadow-lg border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item, index) => (
                            <div key={index} className="block px-3 py-2">
                                <MenuItem 
                                    item={item} 
                                    isActive={pathname === item.href} 
                                    onClick={closeMenu}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex flex-col space-y-3 px-3">
                            <Button className="px-4 py-2 rounded-full bg-gray-900 text-white font-medium w-full text-center flex items-center justify-center text-sm transition-colors duration-300">
                                Get Started For Free <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
})

HeroHeader.displayName = 'HeroHeader'