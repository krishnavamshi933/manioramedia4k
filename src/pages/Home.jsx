'use client'

import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero'
import ServicesCard from '../components/ServicesCard'
import Testimonial from '../components/Testimonial'
import FaqItem from '../components/FaqItem'
import Reveal from '../components/Reveal'
import Methodology from '../components/Methodology'

const Home = () => (
  <div className="overflow-hidden">
    <Hero />

    {/* About Section */}
    <section className="py-15 relative bg-[#0f141a]">
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Who We Are
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Strategic Digital <span className="text-[#f7e839]">Growth Partners</span>
          </h2>
          <p className="text-xl text-white/70 mb-4 font-light">Performance marketing strategies designed to drive leads, sales, and measurable ROI.</p>
          <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
            At 4KMEDIA, we blend creativity and strategy to help brands shine in a noisy world. We're young, bold, and obsessed with results that matter..We specialize in performance-driven digital solutions that deliver measurable results
            and sustainable growth for forward-thinking brands.
          </p>

          <Link href="/about" className="px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium text-center">
            Know More About Us
          </Link>
        </div>
      </Reveal>
    </section>

    {/* Services Section */}
    <section className="py-15 relative bg-[#06060a]">
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Performance Marketing & <span className="text-[#f7e839]">Digital Growth Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We help brands acquire customers, increase conversions, and scale revenue through data-driven digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {[
            {
              title: "Google Ads Management",
              description: "High-performance Google Ads campaigns designed to generate qualified leads, drive conversions, and maximize return on ad spend.",
              icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" // Search icon
            },
            {
              title: "Meta Ads (Facebook & Instagram)",
              description: "Strategic ad campaigns on Facebook and Instagram that help brands reach the right audience and scale customer acquisition.",
              icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" // File/Document icon (closest for 'ads')
            },
            {
              title: "Search Engine Optimization (SEO)",
              description: "Long-term organic growth through technical SEO, content strategy, and search visibility optimization.",
              icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" // Growth graph icon
            },
            {
              title: "Conversion Rate Optimization",
              description: "Turn website visitors into paying customers with optimized landing pages and performance-focused design.",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Checkmark circle
            },
            {
              title: "Social Media Marketing",
              description: "Build brand presence and engagement through strategic content and targeted campaigns across social platforms.",
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // Users icon
            },
            {
              title: "Website Development",
              description: "Fast, SEO-optimized websites built to support marketing campaigns and improve user experience.",
              icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" // Code icon
            }
          ].map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7e839]/10 to-[#22d3ee]/10 rounded-2xl transform group-hover:scale-105 transition-all duration-300 blur-xl opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:border-[#f7e839]/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f7e839] to-[#22d3ee] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-7">{service.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href="/services"
                    className="text-[#f7e839] text-sm font-medium flex items-center gap-2 hover:underline transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="group inline-flex items-center px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium relative overflow-hidden">
            <span className="relative z-10">See Our Marketing Solutions</span>
            <svg className="ml-3 w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7e839]/0 to-[#f7e839]/5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </Link>
        </div>
      </Reveal>
    </section>

    {/* Methodology Section */}
    <Methodology />

    {/* Brand Partners Section */}
    <div className="bg-[#06060a] relative py-15 mt-12">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Our <span className="text-[#f7e839]">Brand Partners</span>
        </h2>
        <div className="text-center mb-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          We collaborate with top brands to deliver innovative solutions and measurable growth.
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
    </div>

    {/* CTA Section */}
    <section className="py-15 relative bg-[#0f141a]">
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden">
          <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="text-[#f7e839]">Accelerate</span> Your Growth?
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Schedule a complimentary strategy session with our experts. We'll analyze your current
            performance and outline a customized roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#f7e839] to-[#f7e839]/90 text-black transition-all duration-300 font-semibold text-lg min-w-[200px] hover:shadow-2xl hover:shadow-[#f7e839]/30 transform hover:scale-105 text-center"
            >
              Schedule Strategy Call
            </Link>
            <Link
              href="/services"
              className="px-10 py-5 rounded-2xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-semibold text-lg min-w-[200px] text-center"
            >
              View Our Services
            </Link>
          </div>
          <p className="text-white/50 text-sm mt-6">No obligation, just actionable insights</p>
        </div>
      </Reveal>
    </section>
  </div>
)
export default Home