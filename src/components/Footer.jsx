'use client'

import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData } from '@/constants/servicesData'

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-white/60 hover:text-[#f7e839] transition-all duration-200 text-sm block py-1"
    >
      {children}
    </Link>
  </li>
)

const SocialIcon = ({ href, icon, label, primary = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`h-10 w-10 grid place-items-center rounded-lg transition-all duration-300 group ${primary
      ? 'bg-[#f7e839] border-[#f7e839] text-[#11181f]'
      : 'bg-white/5 border border-white/10 hover:bg-[#f7e839] hover:border-[#f7e839] hover:text-[#11181f]'
      }`}
    aria-label={label}
  >
    <div className="group-hover:scale-110 transition-transform duration-200">
      {icon}
    </div>
  </a>
)

const FooterServiceItem = ({ service }) => {
  const [menuPos, setMenuPos] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemRef = useRef(null);
  const hideTimer = useRef(null);

  if (!service.subServices?.length) {
    return (
      <li>
        <Link href={`/services/${service.id}`} className="text-white/60 hover:text-[#f7e839] transition-colors duration-200 text-sm block py-1">
          {service.t}
        </Link>
      </li>
    );
  }

  const show = () => {
    // Only trigger hover on non-touch devices
    if (!window.matchMedia('(hover: hover)').matches) return;
    clearTimeout(hideTimer.current);
    if (!itemRef.current) return;
    const r = itemRef.current.getBoundingClientRect();
    const left = r.right + 16 + 280 > window.innerWidth ? r.left - 296 : r.right + 16;
    const top = Math.max(8, Math.min(r.top, window.innerHeight - 412));
    setMenuPos({ top, left });
  };

  const hide = () => { hideTimer.current = setTimeout(() => setMenuPos(null), 120); };
  const cancelHide = () => clearTimeout(hideTimer.current);

  return (
    <li ref={itemRef} onMouseEnter={show} onMouseLeave={hide}>
      {/* Desktop: link + hover chevron */}
      <div className="flex items-center justify-between">
        <Link
          href={`/services/${service.id}`}
          className="text-white/60 hover:text-[#f7e839] transition-colors duration-200 text-sm flex items-center gap-1 py-1 group/sl"
        >
          {service.t}
          <svg className="w-3 h-3 opacity-0 group-hover/sl:opacity-60 transition-opacity hidden lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
        {/* Mobile toggle button */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="lg:hidden p-1.5 text-white/30 hover:text-white/70 transition-colors"
          aria-label="Toggle sub-services"
        >
          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Mobile accordion */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[400px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
        <ul className="mt-1 pl-3 border-l border-white/10 space-y-1">
          {service.subServices.map((sub, idx) => (
            <li key={idx}>
              <Link
                href={`/services/${service.id}`}
                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors py-1"
              >
                <span className="w-1 h-1 rounded-full bg-[#f7e839]/40 shrink-0" />
                {sub.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop hover portal */}
      {menuPos && typeof document !== 'undefined' && createPortal(
        <div
          style={{ position: 'fixed', top: menuPos.top, left: menuPos.left, zIndex: 9999 }}
          onMouseEnter={cancelHide}
          onMouseLeave={hide}
          className="w-[280px] bg-[#1a1f26]/98 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl shadow-black/60"
        >
          <div className="absolute top-4 -left-2 w-3.5 h-3.5 bg-[#1a1f26] border-l border-b border-white/10 rotate-45" />
          <h5 className="text-[#f7e839] font-bold text-xs uppercase tracking-wider mb-3 pb-3 border-b border-white/10">{service.t}</h5>
          <ul className="space-y-0.5 max-h-[320px] overflow-y-auto pr-1">
            {service.subServices.map((sub, idx) => (
              <li key={idx}>
                <Link
                  href={`/services/${service.id}`}
                  className="flex items-center gap-2 text-white/60 hover:text-white text-xs px-2 py-1.5 rounded-lg hover:bg-white/8 transition-all duration-150"
                >
                  <span className="w-1 h-1 rounded-full bg-[#f7e839]/50 shrink-0" />
                  {sub.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </li>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0c10] border-t border-white/10 relative z-40">
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3 mb-4 group logo-container will-change-transform">
            <div className="relative">
              <div className="absolute -inset-2 bg-[#f7e839]/20 rounded-xl blur-lg transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-110" />
              <Image // Replaced img with Image
                src="/assets/33.png"
                alt="4KMEDIA"
                width={56} // Added width
                height={56} // Added height
                className="relative h-12 w-auto px-2 lg:h-14 lg:w-auto rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border-2 border-[#f7e839]/20"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f7e839] rounded-full transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent tracking-tight">4KMEDIA</span>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
            Your dedicated digital growth partner. We combine creative strategies with data-driven insights to help your brand thrive in the digital landscape.
          </p>
          <div className="flex gap-3">
            <SocialIcon href="https://instagram.com/4kmediax" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>} label="Instagram" />
            <SocialIcon href="https://www.linkedin.com/company/4kmedia-in" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.6" /></svg>} label="LinkedIn" />
            <SocialIcon href="https://youtube.com/@4kmediax" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M10 9l5 3-5 3V9z" fill="currentColor" /></svg>} label="YouTube" />
            <SocialIcon
              href="https://wa.me/919989958238"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.845 11.845 0 005.925 1.587h.005c6.635 0 12.034-5.397 12.037-12.03a11.82 11.82 0 00-3.417-8.507" />
                </svg>
              }
              label="WhatsApp"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-3 relative z-30">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Our Services</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-3 relative z-30">
            <FooterServiceItem
              service={{
                id: 'digital-marketing',
                t: 'Digital Marketing',
                subServices: [
                  { title: 'Performance marketing' },
                  { title: 'Google Ads Management' },
                  { title: 'Meta Ads (Facebook & Instagram Ads)' },
                  { title: 'Search Engine Optimization (SEO)' },
                  { title: 'Social Media Marketing' }
                ]
              }}
            />
            <FooterLink href="/services/website-development">Website Development</FooterLink>
            <FooterLink href="/services/ui-ux">UI/UX Design</FooterLink>
            <FooterLink href="/services/video-production">Video Production</FooterLink>
            <FooterLink href="/services/event-management">Event Management</FooterLink>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Industries</h4>
          <ul className="space-y-3 relative z-30">
            <FooterLink href="/services">Manufacturing</FooterLink>
            <FooterLink href="/services">D2C & Ecommerce Brands</FooterLink>
            <FooterLink href="/services">Startups</FooterLink>
            <FooterLink href="/services">SaaS Companies</FooterLink>
            <FooterLink href="/services">Local Businesses & SMEs</FooterLink>
          </ul>
        </div>

        <div className="lg:col-span-2 relative z-30">
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
          <ul className="space-y-5 text-sm">
            <li>
              <a href="mailto:team@4kmedia.in" className="block text-white font-bold text-base hover:text-[#f7e839] transition-colors mb-1">team@4kmedia.in</a>
              <span className="text-white/50">Email Support</span>
            </li>
            <li>
              <a href="tel:+919989958238" className="block text-white font-bold text-base hover:text-[#f7e839] transition-colors mb-1">+91 99899 58238</a>
              <span className="text-white/50">Mon-Fri, 9AM-6PM IST</span>
            </li>
            <li>
              <a 
                href="https://maps.app.goo.gl/mhWYxQuozGBcxZ7G9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-white font-bold text-base hover:text-[#f7e839] transition-colors mb-1"
              >
                Office
              </a>
              <a 
                href="https://maps.app.goo.gl/mhWYxQuozGBcxZ7G9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 block hover:text-white/70 transition-colors"
              >
                4KMEDIA, WeWork RMZ Spire, 5th, 100, Silpa Gram Craft Village, HITEC City, Hyderabad, Telangana 500081
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 relative z-30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} 4KMEDIA LLP. All rights reserved. | CIN - ACV-0899 </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="text-white/40 hover:text-white/70 transition-colors">Refund Policy</Link>
            <Link href="/disclaimer" className="text-white/40 hover:text-white/70 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
