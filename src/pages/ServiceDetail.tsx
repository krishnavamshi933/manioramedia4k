'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '../components/Reveal'
import SocialShare from "@/components/SocialShare"
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import { servicesData, Service } from '../constants/servicesData'

// Service icon map
const ServiceIcons: Record<string, React.ReactNode> = {
    'digital-marketing': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'website-development': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'ui-ux': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    'video-production': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'logo-design': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'event-organization': (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
}

const ServiceDetail = ({ service }: { service: Service }) => {
    if (!service) return null;

    const otherServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);
    const icon = ServiceIcons[service.id];

    return (
        <div className="relative" style={{ background: 'linear-gradient(160deg, #0a0d12 0%, #0f1520 50%, #0a0d12 100%)' }}>
            <AnimatedIllustrations />

            {/* Full-bleed Hero with image overlay */}
            <section className="relative h-[50vh] min-h-[400px] lg:h-[65vh] overflow-hidden">
                {/* Background image */}
                <Image
                    src={service.img}
                    alt={service.t}
                    fill
                    className="object-cover scale-105"
                    style={{ filter: 'brightness(0.35)' }}
                    priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#0a0d12] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d12]/80 via-transparent to-transparent pointer-events-none" />

                {/* Breadcrumb + title */}
                <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-16 lg:pb-24">
                    <Reveal>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-[#f7e839] transition-colors text-sm mb-6 group"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5m7 7l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="group-hover:underline underline-offset-4">All Services</span>
                            <span className="text-white/30 mx-1">/</span>
                            <span className="text-white/80">{service.t}</span>
                        </Link>
                    </Reveal>

                    <Reveal>
                        <div className="flex items-center gap-5 mb-4">
                            {icon && (
                                <div className="w-14 h-14 rounded-2xl bg-[#f7e839] text-[#0a0d12] flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(247,232,57,0.35)]">
                                    {icon}
                                </div>
                            )}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                                {service.t} Services in Hyderabad
                            </h1>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {service.pts.map((pt, i) => (
                                <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm">
                                    {pt}
                                </span>
                            ))}
                        </div>
                        <SocialShare title={`${service.t} Services - 4KMEDIA`} url="" />
                    </Reveal>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">

                    {/* Main column */}
                    <div className="flex-1 min-w-0">
                        {/* Intro */}
                        <Reveal>
                            <div className="mb-16 max-w-3xl">
                                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#f7e839] mb-4">Overview</span>
                                <p className="text-xl text-white/80 leading-relaxed">
                                    {service.d}
                                </p>
                            </div>
                        </Reveal>

                        {/* Sub-services or points */}
                        {service.subServices && service.subServices.length > 0 ? (
                            <div className="space-y-3">
                                <Reveal>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#f7e839] mb-6">What We Offer</p>
                                </Reveal>
                                {service.subServices.map((sub, idx) => (
                                    <Reveal key={idx} as="div">
                                        <div className="flex gap-5 border-b border-white/[0.06] pb-6 last:border-0">
                                            <span className="text-[#f7e839]/60 font-bold text-sm w-7 shrink-0 mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                                            <div>
                                                <h3 className="text-white font-semibold text-base mb-1.5">{sub.title}</h3>
                                                <p className="text-white/55 text-sm leading-relaxed">{sub.description}</p>
                                                {sub.subItems && (
                                                    <p className="text-[#f7e839]/70 text-xs mt-2">↳ {sub.subItems}</p>
                                                )}
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-3">
                                <Reveal>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#f7e839] mb-6">What's Included</p>
                                </Reveal>
                                {service.pts.map((point, idx) => (
                                    <Reveal key={idx} as="div">
                                        <div className="flex items-center gap-4 py-3.5 border-b border-white/[0.06] last:border-0">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                                                <path d="M20 6L9 17l-5-5" stroke="#f7e839" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="text-white/80 text-base">{point}</span>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-72 shrink-0">
                        <Reveal>
                            <div className="sticky top-28 space-y-5">
                                {/* CTA */}
                                <div className="rounded-2xl bg-[#f7e839] p-7 text-[#0a0d12]">
                                    <h3 className="font-bold text-lg mb-1">Ready to get started?</h3>
                                    <p className="text-[#0a0d12]/65 text-sm mb-5 leading-relaxed">
                                        Let's build a custom {service.t} plan for your business.
                                    </p>
                                    <a
                                        href="/contact"
                                        className="block w-full text-center bg-[#0a0d12] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1a2030] transition-colors"
                                    >
                                        Get Free Proposal →
                                    </a>
                                </div>

                                {/* Other Services */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                    <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4">Other Services</p>
                                    <div className="space-y-1">
                                        {otherServices.map((s) => (
                                            <Link
                                                key={s.id}
                                                href={`/services/${s.id}`}
                                                className="flex items-center justify-between py-2.5 border-b border-white/[0.06] last:border-0 group"
                                            >
                                                <span className="text-white/65 group-hover:text-white text-sm transition-colors">{s.t}</span>
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-white/20 group-hover:text-[#f7e839] transition-colors shrink-0">
                                                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-1 text-[#f7e839] text-xs font-semibold mt-4 hover:underline underline-offset-4"
                                    >
                                        View all services →
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Full-width CTA Banner */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7e839]/5 via-transparent to-[#22d3ee]/5 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4">
                    <Reveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#f7e839] mb-6">Ready to Grow?</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                                Let's Build Something{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7e839] to-[#f0d800]">
                                    Remarkable
                                </span>{' '}
                                Together
                            </h2>
                            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                Our team is ready to craft a custom {service.t} strategy that drives real, measurable results for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#f7e839] to-[#f0d800] text-[#0a0d12] font-bold text-lg hover:shadow-[0_0_40px_rgba(247,232,57,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Get Your Free Proposal
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-200"
                                >
                                    ← Explore Services
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
