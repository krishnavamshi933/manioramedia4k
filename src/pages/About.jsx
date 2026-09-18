'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import AnimatedIllustrations from '../components/AnimatedIllustrations';
import FaqItem from '../components/FaqItem';

// Count up hook
function useCountUp(to, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start;
    let animationFrame;
    const target = typeof to === 'number' ? to : 0;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const currentValue = Math.floor(progress * target);
      setValue(currentValue);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [to, duration]);

  return value;
}

// Stats Section Component
const StatsSection = () => {
  // Stats config
  const stats = [
    { n: 4, suffix: '+ Years', l: 'Industry Experience', d: 'Deep expertise in digital transformation', duration: 2200 },
    { n: 40, suffix: '+', l: 'Projects Delivered', d: 'Successful campaigns across various industries', duration: 2200 },
    { n: 98, suffix: '%', l: 'Client Retention', d: 'Long-term partnerships built on trust', duration: 2200 },
    { n: 12, suffix: 'x', l: 'Average ROI', d: 'Return on investment for our clients', duration: 2200 },

  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {stats.map((s, idx) => {
        // Use count up for each stat
        const count = useCountUp(s.n, s.duration);
        return (
          <Reveal key={s.l} as="div" className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 text-center hover-lift transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#f7e839] mb-2">
              {count}
              {typeof s.suffix === 'string' && <span>{s.suffix}</span>}
            </div>
            <div className="text-white font-semibold mb-2">{s.l}</div>
            <div className="text-white/60 text-sm">{s.d}</div>
          </Reveal>
        );
      })}
    </div>
  );
};

const About = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const faqData = [
    {
      question: "How quickly can you start working on my project?",
      answer: "Once we finalize the scope and onboarding process, we typically begin work within 3–5 business days."
    },
    {
      question: "What services does 4KMEDIA offer?",
      answer: "We provide performance-driven digital marketing services including Google Ads, Meta Ads (Facebook & Instagram), SEO, social media marketing, website development, and conversion optimization."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Yes. We work with startups, SMEs, and growing brands that want to scale their online presence and generate measurable business results."
    },
    {
      question: "Which industries do you specialize in?",
      answer: "We work with a range of industries including manufacturing, D2C brands, startups, SaaS companies, healthcare, education, and service businesses."
    },
    {
      question: "What does a typical monthly marketing engagement include?",
      answer: "Our monthly engagements usually include campaign strategy, ad management, performance optimization, analytics tracking, and detailed reporting."
    },
    {
      question: "Do you offer Google Ads and Meta Ads management?",
      answer: "Yes. We manage and optimize advertising campaigns across Google Ads, Facebook Ads, and Instagram Ads to help businesses generate leads, sales, and measurable ROI."
    },
    {
      question: "Do you offer SEO services?",
      answer: "Yes. Our SEO services include technical SEO, on-page optimization, keyword strategy, content optimization, and link-building strategies."
    },
    {
      question: "Can you help build or redesign our website?",
      answer: "Yes. We develop fast, SEO-friendly websites designed to support marketing campaigns and improve conversions."
    },
    {
      question: "Do you provide social media management?",
      answer: "Yes. We manage social media content, engagement, and paid promotions across platforms like Instagram, Facebook, LinkedIn, and YouTube."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes. Although we are based in India, we work with businesses globally through remote collaboration and online communication."
    },
    {
      question: "What reporting and transparency do you provide?",
      answer: "We provide weekly or monthly performance reports with clear insights into campaign performance, key metrics, and optimization strategies."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results depend on the service. Paid advertising campaigns can generate results within weeks, while SEO typically requires several months to show significant growth."
    },
    {
      question: "Do you offer one-time projects or only long-term retainers?",
      answer: "We offer both one-time projects (such as website development) and ongoing marketing retainers depending on client needs."
    },
    {
      question: "How do you measure success in marketing campaigns?",
      answer: "We measure success using key performance indicators such as leads generated, conversion rates, cost per acquisition, return on ad spend (ROAS), and overall business growth."
    }
  ];

  const visibleFaqs = showAllFaqs ? faqData : faqData.slice(0, 4);

  return (
    <div className="relative" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
      <AnimatedIllustrations />
      {/* Hero Section */}
      <section className="relative py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                About Our Agency
              </span>
            </Reveal>
            <Reveal>
              <h1 className="font-extrabold tracking-tight text-5xl mb-6">
                <span className="text-white">We Turn Digital Presence into </span>
                <span className="text-[#f7e839]">Real Growth.</span>
              </h1>
            </Reveal>
            <Reveal>
              <div className="mt-8 space-y-4">
                <p className="text-white/70 text-lg">
                  4KMEDIA is a performance marketing agency helping brands generate leads, acquire customers, and scale revenue through data-driven digital marketing strategies.
                </p>
                <p className="text-white/80 text-lg font-bold italic">
                  Based in Hyderabad, India — serving clients globally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-15 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Reveal>
              <h2 className="text-4xl font-bold text-center text-white mb-8">By the <span className="text-[#f7e839]">Numbers</span></h2>
            </Reveal>
            <Reveal>
              <p className="text-white/70 text-lg">Our track record speaks to our commitment to delivering exceptional results for our clients.</p>
            </Reveal>
          </div>
          {/* Animated Stats with count up effect */}
          <StatsSection />
        </div>
      </section>

      {/* Journey Section — Two Column */}
      <section className="py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4 ">
          <Reveal>
            <div className="text-center">
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                OUR JOURNEY
              </span>
            </div>
          </Reveal>

          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <Reveal>
              <h2 className="text-4xl font-bold text-center text-white mb-8">Reflecting Continuous <span className="text-[#f7e839]">Learning & Innovation.</span></h2>
            </Reveal>

            {/* Two columns */}
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">

              {/* Left — Story text */}
              <Reveal>
                <div className="space-y-6 text-white text-lg md:text-xl leading-relaxed">
                  <p className="font-medium">
                    From early experimentation to a performance-driven digital marketing agency, our journey reflects continuous learning, innovation, and measurable client success.
                  </p>
                  <p className="text-white/60 text-base md:text-lg">
                    We believe that digital marketing is not just about visibility, but about creating tangible business impact through data, strategy, and relentless execution.
                  </p>
                </div>
              </Reveal>

              {/* Right — Timeline */}
              <Reveal>
                <div className="relative">
                  {/* Vertical line — thicker */}
                  <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#f7e839] via-[#f7e839]/30 to-transparent" />

                  <div className="space-y-10">
                    {[
                      {
                        year: '2021',
                        title: 'Concept & Foundation',
                        desc: 'The idea behind 4KMEDIA began with a simple goal — helping small businesses build a credible digital presence and generate real business results online.',
                        accent: '#f7e839',
                        current: false,
                      },
                      {
                        year: '2022',
                        title: 'First Client Projects',
                        desc: 'Started working with early-stage businesses on social media marketing, website development, and brand visibility strategies.',
                        accent: '#f7e839',
                        current: false,
                      },
                      {
                        year: '2023',
                        title: 'Performance Marketing Focus',
                        desc: 'Expanded services to include Google Ads and Meta Ads, focusing on measurable outcomes such as lead generation and customer acquisition.',
                        accent: '#f7e839',
                        current: false,
                      },
                      {
                        year: '2024',
                        title: 'Industry Expansion',
                        desc: 'Worked with startups, SMEs, and manufacturers across different sectors, building scalable digital marketing strategies.',
                        accent: '#f7e839',
                        current: false,
                      },
                      {
                        year: '2026',
                        title: '4KMEDIA Officially Registered',
                        desc: 'The brand was formally registered, marking the transition into a structured performance marketing agency serving clients across India and globally.',
                        accent: '#f7e839',
                        current: true,
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="relative pl-12">
                        {/* Dot */}
                        <div
                          className="absolute left-0 top-1 w-7 h-7 rounded-full border-[3px] flex items-center justify-center"
                          style={{
                            borderColor: item.accent,
                            backgroundColor: item.current ? item.accent : '#0a0f15',
                            boxShadow: item.current ? `0 0 16px ${item.accent}90, 0 0 4px ${item.accent}` : `0 0 0 3px ${item.accent}20`
                          }}
                        >
                          {/* Inner dot */}
                          <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: item.current ? '#0a0f15' : item.accent }}
                          />
                        </div>
                        {/* Content */}
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: item.accent }}>{item.year}</p>
                        <h3 className="text-white font-bold text-lg mb-1.5">{item.title}</h3>
                        <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center">
                <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                  Mission & Vision
                </span>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl font-bold text-center text-white mb-8">Driven by Purpose, <span className="text-[#f7e839]">Defined by Results.</span></h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="group bg-[#11151c] rounded-2xl p-8 border border-white/[0.08] h-full hover:border-[#f7e839]/40 hover:shadow-[0_0_40px_rgba(247,232,57,0.08)] transition-all duration-400 cursor-default">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-0.5 bg-white/20 group-hover:bg-[#f7e839] group-hover:w-10 transition-all duration-300" />
                    <span className="text-white/40 group-hover:text-[#f7e839] text-xs font-bold uppercase tracking-widest transition-colors duration-300">Mission</span>
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-5 group-hover:text-[#f7e839] transition-colors duration-300">
                    Deliver Measurable<br />Business Growth
                  </h3>
                  <p className="text-white/55 text-[15px] leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    We help businesses grow through performance marketing, data-driven strategies, and transparent reporting that turn digital efforts into real business outcomes.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="group bg-[#11151c] rounded-2xl p-8 border border-white/[0.08] h-full hover:border-[#f7e839]/40 hover:shadow-[0_0_40px_rgba(247,232,57,0.08)] transition-all duration-400 cursor-default">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-0.5 bg-white/20 group-hover:bg-[#f7e839] group-hover:w-10 transition-all duration-300" />
                    <span className="text-white/40 group-hover:text-[#f7e839] text-xs font-bold uppercase tracking-widest transition-colors duration-300">Vision</span>
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-5 group-hover:text-[#f7e839] transition-colors duration-300">
                    A Trusted Global<br />Growth Partner
                  </h3>
                  <p className="text-white/55 text-[15px] leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    To become a trusted digital growth partner for businesses worldwide, helping brands scale through innovative marketing and measurable performance.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-15 relative bg-[#0a0f15]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
              Brand Partners
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-[#f7e839]">Brand Partners</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We collaborate with top brands to deliver innovative solutions and measurable growth.
            </p>
          </div>
          <div className="relative w-full overflow-hidden">
            <div
              className="brand-marquee flex gap-10 items-center"
              style={{
                width: 'max-content',
                minWidth: '100%',
                willChange: 'transform'
              }}
            >
              {/* Double logo sets for seamless infinite scroll */}
              {[
                {
                  src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                  alt: "Brand 1"
                },
                {
                  src: "/assets/brandLogos/hustleLogo.avif",
                  alt: "Brand 2"
                },
                {
                  src: "/assets/brandLogos/zeck.png",
                  alt: "Brand 3"
                },
                {
                  src: "/assets/brandLogos/auxo.avif",
                  alt: "Brand 4"
                }
              ].concat([
                {
                  src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                  alt: "Brand 1"
                },
                {
                  src: "/assets/brandLogos/hustleLogo.avif",
                  alt: "Brand 2"
                },
                {
                  src: "/assets/brandLogos/zeck.png",
                  alt: "Brand 3"
                },
                {
                  src: "/assets/brandLogos/auxo.avif",
                  alt: "Brand 4"
                }
              ]).map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  style={{ width: 'auto' }}
                  className="h-20 w-auto object-contain opacity-80 transition"
                  draggable="false"
                />
              ))}
            </div>
            <style>
              {`
              .brand-marquee {
                display: flex;
                flex-wrap: nowrap;
                animation: brand-marquee-scroll 20s linear infinite;
              }
              @keyframes brand-marquee-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .brand-marquee img:last-child {
                margin-right: 0 !important;
              }
            `}
            </style>
          </div>
        </div>
        {/* Marquee animation keyframes */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </section>


      {/* Values Section */}
      <section className="py-16 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-3">
                <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                  Our Values
                </span>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl font-bold text-center text-white mb-6">
                What We <span className="text-[#f7e839]">Stand For</span>
              </h2>
            </Reveal>
            <p className="text-white/55 text-[17px] mb-12 max-w-xl mx-auto text-center leading-relaxed">
              These aren't wall posters. These are the principles that drive every campaign, every client call, every deliverable.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'Results Over Vanity',
                  desc: "We focus on real business outcomes — leads, conversions, and revenue — not impressions or follower counts.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                  title: 'Transparency in Every Campaign',
                  desc: "Clear reporting, honest communication, and full visibility into your campaign performance.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                  title: 'Data-Driven Decisions',
                  desc: "Every marketing decision is backed by analytics, testing, and measurable performance insights.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                  title: 'Long-Term Partnerships',
                  desc: "We work as growth partners, building strategies designed for sustainable long-term success.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 2l4 4-4 4M12 22l-4-4 4-4M2 12l4-4 4 4M22 12l-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'Strategic Execution',
                  desc: "From planning to optimization, every campaign is built with precision and continuous improvement.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'Client Success First',
                  desc: "Your growth is our priority. When our clients succeed, our work speaks for itself.",
                },
              ].map((v) => (
                <Reveal key={v.title} as="div" className="group bg-[#11151c] border border-white/[0.08] rounded-2xl p-7 hover:border-[#f7e839]/30 hover:shadow-[0_0_30px_rgba(247,232,57,0.07)] transition-all duration-300">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-[#f7e839] to-[#e8d800] text-[#11181f] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(247,232,57,0.3)] transition-all duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#f7e839] transition-colors duration-300">{v.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">{v.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Heading */}
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                  FAQ
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Questions <span className="text-[#f7e839]">People Actually Ask</span>
                </h2>
                <p className="text-white/55 text-[16px] leading-relaxed">
                  Honest answers, no sales jargon.
                </p>
              </div>
            </Reveal>

            {/* Accordion */}
            <Reveal>
              <div className="space-y-4">
                {visibleFaqs.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    delay={index * 60}
                    defaultOpen={index === 0 && !showAllFaqs}
                  />
                ))}
              </div>
            </Reveal>

            {/* View More Toggle */}
            <Reveal>
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#f7e839]/30 text-[#f7e839] font-semibold hover:bg-[#f7e839]/10 transition-all duration-300"
                >
                  {showAllFaqs ? 'View Less' : 'View More FAQs'}
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    className={`transition-transform duration-300 ${showAllFaqs ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </Reveal>

            {/* Bottom CTA */}
            <Reveal>
              <div className="text-center mt-16">
                <p className="text-white/40 text-sm mb-4">Still have questions?</p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#f7e839] font-semibold text-sm hover:underline underline-offset-4 transition-all"
                >
                  Talk to our team
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-15 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-4">Ready to <span className="text-[#f7e839]">Transform Your Digital </span>Presence?</h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your goals and create a tailored strategy that drives measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
                  Start Your Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Link>
                <Link href="/careers" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
                  Work with us...
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;