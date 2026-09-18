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

const H3 = ({ children }) => (
  <h3 className="text-lg font-bold text-white/90 mt-6 mb-2.5">
    {children}
  </h3>
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
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
)
const IconLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
)
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
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
   TERMS & CONDITIONS CONTENT
═══════════════════════════════════════════ */

export default function Terms() {
  const TNC_SECTIONS = [
    { id: 'tnc-about', label: '1. About 4KMEDIA' },
    { id: 'tnc-acceptance', label: '2. Acceptance & Eligibility' },
    { id: 'tnc-scope', label: '3. Scope & Changes' },
    { id: 'tnc-portal', label: '4. Client Portal' },
    { id: 'tnc-responsibilities', label: '5. Client Responsibilities' },
    { id: 'tnc-payment', label: '6. Payment Terms' },
    { id: 'tnc-disputes', label: '7. Payment Disputes' },
    { id: 'tnc-refunds', label: '8. Refunds & Cancellations' },
    { id: 'tnc-ip', label: '9. Intellectual Property' },
    { id: 'tnc-revisions', label: '10. Revisions & Approvals' },
    { id: 'tnc-delivery', label: '11. Delivery & Maintenance' },
    { id: 'tnc-no-guarantee', label: '12. No Guarantee of Results' },
    { id: 'tnc-advertising', label: '13. Advertising & Platforms' },
    { id: 'tnc-third-party', label: '14. Third-Party & AI' },
    { id: 'tnc-confidentiality', label: '15. Confidentiality' },
    { id: 'tnc-privacy', label: '16. Data Protection & Privacy' },
    { id: 'tnc-warranties', label: '17. Warranties & Indemnity' },
    { id: 'tnc-liability', label: '18. Limitation of Liability' },
    { id: 'tnc-termination', label: '19. Termination & Abandonment' },
    { id: 'tnc-force-majeure', label: '20. Force Majeure' },
    { id: 'tnc-dispute-resolution', label: '21. Dispute Resolution' },
    { id: 'tnc-governing-law', label: '22. Governing Law' },
    { id: 'tnc-general', label: '23. General Provisions' },
    { id: 'tnc-changes', label: '24. Changes to Terms' },
    { id: 'tnc-contact', label: '25. Contact' },
  ]

  return (
    <LegalLayout activeNav="tnc" sections={TNC_SECTIONS} lastUpdated="02 September 2026">
      <div className="relative min-w-0">

        <Box variant="yellow">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs font-mono uppercase tracking-wider mb-2">
            <span>EFFECTIVE DATE: 02 SEPTEMBER 2026</span>
            <span>POLICY REF: 4KM-TNC-2026.V2</span>
          </div>
          <P>
            These Terms and Conditions (<strong className="text-white">"Terms"</strong> or <strong className="text-white">"Agreement"</strong>) constitute a legally binding contract between <strong className="text-white">4KMEDIA LLP</strong> (a Limited Liability Partnership registered under the laws of India with CIN: ACV-0899, hereinafter referred to as <strong className="text-white">"4KMEDIA"</strong>, <strong className="text-white">"Company"</strong>, <strong className="text-white">"we"</strong>, <strong className="text-white">"us"</strong>, or <strong className="text-white">"our"</strong>) and any client, user, organization, or corporate entity (hereinafter referred to as <strong className="text-white">"Client"</strong>, <strong className="text-white">"you"</strong>, or <strong className="text-white">"your"</strong>) accessing or utilizing the official website (<a href="https://www.4kmedia.in/" target="_blank" rel="noopener noreferrer" className="text-brand underline font-medium">https://www.4kmedia.in/</a>), client portals, digital systems, or engaging 4KMEDIA for professional services.
          </P>
          <P>
            By accessing or using our website or client portal, submitting an enquiry, issuing a purchase order, approving a proposal or Statement of Work ("SOW"), issuing payment, or engaging 4KMEDIA for services, you explicitly acknowledge that you have read, understood, and agreed to be bound by these Terms in their entirety.
          </P>
          <P>
            For specific projects or client engagements, these Terms may be supplemented by individual Proposals, Statements of Work ("SOW"), quotations, Master Services Agreements ("MSA"), or invoices. In the event of a direct conflict between these Terms and a fully executed project-specific agreement, the project-specific document will prevail to the extent of such conflict.
          </P>
          <P>
            If you do not agree to these Terms, you must immediately cease all access to and use of our website, client portal, and services.
          </P>
        </Box>

        <DocSection id="tnc-about" num="01" title="ABOUT 4KMEDIA">
          <P>4KMEDIA LLP is a digital services and marketing company providing services that may include:</P>
          <DocList items={[
            'Digital marketing and performance marketing',
            'Social media management and marketing',
            'Website design and development',
            'Branding and creative services',
            'Graphic design and content creation',
            'Video production and editing',
            'Advertising campaign management',
            'Technology and digital solutions',
            'Business and marketing consulting',
            'Registration or application assistance',
            'Events and related services',
            'AI-enabled and technology-assisted services',
          ]} />
          <P>The exact services, deliverables, timelines, fees, revisions, and other project conditions will be specified in the applicable Proposal, SOW, quotation, invoice, or written agreement.</P>
          <P>Registration, application, documentation, tax, trademark, business, or similar assistance provided by 4KMEDIA is administrative or facilitation support only unless expressly stated otherwise. 4KMEDIA does not provide legal, tax, financial, investment, or other regulated professional advice. Government fees, official processing times, approvals, rejections, or queries raised by any authority are outside 4KMEDIA's control, and 4KMEDIA does not guarantee approval, registration, or any timeline for any registration or application.</P>
        </DocSection>

        <DocSection id="tnc-acceptance" num="02" title="ACCEPTANCE, ELIGIBILITY AND WEBSITE USE">
          <H3>2.1 Eligibility</H3>
          <P>You represent that:</P>
          <DocList items={[
            'You are at least 18 years old or otherwise legally capable of entering into an agreement;',
            'You have authority to accept these Terms and engage 4KMEDIA where acting on behalf of a company, organisation, or other entity;',
            'The information you provide to 4KMEDIA is accurate and not misleading; and',
            'You are not located in, or acting on behalf of a person in, a jurisdiction or on a sanctions list that would prohibit 4KMEDIA from lawfully providing services or receiving payment.',
          ]} />
          <P>If you are engaging 4KMEDIA on behalf of a business or organisation, references to "you" or "Client" include that entity.</P>

          <H3>2.2 Electronic Acceptance</H3>
          <P>Approvals, instructions, confirmations, and acceptances given by email, client portal, documented business messaging (including WhatsApp Business), digital signature, or payment constitute valid written acceptance and are binding on the Client.</P>

          <H3>2.3 Communications</H3>
          <P>By providing your contact details, you agree that we may contact you by email, phone, SMS, or WhatsApp regarding your enquiry, project, invoices, or account, subject to applicable law and our Privacy Policy.</P>

          <H3>2.4 Website Use</H3>
          <P>The content, design, text, graphics, logos, and code of our website are owned by or licensed to 4KMEDIA. You may not copy, scrape, reproduce, frame, or use our website content for commercial purposes without written permission, or interfere with the security or operation of the website or client portal. The website is provided on an "as is" and "as available" basis.</P>
        </DocSection>

        <DocSection id="tnc-scope" num="03" title="SCOPE OF SERVICES AND CHANGES">
          <P>4KMEDIA will provide the services described in the applicable Proposal, SOW, quotation, or agreement.</P>
          <P>Any request outside the agreed scope may be treated as a change request or additional work and may result in additional fees, revised timelines, or both.</P>
          <P>4KMEDIA is not required to commence additional work until the applicable scope and commercial terms have been accepted.</P>
          <P>Project timelines depend on timely receipt of information, materials, approvals, payments, access credentials, and decisions from the Client. Timelines are estimates unless expressly stated otherwise in writing.</P>
        </DocSection>

        <DocSection id="tnc-portal" num="04" title="CLIENT PORTAL">
          <P>Where 4KMEDIA provides a Client Portal, dashboard, or project-management system, the Client agrees to:</P>
          <DocList items={[
            'keep login credentials confidential and not share access with unauthorised persons;',
            'not upload malware, unlawful, or infringing content;',
            'provide approvals, feedback, and files through the portal, which are treated as binding written records;',
            'be responsible for all activity under its account; and',
            'notify 4KMEDIA immediately of suspected unauthorised access.',
          ]} />
          <P>Actions taken in the portal such as clicking "Approve", "Accept", "Confirm", "Submit", or "Pay" constitute the Client's binding approval.</P>
          <P>4KMEDIA may suspend portal access for overdue payments, security risks, misuse, or breach, without cancelling any payment obligation. 4KMEDIA does not guarantee uninterrupted portal availability and may modify or discontinue portal features from time to time.</P>
        </DocSection>

        <DocSection id="tnc-responsibilities" num="05" title="CLIENT RESPONSIBILITIES">
          <P>The Client agrees to:</P>
          <DocList items={[
            'Provide accurate, complete, and lawful information and materials;',
            'Provide required access to websites, advertising platforms, social media accounts, hosting, analytics, or other systems;',
            'Ensure that it has the necessary rights and permissions for materials supplied to 4KMEDIA;',
            'Provide timely feedback, approvals, and decisions;',
            'Nominate an appropriate point of contact where required;',
            'Review deliverables carefully before approval or publication, including prices, offers, claims, spellings, and legal content;',
            'Ensure that its products, services, claims, offers, and business practices comply with applicable laws;',
            'Maintain responsibility for its own accounts, credentials, licences, registrations, and third-party subscriptions;',
            'Promptly notify 4KMEDIA of errors or concerns; and',
            'Cooperate reasonably to enable the agreed services to be performed.',
          ]} />
          <P>Where Client delays, lack of information, lack of access, delayed approvals, or other Client-related circumstances affect the project, the relevant deadlines may be extended accordingly, and 4KMEDIA is not responsible for resulting delay, rework, or additional cost.</P>
        </DocSection>

        <DocSection id="tnc-payment" num="06" title="PAYMENT TERMS">
          <P>Unless otherwise agreed in writing:</P>
          <DocList items={[
            'Fees are payable in the currency stated in the applicable quotation, Proposal, invoice, or agreement.',
            'Applicable taxes, including GST or other legally applicable taxes, may be charged in addition to stated fees where required.',
            'Projects may require an advance payment and/or milestone payments as specified in the Proposal or invoice. Work commences only after acceptance of the scope and receipt of the required advance.',
            'Retainer or recurring services are generally payable in advance for the applicable billing period.',
            'Advertising spend, media budgets, hosting, domains, software subscriptions, licences, third-party services, production expenses, and other external costs are generally separate from 4KMEDIA\'s service fees unless expressly included.',
            'Invoices should be paid by the due date stated on the invoice. Where no due date is stated, invoices are payable within seven (7) days of the invoice date.',
            'All payments must be made in full without set-off, counterclaim, or deduction. Bank charges, intermediary fees, payment-gateway fees, and currency-conversion costs are borne by the Client unless stated otherwise. Where a withholding tax deduction is required by law, the Client shall promptly provide valid tax-deduction certificates or equivalent documentation.',
          ]} />
          <P>Where an invoice remains unpaid, 4KMEDIA may suspend work, withhold deliverables, restrict access to applicable services, or terminate the engagement after providing reasonable notice where appropriate.</P>
          <P>Any applicable late-payment charges will be stated in the relevant Proposal, invoice, or agreement. Where none is stated, 4KMEDIA may charge simple interest at 1.5% per month (or the maximum rate permitted by applicable law, if lower) on overdue amounts from the due date until payment, and may recover reasonable costs of collection.</P>
          <P>4KMEDIA does not intentionally store full card numbers, CVV/security codes, UPI PINs, or online-banking passwords on its systems. Payments are processed through independent third-party payment providers operating under their own terms, privacy notices, and security procedures.</P>
        </DocSection>

        <DocSection id="tnc-disputes" num="07" title="PAYMENT DISPUTES AND CHARGEBACKS">
          <P>If the Client believes an invoice contains an error, the Client should notify 4KMEDIA promptly, and in any case within seven (7) days of the invoice date, providing reasonable details of the dispute. Undisputed amounts remain payable on time.</P>
          <P>The Client should not initiate a payment reversal or chargeback solely because of a billing dispute without first attempting to resolve the matter directly with 4KMEDIA at <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a>, except where such action is required or permitted by applicable law or by the relevant payment provider.</P>
          <P>If a chargeback or payment dispute is raised against a valid invoice for approved, delivered, or substantially performed services, 4KMEDIA may provide the payment provider with the accepted Proposal or scope, invoices, client-portal records, emails, approvals, deliverables, work logs, and payment records.</P>
          <P>Where a dispute is found to be baseless, the Client will reimburse 4KMEDIA for the reasonable costs of defending it, including gateway fees, bank charges, and administrative costs. Unauthorised chargebacks may also result in suspension of services and recovery of legitimate amounts owed, subject to applicable law.</P>
        </DocSection>

        <DocSection id="tnc-refunds" num="08" title="REFUNDS AND CANCELLATIONS">
          <P>Refunds are governed by our Refund & Cancellation Policy (<a href="https://www.4kmedia.in/refund-policy/" target="_blank" rel="noopener noreferrer" className="text-brand underline font-medium">https://www.4kmedia.in/refund-policy/</a>), which forms part of these Terms.</P>
          <P>Unless otherwise agreed in writing:</P>
          <DocList items={[
            'Fees for work already completed or resources already committed may be non-refundable;',
            'Advance payments may become non-refundable once work has commenced;',
            'Third-party costs, advertising expenditure, software, hosting, licences, vendor charges, and similar external costs may be non-refundable;',
            'Recurring or retainer fees may not be refundable for a billing period that has already commenced; and',
            'Any refund will be processed in accordance with the applicable Refund & Cancellation Policy and subject to applicable law.',
          ]} />
          <P>Nothing in these Terms excludes a refund or remedy that cannot lawfully be excluded.</P>
        </DocSection>

        <DocSection id="tnc-ip" num="09" title="INTELLECTUAL PROPERTY">
          <H3>9.1 Client Materials</H3>
          <P>The Client retains ownership of materials, trademarks, logos, content, data, photographs, videos, documents, and other intellectual property supplied by the Client. The Client grants 4KMEDIA a limited right to use such materials solely to provide the agreed services.</P>

          <H3>9.2 4KMEDIA Materials</H3>
          <P>Unless expressly transferred in writing, 4KMEDIA retains ownership of its pre-existing or independently developed methods and processes, frameworks, templates, systems, tools, know-how, workflows, libraries, generic code, internal resources, and reusable concepts and techniques, even where they appear in deliverables.</P>

          <H3>9.3 Final Deliverables</H3>
          <P>Subject to full payment of all amounts due for the applicable project, ownership of final deliverables specifically created for the Client will be transferred or licensed as stated in the applicable Proposal, SOW, or agreement. Where nothing is stated, the Client receives a non-exclusive, perpetual licence to use the final deliverables for the purpose described in the scope.</P>
          <P>Unless otherwise agreed, transfer of ownership does not include 4KMEDIA's pre-existing materials, third-party materials, stock assets, fonts, software, platform resources, or other materials subject to separate licences or ownership rights.</P>
          <P>Source code, editable design files, deployment access, and project credentials may be withheld until all amounts due have been received in cleared funds. Full intellectual-property ownership or source-code transfer requires a separate, written, paid agreement specifically executed for that purpose.</P>

          <H3>9.4 Portfolio</H3>
          <P>Unless the Client has requested confidentiality in writing before publication or the applicable agreement states otherwise, 4KMEDIA may identify the Client and display completed work for portfolio, case-study, presentation, marketing, or business-development purposes.</P>

          <H3>9.5 4KMEDIA Attribution</H3>
          <P>For free, discounted, promotional, or complimentary Services, 4KMEDIA may include a “Designed & Developed by 4KMEDIA” or similar attribution.</P>
          <P>The Client may request removal of the attribution, which may be subject to an additional fee. Removal does not create any refund or credit for completed work.</P>

          <H3>9.6 Source Code & Final Handover</H3>
          <P>Source code, editable files, credentials, and final project files will be provided only after full payment of all applicable project fees has been received and cleared. Until then, 4KMEDIA may retain such files and access.</P>
        </DocSection>

        <DocSection id="tnc-revisions" num="10" title="REVISIONS AND APPROVALS">
          <P>The number of revisions included in a project will be specified in the applicable Proposal, SOW, or quotation. Where no specific revision limit is stated, 4KMEDIA may provide up to two (2) reasonable revision rounds for standard creative or design deliverables.</P>
          <P>A revision means a reasonable modification of an approved concept. Additional revisions, or changes resulting from a change in direction, previously approved information, new requirements, or work outside the original scope, may incur additional fees.</P>
          <P>The Client is responsible for reviewing deliverables and providing consolidated feedback. Where a deliverable has been provided for approval and no material feedback is received within three (3) business days, 4KMEDIA may treat the deliverable as approved for purposes of project progression, subject to the nature of the service and any contrary written agreement.</P>
          <P>Approvals given by email, client portal, documented message, or signed document are binding.</P>
        </DocSection>

        <DocSection id="tnc-delivery" num="11" title="DELIVERY, POST-DELIVERY SUPPORT AND MAINTENANCE">
          <H3>11.1 Delivery</H3>
          <P>4KMEDIA may deliver work through email, client portal, staging links, cloud storage, or handover to the Client's systems, as reasonable for the service.</P>

          <H3>11.2 Defect Window</H3>
          <P>Unless stated otherwise in the Project Scope, 4KMEDIA will correct, free of charge, defects in its own delivered work that are reported in writing within fifteen (15) days of delivery or go-live, provided the defect is attributable to 4KMEDIA's work and the deliverable has not been modified by the Client or any third party.</P>

          <H3>11.3 Exclusions</H3>
          <P>The defect window does not cover: new features or changes; issues caused by Client or third-party modifications; hosting, domain, DNS, email, or server issues; third-party plugin, theme, API, platform, browser, or operating-system updates; security incidents, hacking, or malware not caused by 4KMEDIA's negligence; content errors in Client-supplied material; or performance issues arising from Client-selected infrastructure.</P>

          <H3>11.4 Maintenance</H3>
          <P>After delivery or handover, the Client is responsible for hosting, backups, security updates, plugin/theme/software updates, renewals, and ongoing maintenance unless a paid maintenance or support plan is agreed in writing. 4KMEDIA is not responsible for changes made by the Client or third parties after handover, or for loss resulting from the Client's failure to maintain backups, updates, renewals, or security.</P>
        </DocSection>

        <DocSection id="tnc-no-guarantee" num="12" title="NO GUARANTEE OF RESULTS">
          <P>Marketing, advertising, SEO, social media, branding, website, content, and technology services involve factors outside 4KMEDIA's control.</P>
          <P>Unless expressly guaranteed in a written agreement signed by 4KMEDIA, 4KMEDIA does not guarantee any particular revenue, sales, leads, conversions, search rankings, website traffic, followers, engagement, advertising performance, return on advertising spend, profit, business growth, or customer acquisition.</P>
          <P>Results may be affected by market conditions, competition, pricing, client operations, audience behaviour, advertising platforms, algorithms, technical factors, budgets, seasonality, and other external circumstances.</P>
          <P>Any projections, case studies, examples, forecasts, or estimates shared by 4KMEDIA are illustrative only and do not constitute guarantees.</P>
        </DocSection>

        <DocSection id="tnc-advertising" num="13" title="ADVERTISING BUDGETS AND THIRD-PARTY PLATFORMS">
          <P>Advertising budgets paid to platforms such as search engines, social media platforms, marketplaces, or other advertising networks are separate from 4KMEDIA's professional fees unless expressly stated otherwise. Advertising spend already charged or consumed by a platform is non-refundable by 4KMEDIA; any refund depends entirely on the platform's own policy.</P>
          <P>4KMEDIA does not control third-party platforms and is not responsible for: account suspensions or restrictions; algorithm or policy changes; rejected advertisements; platform outages; changes in advertising costs; changes in targeting or delivery; loss of historical data; click fraud or invalid traffic; platform security incidents; or actions taken by third-party platforms.</P>
          <P>The Client remains responsible for complying with the applicable rules and policies of third-party platforms and for maintaining a valid payment method and sufficient budget with each platform.</P>
        </DocSection>

        <DocSection id="tnc-third-party" num="14" title="THIRD-PARTY SERVICES, TOOLS AND AI">
          <P>4KMEDIA may use or recommend third-party services, software, hosting providers, advertising platforms, plugins, APIs, payment providers, AI tools, stock libraries, analytics platforms, or other external services.</P>
          <P>Such services may be subject to separate terms, fees, licences, privacy policies, availability limitations, and usage restrictions. 4KMEDIA is not responsible for third-party services to the extent that an issue arises from circumstances outside 4KMEDIA's reasonable control.</P>
          <P>Where a third-party service is discontinued, materially changed, becomes unavailable, or increases its charges, 4KMEDIA may recommend an alternative solution or adjust the relevant service, scope, or pricing where reasonably necessary.</P>
          <P><strong className="text-white">AI-assisted outputs:</strong> Where AI tools are used, outputs may contain errors, require human review, and may have limited or no copyright protection in some jurisdictions. The Client should review AI-assisted content before use. 4KMEDIA does not warrant that AI-generated material is error-free, unique, or eligible for intellectual-property registration.</P>
          <P><strong className="text-white">Event services:</strong> For event-related services, venues, vendors, caterers, equipment providers, and other suppliers are independent third parties. 4KMEDIA is not liable for their performance except to the extent expressly agreed in writing.</P>
        </DocSection>

        <DocSection id="tnc-confidentiality" num="15" title="CONFIDENTIALITY">
          <P>Each party may receive confidential or non-public information from the other party. Each party agrees to use reasonable care to protect confidential information and to use it only for purposes connected with the applicable business relationship.</P>
          <P>Confidentiality obligations do not apply to information that: is publicly available without breach of these Terms; was lawfully known before disclosure; is independently developed without use of confidential information; or must be disclosed by law, court order, or regulatory authority.</P>
          <P>These obligations continue for three (3) years after the end of the engagement, and indefinitely for credentials, trade secrets, and security-sensitive information. Where appropriate, the parties may enter into a separate Non-Disclosure Agreement ("NDA").</P>
        </DocSection>

        <DocSection id="tnc-privacy" num="16" title="DATA PROTECTION AND PRIVACY">
          <P>4KMEDIA processes personal data in accordance with applicable data-protection and privacy laws and its Privacy Policy (<a href="https://www.4kmedia.in/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand underline font-medium">https://www.4kmedia.in/privacy/</a>).</P>
          <P><strong className="text-white">Our Role:</strong> For our own website visitors, enquiries, vendors, applicants, and direct business contacts, we generally act as Data Fiduciary / Controller. Where a Client provides us with its customers', prospects', employees', or users' data to deliver services (for example, lead management, CRM integration, campaign execution, or website databases), we generally act as Data Processor / Service Provider on the Client's documented instructions.</P>
          <P><strong className="text-white">Client-Supplied Data:</strong> The Client represents that it has the authority, notices, consents, and lawful basis required to provide any customer, lead, or user data to 4KMEDIA, and that such data has not been unlawfully collected, scraped, or purchased from unauthorised sources. The Client remains responsible for the legality, accuracy, and permitted use of such data. Where additional data-processing terms are required, the parties may enter into a separate written data-processing arrangement.</P>
          <P>The Client should not provide sensitive, confidential, or personal information to 4KMEDIA unless it is necessary for the agreed service and the Client is authorised to provide it.</P>
        </DocSection>

        <DocSection id="tnc-warranties" num="17" title="WARRANTIES AND CLIENT INDEMNIFICATION">
          <P>The Client represents and warrants that it has the necessary rights, permissions, licenses, and authority to provide and authorize 4KMEDIA to use any materials, content, data, trademarks, images, videos, documents, claims, instructions, or other information supplied by or on behalf of the Client.</P>
          <P>To the extent permitted by applicable law, the Client agrees to indemnify and hold harmless 4KMEDIA, its partners, personnel, and representatives from third-party claims, losses, liabilities, penalties, damages, and reasonable costs (including reasonable legal fees) arising directly from:</P>
          <DocList items={[
            'materials, content, data, or information supplied by the Client;',
            'the Client\'s products, services, offers, or representations;',
            'instructions or claims provided or approved by the Client;',
            'the Client\'s violation of applicable law, third-party rights, or applicable platform policies;',
            'the Client\'s misuse of deliverables, credentials, systems, or access; or',
            'the Client\'s material breach of these Terms or the applicable agreement.',
          ]} />
          <P>The Client will not be responsible under this clause to the extent that a claim is caused by 4KMEDIA's own fraud, willful misconduct, or liability that cannot lawfully be excluded or limited.</P>
          <P>4KMEDIA will, where reasonably practicable, notify the Client of any claim for which indemnification is sought and provide reasonable cooperation in responding to such claim.</P>
        </DocSection>

        <DocSection id="tnc-liability" num="18" title="LIMITATION OF LIABILITY">
          <P>To the maximum extent permitted by applicable law, 4KMEDIA will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, business opportunities, goodwill, data, or anticipated savings arising from or relating to the services.</P>
          <P>This includes losses resulting from third-party platforms, advertising networks, hosting providers, software providers, payment providers, outages, algorithm changes, account restrictions, cyber incidents, Client delays, or circumstances outside 4KMEDIA's reasonable control.</P>
          <P>To the maximum extent permitted by applicable law, 4KMEDIA's total aggregate liability arising out of a specific project or engagement will not exceed the total professional fees actually paid to 4KMEDIA for that project or engagement during the six (6) months preceding the event giving rise to the claim.</P>
          <P>Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited, including liability arising from fraud or wilful misconduct where such limitation is prohibited by law.</P>
        </DocSection>

        <DocSection id="tnc-termination" num="19" title="SUSPENSION, ABANDONMENT AND TERMINATION">
          <H3>19.1 Suspension or Termination by 4KMEDIA</H3>
          <P>4KMEDIA may suspend or terminate services where reasonably necessary, including where:</P>
          <DocList items={[
            'Payments remain overdue;',
            'The Client materially breaches these Terms or the applicable agreement;',
            'The Client requests unlawful, fraudulent, abusive, or unethical activity;',
            'The Client violates applicable platform rules;',
            'Required information, access, approvals, or cooperation are repeatedly not provided; or',
            'Continuing the engagement creates a material legal, security, operational, or reputational risk.',
          ]} />

          <H3>19.2 Recurring Services</H3>
          <P>Either party may terminate a recurring engagement in accordance with the notice period stated in the applicable agreement or, where no period is stated, by providing at least thirty (30) days' written notice. Fees for the current billing period remain payable.</P>

          <H3>19.3 Projects</H3>
          <P>Termination after commencement may result in charges for work completed, resources committed, third-party costs, and other amounts properly incurred up to the termination date.</P>

          <H3>19.4 Abandonment</H3>
          <P>If the Client fails to provide required information, approvals, access, payment, or instructions for twenty (20) consecutive business days despite reasonable follow-up, 4KMEDIA may treat the project as abandoned after giving written notice. Work performed remains payable in full; resuming an abandoned project may require a revised scope, timeline, and fee.</P>

          <H3>19.5 Effect of Termination</H3>
          <P>Upon termination, the Client remains responsible for all amounts properly due up to the effective termination date; licences for unpaid deliverables terminate; and 4KMEDIA may retain or delete project data in accordance with its retention practices. Sections relating to payment, intellectual property, confidentiality, data protection, indemnification, limitation of liability, dispute resolution, governing law, and general provisions survive termination.</P>
        </DocSection>

        <DocSection id="tnc-force-majeure" num="20" title="FORCE MAJEURE">
          <P>4KMEDIA will not be responsible for delay or failure to perform caused by circumstances beyond its reasonable control, including but not limited to: natural disasters; fire, flood, or severe weather; government action or restrictions; internet or telecommunications failures; cyberattacks or security incidents; platform or infrastructure outages; strikes or labour disruptions; war, terrorism, civil unrest, or similar events; epidemics or pandemics; or failure of third-party service providers.</P>
          <P>Where reasonably possible, 4KMEDIA will notify the Client and take reasonable steps to resume affected services. Affected timelines will be extended accordingly.</P>
        </DocSection>

        <DocSection id="tnc-dispute-resolution" num="21" title="DISPUTE RESOLUTION">
          <P>The parties will first attempt to resolve any dispute through good-faith discussions for a period of fifteen (15) days from written notice of the dispute. If the dispute cannot be resolved through discussions, the parties may mutually agree to mediation.</P>
          <P>Subject to applicable law and any mandatory rights available to the Client, disputes arising from these Terms or an applicable engagement shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996, as amended.</P>
          <P>Unless otherwise agreed in writing:</P>
          <DocList items={[
            'The seat and venue of arbitration will be Hyderabad, Telangana, India;',
            'The arbitration will be conducted in English & Telugu;',
            'The tribunal will consist of a sole arbitrator mutually agreed by the parties or, failing agreement within thirty (30) days of a written request, appointed in accordance with the Arbitration and Conciliation Act, 1996;',
            'The arbitral award will be final and binding, subject to applicable law.',
          ]} />
          <P>Nothing in this section prevents either party from seeking urgent interim or injunctive relief from a court having appropriate jurisdiction.</P>
          <P>For international clients, the parties acknowledge that mandatory laws of the Client's jurisdiction may apply to matters that cannot legally be excluded by contract.</P>
        </DocSection>

        <DocSection id="tnc-governing-law" num="22" title="GOVERNING LAW AND JURISDICTION">
          <P>These Terms are governed by the laws of India.</P>
          <P>Subject to the dispute-resolution provisions above and applicable mandatory laws, courts located in Hyderabad, Telangana, India will have exclusive jurisdiction over disputes arising from these Terms.</P>
          <P>Nothing in these Terms is intended to remove or restrict any mandatory consumer, privacy, data-protection, or other statutory rights that cannot lawfully be excluded.</P>
        </DocSection>

        <DocSection id="tnc-general" num="23" title="GENERAL PROVISIONS">
          <H3>23.1 Entire Agreement</H3>
          <P>These Terms, together with the applicable Proposal, SOW, quotation, invoice, client-portal record, Privacy Policy, Refund & Cancellation Policy, and any other expressly incorporated document, form the agreement governing the relevant engagement. Where there is a conflict, the more specific project or engagement document will prevail over these general Terms to the extent of the conflict.</P>

          <H3>23.2 Severability</H3>
          <P>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.</P>

          <H3>23.3 Waiver</H3>
          <P>Failure by 4KMEDIA to enforce any provision of these Terms will not constitute a waiver of that provision.</P>

          <H3>23.4 Assignment</H3>
          <P>The Client may not assign or transfer its rights or obligations under these Terms without 4KMEDIA's prior written consent, except where permitted by law. 4KMEDIA may assign in connection with a restructuring, merger, or transfer of its business.</P>

          <H3>23.5 Non-Solicitation</H3>
          <P>During an engagement and for twelve (12) months after it ends, the Client will not, without 4KMEDIA's written consent, directly solicit for employment or engagement any 4KMEDIA employee or contractor who worked on the Client's project, to the extent permitted by applicable law.</P>

          <H3>23.6 Notices</H3>
          <P>Formal notices must be in writing and sent to the email addresses used during the engagement or to the postal address in Section 25. Notices to 4KMEDIA should be sent to <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a>.</P>

          <H3>23.7 Relationship</H3>
          <P>Nothing in these Terms creates a partnership, joint venture, agency, employment, or fiduciary relationship between the parties.</P>

          <H3>23.8 Language</H3>
          <P>These Terms are drafted in English. Any translation is for convenience only, and the English version prevails.</P>
        </DocSection>

        <DocSection id="tnc-changes" num="24" title="CHANGES TO THESE TERMS">
          <P>4KMEDIA may update these Terms from time to time to reflect changes in its services, business practices, technology, or applicable legal requirements.</P>
          <P>The updated version will be published on this website with a revised "Last Updated" date. For existing clients, material changes may be communicated through reasonable means where appropriate. Ongoing engagements remain governed by the version accepted at the time of engagement unless otherwise agreed.</P>
          <P>Continued use of the website or continued engagement with 4KMEDIA after an applicable update may constitute acceptance of the updated Terms, to the extent permitted by applicable law.</P>
        </DocSection>

        <DocSection id="tnc-contact" num="25" title="CONTACT">
          <P>For questions, notices, or grievances regarding these Terms:</P>
          <ContactCard
            title="Contact Information"
            rows={[
              [<IconUser />, 'Entity', null, '4KMEDIA LLP'],
              [<IconLocation />, 'Address', null, '3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India'],
              [<IconUser />, 'Grievance Officer', null, 'Dabbikar Krishnakanth'],
              [<IconEmail />, 'Email', 'mailto:team@4kmedia.in', 'team@4kmedia.in'],
            ]}
          />
        </DocSection>

      </div>
    </LegalLayout>
  )
}
