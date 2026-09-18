'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHoveringLogo, setIsHoveringLogo] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      // Keep logo fixed in place on scroll (no parallax)
      if (headerRef.current) {
        const logo = headerRef.current.querySelector('.logo-container')
        if (logo) {
          logo.style.transform = 'translateY(0)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => {
    if (!pathname) return false;
    if (path === '/') return pathname === '/';
    // Remove trailing slash if exists for comparison, and check startsWith to handle nested routes like /services/xyz
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    return normalizedPathname.toLowerCase().startsWith(path.toLowerCase());
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] h-16 lg:h-20 w-full transition-all duration-500 ${scrolled
          ? 'bg-[#0f141a]/98 backdrop-blur-xl shadow-2xl'
          : 'bg-gradient-to-b from-[#0f141a]/80 to-transparent'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full">
          <div className="flex h-full items-center justify-between relative">

            {/* Animated Background Element */}
            {/* <div className={`absolute inset-0 bg-gradient-to-r from-[#f7e839]/5 to-transparent opacity-0 transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : ''
          }`} /> */}

            {/* Logo with Enhanced Animation */}
            <Link
              href="/"
              className="relative z-10 flex items-center gap-3 group logo-container will-change-transform"
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
              onClick={() => setOpen(false)}
            >
              <div className="relative">
                {/* Animated glow effect */}
                <div className={`absolute -inset-2 bg-[#f7e839]/20 rounded-xl blur-lg transition-all duration-500 ${isHoveringLogo ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
                  }`} />

                <Image // Replaced img with Image
                  src="/assets/33.png"
                  alt="4KMEDIA - Premium Digital Agency"
                  width={56} // Added width
                  height={56} // Added height
                  style={{ width: 'auto' }}
                  className="relative h-12 w-auto px-2 lg:h-14 lg:w-auto rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border-2 border-[#f7e839]/20"
                />

                {/* Floating particles */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 bg-[#f7e839] rounded-full transition-all duration-300 ${isHoveringLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`} />
              </div>

              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent tracking-tight">
                  4KMEDIA
                </span>
                {/* Only show the logo and "4KMEDIA" text, no subtitle */}
              </div>
            </Link>

            {/* Premium Desktop Navigation Pill */}
            <nav className="hidden lg:flex items-center relative z-10 bg-[#111118]/80 border border-white/10 rounded-full px-1.5 py-1.5 backdrop-blur-md shadow-xl">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative font-medium text-sm transition-all duration-300 px-5 py-2 rounded-full group/nav-item ${isActive(item.path)
                    ? 'text-[#0f141a]' // Dark text for the active yellow pill
                    : 'text-white/70 hover:text-white'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Subtle hover background for inactive items */}
                  {!isActive(item.path) && (
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 scale-95 group-hover/nav-item:opacity-100 group-hover/nav-item:scale-100 transition-all duration-300 ease-out" />
                  )}

                  {/* Active highlight pill */}
                  {isActive(item.path) && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f7e839] to-[#f5d428] shadow-[0_2px_15px_rgba(247,232,57,0.3)] transition-all duration-300 ease-out" />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-[#f7e839] to-[#f7e839]/90 text-[#0f141a] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f7e839]/20 group/cta overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700" />

                <span className="relative flex items-center gap-2">
                  Book a strategy call
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Toggle - Rounded Square */}
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden relative z-20 h-11 w-11 rounded-2xl bg-[#1a1f26] border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-[#f7e839]/50 hover:bg-[#1a1f26]/80 ${open ? 'border-[#f7e839]/50' : ''
                }`}
            >
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'bg-[#f7e839] rotate-45 translate-y-2' : 'bg-white/80'
                  }`} />
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'opacity-0' : 'bg-white/80'
                  }`} />
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'bg-[#f7e839] -rotate-45 -translate-y-2' : 'bg-white/80'
                  }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Outside header to prevent scroll issues */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0f141a] z-[999] transition-all duration-500 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Logo and Close */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#f7e839]/20">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/33.png"
              alt="4KMEDIA"
              width={40}
              height={40}
              className="h-10 w-auto px-2 rounded-xl border-2 border-[#f7e839]/30"
            />
            <span className="text-xl font-bold text-white tracking-tight">4KMEDIA</span>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#f7e839]/20 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-[#f7e839]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Scrollable Menu Content */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center px-5 py-4 rounded-xl font-medium transition-all duration-300 mb-2 relative overflow-hidden ${isActive(item.path)
                  ? 'bg-[#f7e839]/15 text-[#f7e839] border-l-4 border-[#f7e839]'
                  : 'text-white/80 hover:bg-white/5 hover:text-[#f7e839]'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10 text-lg">{item.label}</span>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6 mt-4 border-t border-[#f7e839]/20">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#0f141a] px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] gap-2"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header