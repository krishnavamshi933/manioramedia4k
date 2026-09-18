'use client'

import React, { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Link from 'next/link'
import SocialShare from '../components/SocialShare'

const JobDetail = ({ job }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!job) return null;

    return (
        <div className="pt-24 pb-20 bg-[#0a0f15] text-white/80 font-sans selection:bg-[#f7e839] selection:text-black">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 bg-[#0a0f15]">

                {/* Header Section */}
                <div className="mb-10 pt-4">
                    <div className="flex items-center gap-2 mb-6 text-sm text-white/50">
                        <Link href="/careers" className="hover:text-white transition-colors">All Open Positions</Link>
                        <span>›</span>
                        <span className="font-medium text-white/80">{job.title}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-serif text-white mb-3 tracking-tight">
                        {job.title} - Careers at 4KMEDIA
                    </h1>

                    <div className="text-sm text-white/50 mb-6 flex flex-wrap items-center gap-1">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                    </div>

                    <SocialShare title={`${job.title} Job Opening - 4KMEDIA`} />

                    <Link
                        href="/careers#apply"
                        className="inline-flex items-center gap-2 bg-[#f7e839] text-[#11181f] px-6 py-2.5 rounded text-sm font-bold hover:bg-[#f5d428] transition-colors"
                    >
                        Apply for this role
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* Content Sections */}
                <div className="space-y-10 text-[15px] md:text-[16px] leading-relaxed text-white/80">

                    {/* About */}
                    {job.description && (
                        <section>
                            <h2 className="text-[22px] font-serif text-white mb-4 tracking-tight">About This Role</h2>
                            <div className="space-y-4 text-white/80">
                                {job.description.split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Requirements */}
                    {job.requirements && (
                        <section>
                            <h2 className="text-[18px] font-serif text-white mb-4 tracking-tight">Requirements</h2>
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-white/40">
                                {job.requirements.map((req, idx) => (
                                    <li key={idx}>
                                        <span dangerouslySetInnerHTML={{ __html: req.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Responsibilities */}
                    {job.responsibilities && (
                        <section>
                            <h2 className="text-[18px] font-serif text-white mb-4 tracking-tight">Responsibilities</h2>
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-white/40">
                                {job.responsibilities.map((resp, idx) => (
                                    <li key={idx}>
                                        <span dangerouslySetInnerHTML={{ __html: resp.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>').replace(/\n/g, ' ') }} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Skills */}
                    {(job.skills || job.bonusSkills) && (
                        <section>
                            <h2 className="text-[18px] font-serif text-white mb-4 tracking-tight">Skills & Qualifications</h2>
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-white/40">
                                {job.skills && job.skills.map((skill, idx) => (
                                    <li key={`req-${idx}`}>{skill}</li>
                                ))}
                                {job.bonusSkills && job.bonusSkills.map((skill, idx) => (
                                    <li key={`opt-${idx}`}><span className="text-white/50">(Bonus)</span> {skill}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* KPIs */}
                    {job.kpis && (
                        <section>
                            <h2 className="text-[18px] font-serif text-white mb-4 tracking-tight">Key Performance Indicators</h2>
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-white/40">
                                {job.kpis.map((kpi, idx) => (
                                    <li key={idx}>{kpi}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* CTC */}
                    {job.ctc && (
                        <section>
                            <p className="text-white font-medium">CTC Offered: <span className="font-normal text-white/80">{job.ctc}</span></p>
                        </section>
                    )}

                    {/* Benefits */}
                    {job.benefits && (
                        <section>
                            <h2 className="text-[18px] font-serif text-white mb-4 tracking-tight">Benefits</h2>
                            <ul className="list-disc pl-5 space-y-2.5 marker:text-white/40">
                                {job.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Footer Links */}
                    <section className="pt-6 border-t border-white/10 mt-8">
                        <h2 className="text-[15px] font-semibold text-white mb-3">Learn More About 4KMEDIA</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/careers" className="text-[#f7e839]/80 hover:underline hover:text-[#f7e839] text-sm">Life at 4KMEDIA</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default JobDetail
