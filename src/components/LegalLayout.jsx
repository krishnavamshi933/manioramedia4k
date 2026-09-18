'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Reveal from './Reveal'

const LegalLayout = ({ children, activeNav = 'tnc', sections = [], lastUpdated = '02 September 2026' }) => {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const docSections = document.querySelectorAll('.doc-section')
      let current = ''
      docSections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 150) {
          current = sec.id
        }
      })
      setActiveHash(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="legal-hub-wrapper min-h-screen bg-[#06060a] text-[#dddde8] selection:bg-[#f7e839] selection:text-[#000]">
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --y: #f7e839;
          --cyan: #00f5c4;
          --black: #11181f;
          --dark: #0f141a;
          --card: #1a1f26;
          --border: rgba(247, 232, 57, .1);
          --text: #dddde8;
          --muted: #94a3b8;
          --red: #ff3b5c;
        }

        .legal-hub-wrapper {
          position: relative;
        }

        .legal-hub-wrapper::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(247, 232, 57, .015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247, 232, 57, .015) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        /* Hero Styling */
        .page-hero {
          padding: 40px 24px 32px;
          background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(247, 232, 57, 0.06), transparent 70%);
          text-align: center;
          position: relative;
          z-index: 1;
          border-bottom: 1px solid var(--border);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(247, 232, 57, 0.07);
          border: 1px solid rgba(247, 232, 57, 0.15);
          padding: 5px 14px;
          border-radius: 100px;
          font-family: inherit;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: #fff;
          margin-bottom: 16px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .page-hero h1 {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
          color: #fff;
        }

        .page-hero h1 span {
          color: var(--y);
        }

        .page-hero p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto 24px;
          line-height: 1.5;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .doc-switcher {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 4px;
          border-radius: 14px;
          backdrop-filter: blur(10px);
          gap: 4px;
        }

        .doc-tab {
          padding: 8px 20px;
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
        }

        .doc-tab.active {
          background: var(--y);
          color: #000;
          box-shadow: 0 4px 15px rgba(247, 232, 57, 0.2);
        }

        .doc-tab:not(.active) {
          color: rgba(255, 255, 255, 0.4);
        }

        .doc-tab:not(.active):hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .update-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.06em;
          font-weight: 500;
        }

        .update-chip::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cyan);
        }

        /* Layout Grid */
        .layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 0;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Sidebar Styling */
        .sidebar {
          padding: 32px 28px;
          position: sticky;
          top: 80px;
          align-self: start;
          height: calc(100vh - 80px);
          overflow-y: auto;
          border-right: 1px solid var(--border);
        }

        .sidebar::-webkit-scrollbar { width: 3px; }
        .sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        .sidebar-section { margin-bottom: 24px; }
        .sidebar-label {
          font-size: 10px;
          letter-spacing: 0.16em;
          color: rgba(255, 255, 255, 0.25);
          margin-bottom: 16px;
          display: block;
          text-transform: uppercase;
          font-weight: 700;
        }

        .sidebar ul { list-style: none; padding: 0; }
        .sidebar ul li { margin-bottom: 3px; }
        .sidebar ul a {
          display: block;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .sidebar ul a:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.04);
        }

        .sidebar ul a.active {
          color: var(--y);
          background: rgba(247, 232, 57, 0.08);
          border-color: rgba(247, 232, 57, 0.15);
          font-weight: 600;
        }

        /* Content Area */
        .content {
          padding: 32px 64px 80px 64px;
        }

        /* Mobile Adjustments */
        @media (max-width: 1024px) {
          .layout { grid-template-columns: 1fr; }
          .sidebar { 
            display: none;
          }
          .content { padding: 48px 24px; }
          .page-hero { padding: 60px 24px 60px; }
        }
      `}} />

      {/* Shared Hero */}
      <div className="page-hero">
        <Reveal>
          <div className="hero-badge">Legal Documents</div>
        </Reveal>
        <Reveal>
          <h1>Legal <span>Policies</span></h1>
        </Reveal>
        <Reveal>
          <p>These documents govern your use of 4KMedia LLP's website and services. Please read them carefully. They are written in plain language wherever possible.</p>
        </Reveal>

        <Reveal className="hero-actions">
          <div className="doc-switcher">
            <Link href="/terms" className={`doc-tab ${activeNav === 'tnc' ? 'active' : ''}`}>
              T&C
            </Link>
            <Link href="/privacy" className={`doc-tab ${activeNav === 'pp' ? 'active' : ''}`}>
              Privacy
            </Link>
            <Link href="/refund-policy" className={`doc-tab ${activeNav === 'rf' ? 'active' : ''}`}>
              Refund Policy
            </Link>
            <Link href="/disclaimer" className={`doc-tab ${activeNav === 'disc' ? 'active' : ''}`}>
              Disclaimer
            </Link>
          </div>
          <div className="update-chip">Last Updated: {lastUpdated}</div>
        </Reveal>
      </div>

      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <span className="sidebar-label">
              {activeNav === 'tnc' ? 'Terms & Conditions' : activeNav === 'rf' ? 'Refund Policy' : activeNav === 'disc' ? 'Disclaimer' : 'Privacy Policy'}
            </span>
            <ul>
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className={activeHash === sec.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById(sec.id)
                      if (element) {
                        const top = element.offsetTop - 120
                        window.scrollTo({ top, behavior: 'smooth' })
                        window.history.pushState(null, '', `#${sec.id}`)
                      }
                    }}
                  >
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* content area */}
        <main className="content">
          {children}


        </main>
      </div>
    </div>
  )
}

export default LegalLayout
