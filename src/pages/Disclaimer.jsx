'use client'

import LegalLayout from '@/components/LegalLayout'
import Reveal from '@/components/Reveal'

/* ─── Shared UI Primitives ─── */

const SectionLabel = ({ n }) => (
  <span className="font-mono text-[10px] text-brand uppercase tracking-[0.12em] block mb-2.5">
    SECTION {n}
  </span>
)

const H2 = ({ children }) => (
  <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
    {children}
  </h2>
)

const P = ({ children }) => (
  <p className="text-[15px] text-white/60 leading-relaxed mb-4">
    {children}
  </p>
)

const DocList = ({ items }) => (
  <ul className="space-y-4 my-4">
    {items.map((item, i) => (
      <li key={i} className="flex gap-4 text-sm text-white/60 leading-relaxed">
        <span className="text-brand shrink-0 mt-1">→</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Box = ({ variant = 'yellow', children }) => {
  const styles = {
    yellow: "bg-brand/5 border-brand/20 border-l-brand text-white/80",
    red: "bg-red-500/5 border-red-500/20 border-l-red-500 text-red-300",
    cyan: "bg-cyan-500/5 border-cyan-500/20 border-l-cyan-500 text-cyan-300",
  }
  return (
    <div className={`border-l-4 rounded-r-xl p-5 my-6 text-sm leading-relaxed ${styles[variant]}`}>
      {children}
    </div>
  )
}

/* ─── Icons ─── */
const IconEmail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
)
const IconLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
)
const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
)

const ContactCard = ({ title, rows }) => (
  <div className="bg-[#111118] border border-white/10 rounded-2xl p-8 mt-4 shadow-2xl">
    <h4 className="text-lg font-extrabold text-white mb-6 uppercase tracking-tight">{title}</h4>
    <div className="space-y-4">
      {rows.map((row, i) => (
        <div key={i} className="flex items-start gap-4 text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
          <span className="text-brand w-6 shrink-0 pt-0.5">{row[0]}</span>
          <div className="flex flex-col">
            <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{row[1]}</span>
            {row[2] ? (
              <a href={row[2]} target={row[2].startsWith('http') ? '_blank' : undefined} rel={row[2].startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-brand hover:underline transition-all font-medium">
                {row[3] || row[1]}
              </a>
            ) : (
              <span className="text-white/80 font-medium">{row[3] || row[1]}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const DocSection = ({ id, num, title, children }) => (
  <section id={id} className="doc-section mb-5 pb-5 border-b border-white/5 last:border-0 last:mb-0 last:pb-0">
    <Reveal>
      <SectionLabel n={num} />
      <H2>{title}</H2>
      {children}
    </Reveal>
  </section>
)

/* ═══════════════════════════════════════════
   DISCLAIMER CONTENT
═══════════════════════════════════════════ */

export default function Disclaimer() {
  const DISC_SECTIONS = [
    { id: 'disc-general', label: '1. General Information Only' },
    { id: 'disc-advice', label: '2. No Professional Advice' },
    { id: 'disc-no-guarantee', label: '3. No Guarantee of Results' },
    { id: 'disc-advertising', label: '4. Paid Advertising' },
    { id: 'disc-seo', label: '5. SEO and Organic Marketing' },
    { id: 'disc-web', label: '6. Website Design and Development' },
    { id: 'disc-third-party', label: '7. Third-Party Platforms and Services' },
    { id: 'disc-ai', label: '8. AI-Assisted Content and Tools' },
    { id: 'disc-registration', label: '9. Registration & Facilitation Services' },
    { id: 'disc-portfolio', label: '10. Case Studies and Portfolio' },
    { id: 'disc-responsibility', label: '11. Client Responsibility' },
    { id: 'disc-accuracy', label: '12. Website Accuracy and Availability' },
    { id: 'disc-external', label: '13. External Links' },
    { id: 'disc-ip', label: '14. Intellectual Property' },
    { id: 'disc-liability', label: '15. Limitation of Liability' },
    { id: 'disc-acceptance', label: '16. Acceptance & Other Agreements' },
    { id: 'disc-changes', label: '17. Changes to This Disclaimer' },
    { id: 'disc-governing', label: '18. Governing Law' },
    { id: 'disc-contact', label: '19. Contact' },
  ]

  return (
    <LegalLayout activeNav="disc" sections={DISC_SECTIONS} lastUpdated="02 September 2026">
      <div className="relative min-w-0">

        <Box variant="yellow">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs font-mono uppercase tracking-wider mb-2">
            <span>Effective Date: 02 September 2026</span>
            <span>Last Updated: 02 September 2026</span>
          </div>
          <P>
            This Disclaimer applies primarily to the 4KMEDIA website and Client Portal, including information, content, materials, resources, and general information made available through them by <strong className="text-white">4KMEDIA LLP</strong> ("4KMEDIA", "we", "us", or "our").
          </P>
          <P>
            Specific Services and Client engagements are governed by the applicable Terms and Conditions, Proposal, Statement of Work (SOW), Client Agreement, or other written agreement between 4KMEDIA and the Client. In the event of a conflict, the applicable written agreement will govern the specific engagement.
          </P>
          <P>
            By accessing or using the Website or Client Portal, you acknowledge this Disclaimer.
          </P>
        </Box>

        <DocSection id="disc-general" num="01" title="1. General Information Only">
          <P>Content on this Website and Client Portal, including service descriptions, articles, blogs, guides, case studies, pricing indications, and marketing materials, is provided for general informational and promotional purposes only.</P>
          <P>Although 4KMEDIA makes reasonable efforts to keep information accurate and current, we do not warrant or guarantee that all information is complete, accurate, current, or free from errors or omissions.</P>
          <P>Information may be changed, updated, removed, or discontinued without prior notice.</P>
        </DocSection>

        <DocSection id="disc-advice" num="02" title="2. No Professional Advice">
          <P>Content provided through the Website or Client Portal does not constitute legal, tax, financial, investment, accounting, regulatory, medical, or other professional advice.</P>
          <P>Information relating to business registrations, trademarks, taxation, advertising policies, technology, marketing, or other regulated areas should not be treated as a substitute for advice from an appropriately qualified professional.</P>
          <P>Where 4KMEDIA provides registration, application, documentation, listing, verification, or similar assistance, such assistance is administrative or facilitation support only, unless expressly agreed otherwise in writing.</P>
        </DocSection>

        <DocSection id="disc-no-guarantee" num="03" title="3. No Guarantee of Results">
          <P>4KMEDIA provides Services using reasonable skill, care, and effort. However, we do not guarantee specific outcomes or results.</P>
          <P>Unless expressly guaranteed in a written agreement signed by 4KMEDIA, we do not guarantee:</P>
          <DocList items={[
            'Search-engine rankings, first-page placement, or keyword positions;',
            'Website traffic, impressions, reach, clicks, or click-through rates;',
            'Leads, enquiries, calls, form submissions, or sign-ups;',
            'Sales, revenue, profit, or business growth;',
            'Conversion rates or cost per lead / cost per acquisition;',
            'Return on advertising spend (ROAS) or return on investment (ROI);',
            'Follower growth, engagement, shares, or viral performance;',
            'Approval of advertisements, campaigns, pages, or accounts by third-party platforms; or',
            'Any particular result within a specific timeframe.',
          ]} />
          <P>Digital marketing and business outcomes depend on numerous factors outside our reasonable control, including search-engine algorithms, advertising auctions, platform policies, competitor activity, market conditions, seasonality, budget, pricing, product or service quality, website performance, customer service, and audience behaviour.</P>
          <P>Any projections, estimates, forecasts, benchmarks, or examples provided by 4KMEDIA are illustrative only and are not promises or guarantees.</P>
        </DocSection>

        <DocSection id="disc-advertising" num="04" title="4. Paid Advertising">
          <P>When 4KMEDIA manages, sets up, or assists with paid advertising:</P>
          <DocList items={[
            'Advertising spend is paid to the applicable advertising platform and is separate from 4KMEDIA\'s professional fees.',
            '4KMEDIA does not control refunds, credits, reversals, or adjustments issued by advertising platforms. Any such refund or credit is subject to the applicable platform\'s policies and procedures.',
            'We do not control advertising platforms and are not responsible for account suspension, restriction, disapproval, bans, verification requirements, spending limits, delivery limitations, algorithm or auction changes, policy changes, cost increases, invalid clicks, click fraud, bot traffic, or loss of account data or history.',
            'Platforms may reject, pause, restrict, or remove advertisements or accounts at any time, including for reasons relating to the Client\'s industry, website, landing page, products, claims, business verification, or payment method.',
          ]} />
          <P>The Client remains responsible for the legality and accuracy of its products, services, offers, prices, discounts, claims, and landing pages, and for compliance with applicable laws and platform policies.</P>
          <P>Advertising metrics and attribution data are generated by third-party platforms and may vary between platforms, tools, and reporting periods. 4KMEDIA does not warrant the accuracy or completeness of third-party reporting.</P>
        </DocSection>

        <DocSection id="disc-seo" num="05" title="5. SEO and Organic Marketing">
          <P>Search-engine optimization and organic marketing are long-term and variable activities.</P>
          <P>Search rankings, indexing, traffic, visibility, and other outcomes may change due to algorithm updates, competitor activity, technical issues, hosting or website changes, content changes, penalties, historical domain issues, or decisions made by search engines.</P>
          <P>4KMEDIA does not guarantee rankings, indexing, traffic, visibility, or that any improvement will be permanent.</P>
          <P>We are not responsible for changes caused by search-engine updates, actions taken by the Client or third parties, or historical issues affecting a website or domain.</P>
        </DocSection>

        <DocSection id="disc-web" num="06" title="6. Website Design and Development">
          <P>Websites and development work are delivered according to the applicable agreed scope.</P>
          <P>Features, integrations, functionality, performance, or support outside the agreed scope are not included unless separately agreed in writing.</P>
          <P>Following delivery or handover, the Client is responsible for hosting, domain and SSL renewals, backups, security updates, plugin/theme/software updates, website content, and ongoing maintenance unless a paid maintenance or support arrangement has been agreed in writing.</P>
          <P>4KMEDIA does not guarantee that a website will remain uninterrupted, error-free, secure, immune from hacking or malware, or free from downtime, data loss, or compatibility issues arising from hosting providers, browsers, devices, operating systems, third-party plugins, APIs, integrations, or updates released after delivery.</P>
          <P>4KMEDIA is not responsible for issues caused by changes made by the Client, its employees, contractors, or other service providers after handover.</P>
          <P>Third-party components, including themes, plugins, scripts, stock images, fonts, APIs, and payment gateways, remain subject to their respective licences, terms, availability, and provider decisions.</P>
        </DocSection>

        <DocSection id="disc-third-party" num="07" title="7. Third-Party Platforms and Services">
          <P>4KMEDIA may use, recommend, integrate with, or rely upon third-party platforms, products, websites, software, advertising networks, hosting providers, domain registrars, payment providers, social-media platforms, search engines, APIs, CRM systems, analytics tools, plugins, and AI tools.</P>
          <P>These third-party services are not owned or controlled by 4KMEDIA.</P>
          <P>Their availability, features, pricing, policies, security, functionality, and terms may change without notice.</P>
          <P>4KMEDIA is not responsible for losses, interruptions, account actions, data loss, security incidents, policy changes, pricing changes, or other issues caused by third-party services, except to the extent such liability cannot lawfully be excluded or limited.</P>
          <P>Use of third-party services may also be subject to their own terms and policies.</P>
        </DocSection>

        <DocSection id="disc-ai" num="08" title="8. AI-Assisted Content and Tools">
          <P>4KMEDIA may use artificial-intelligence tools to assist with content creation, design, research, analysis, development, automation, or other Services.</P>
          <P>AI-generated or AI-assisted outputs may contain errors, outdated information, unintended similarities, or other inaccuracies and may have limited or no intellectual-property protection in certain jurisdictions.</P>
          <P>Where appropriate, Clients should review and approve AI-assisted materials before publication or use.</P>
          <P>4KMEDIA does not warrant that AI-assisted outputs are error-free, unique, or eligible for intellectual-property registration or protection.</P>
        </DocSection>

        <DocSection id="disc-registration" num="09" title="9. Registration, Application and Facilitation Services">
          <P>Where 4KMEDIA assists with registrations, applications, listings, verifications, documentation, or similar processes, our role is administrative and facilitation support only, unless otherwise agreed in writing.</P>
          <P>Government agencies, regulators, platforms, and other third parties control their own fees, requirements, processing times, queries, decisions, approvals, and rejections.</P>
          <P>4KMEDIA does not guarantee approval, registration, acceptance, or any particular processing timeline.</P>
        </DocSection>

        <DocSection id="disc-portfolio" num="10" title="10. Case Studies, Testimonials and Portfolio">
          <P>Case studies, testimonials, statistics, screenshots, portfolio materials, and other examples displayed by 4KMEDIA reflect specific projects, clients, circumstances, and periods.</P>
          <P>They are provided for illustrative purposes only and do not guarantee that similar results will be achieved for another Client.</P>
          <P>Results may vary based on industry, budget, competition, timing, implementation, Client cooperation, market conditions, and other factors.</P>
        </DocSection>

        <DocSection id="disc-responsibility" num="11" title="11. Client Responsibility">
          <P>Project outcomes may depend substantially on information, decisions, approvals, and actions taken by the Client.</P>
          <P>The Client is responsible for:</P>
          <DocList items={[
            'Providing accurate, complete, lawful, and authorised information, content, data, and access;',
            'Reviewing and approving deliverables before publication or implementation;',
            'Reviewing prices, offers, claims, promotions, and other business information before publication;',
            'The legality, quality, pricing, availability, and fulfilment of its products and services;',
            'Compliance of its business, website, advertisements, campaigns, and content with applicable laws and platform policies; and',
            'Maintaining its own accounts, credentials, subscriptions, renewals, backups, and access controls.',
          ]} />
          <P>4KMEDIA is not responsible for losses arising from Client delays, instructions, content, products, services, business practices, inaccurate information, or non-compliance.</P>
        </DocSection>

        <DocSection id="disc-accuracy" num="12" title="12. Website Accuracy and Availability">
          <P>We make reasonable efforts to maintain the Website and Client Portal and keep their content accurate and up to date.</P>
          <P>However, we do not warrant that information is complete, current, accurate, or error-free.</P>
          <P>Service descriptions, pricing indications, offers, availability, and other website content may change without notice.</P>
          <P>We do not guarantee that the Website or Client Portal will always be available, uninterrupted, secure, error-free, or free from viruses or other harmful components.</P>
        </DocSection>

        <DocSection id="disc-external" num="13" title="13. External Links">
          <P>The Website or Client Portal may contain links to third-party websites or resources for convenience or informational purposes.</P>
          <P>4KMEDIA does not control or necessarily endorse those websites and is not responsible for their content, products, services, availability, security, accuracy, or privacy practices.</P>
          <P>Accessing third-party websites is at the user's own discretion and risk.</P>
        </DocSection>

        <DocSection id="disc-ip" num="14" title="14. Intellectual Property">
          <P>Unless otherwise stated, content on the Website and Client Portal, including text, graphics, branding, logos, designs, images, videos, software, and other materials, is owned by or licensed to 4KMEDIA and may be protected by applicable intellectual-property laws.</P>
          <P>You may not reproduce, modify, distribute, publish, sell, or commercially exploit such content without appropriate permission, except where permitted by applicable law.</P>
          <P>Third-party trademarks, logos, names, and materials remain the property of their respective owners.</P>
          <P>Ownership and licensing of Client deliverables are governed by the applicable Proposal, Statement of Work, Client Agreement, or Terms and Conditions.</P>
        </DocSection>

        <DocSection id="disc-liability" num="15" title="15. Limitation of Liability">
          <P>To the maximum extent permitted by applicable law, 4KMEDIA LLP and its partners, personnel, representatives, and service providers will not be liable for indirect, incidental, special, consequential, or punitive losses arising from or relating to:</P>
          <DocList items={[
            'Use of or inability to use the Website or Client Portal;',
            'Reliance on general information published through them;',
            'Errors or omissions in website content;',
            'Marketing or business outcomes;',
            'Third-party websites, platforms, or services;',
            'Technical failures or interruptions; or',
            'Events outside our reasonable control.',
          ]} />
          <P>Any contractual limitation of liability applicable to a specific Client engagement is governed by the applicable Terms and Conditions, Client Agreement, or other written agreement.</P>
          <P>Nothing in this Disclaimer excludes or limits liability that cannot legally be excluded or limited under applicable law.</P>
        </DocSection>

        <DocSection id="disc-acceptance" num="16" title="16. Acceptance and Relationship to Other Agreements">
          <P>By accessing or using the Website or Client Portal, you acknowledge and accept this Disclaimer as applicable to your use of those channels.</P>
          <P>Your purchase or use of specific Services is governed by the applicable Terms and Conditions, Proposal, Statement of Work, Client Agreement, or other written agreement.</P>
          <P>Where there is a conflict between this Disclaimer and a specific written agreement governing a Client engagement, the specific written agreement will prevail to the extent of that conflict.</P>
        </DocSection>

        <DocSection id="disc-changes" num="17" title="17. Changes to This Disclaimer">
          <P>4KMEDIA may update this Disclaimer from time to time to reflect changes to the Website, Client Portal, Services, business practices, or applicable legal requirements.</P>
          <P>The updated version will be published on this page with a revised "Last Updated" date.</P>
        </DocSection>

        <DocSection id="disc-governing" num="18" title="18. Governing Law">
          <P>This Disclaimer is governed by the laws of India.</P>
          <P>Subject to applicable mandatory rights and remedies, disputes relating to this Disclaimer will be handled in accordance with the dispute-resolution provisions contained in the applicable 4KMEDIA Terms and Conditions, Client Agreement, or other written agreement.</P>
        </DocSection>

        <DocSection id="disc-contact" num="19" title="19. Contact">
          <P>For questions regarding this Disclaimer:</P>
          <ContactCard
            title="Contact Information"
            rows={[
              [<IconUser />, 'Entity', null, '4KMEDIA LLP'],
              [<IconLocation />, 'Address', null, '3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India'],
              [<IconEmail />, 'Email', 'mailto:team@4kmedia.in', 'team@4kmedia.in'],
            ]}
          />
        </DocSection>

      </div>
    </LegalLayout>
  )
}
