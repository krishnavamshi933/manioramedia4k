"use client"
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
   PRIVACY POLICY CONTENT
═══════════════════════════════════════════ */

export default function Privacy() {
  const PP_SECTIONS = [
    { id: 'pp-who', label: '1. Who We Are' },
    { id: 'pp-collect', label: '2. Information We Collect' },
    { id: 'pp-how', label: '3. How We Collect Information' },
    { id: 'pp-use', label: '4. How We Use Information' },
    { id: 'pp-client-data', label: '5. Client Data & Service Provider Role' },
    { id: 'pp-share', label: '6. Sharing of Information' },
    { id: 'pp-payments', label: '7. Payments' },
    { id: 'pp-cookies', label: '8. Cookies & Website Technologies' },
    { id: 'pp-international', label: '9. International Processing' },
    { id: 'pp-retention', label: '10. Data Retention' },
    { id: 'pp-security', label: '11. Data Security' },
    { id: 'pp-rights', label: '12. Your Rights and Choices' },
    { id: 'pp-marketing', label: '13. Marketing Communications' },
    { id: 'pp-children', label: '14. Children\'s Privacy' },
    { id: 'pp-third-party', label: '15. Third-Party Links & Services' },
    { id: 'pp-changes', label: '16. Changes to This Policy' },
    { id: 'pp-contact', label: '17. Contact and Grievance' },
    { id: 'pp-governing', label: '18. Governing Law' },
  ]

  return (
    <LegalLayout activeNav="pp" sections={PP_SECTIONS} lastUpdated="02 September 2026">
      <div className="relative min-w-0">

        <Box variant="yellow">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs font-mono uppercase tracking-wider mb-2">
            <span>Effective Date: 02 September 2026</span>
            <span>Last Updated: 02 September 2026</span>
          </div>
          <P>
            <strong className="text-white">4KMEDIA LLP</strong> (“4KMEDIA,” “we,” “us,” or “our”) respects your privacy and is committed to handling personal data responsibly.
          </P>
          <P>
            This Privacy Policy explains what information we may collect, how we use it, how we may share it, and the choices and rights available to you.
          </P>
        </Box>

        <DocSection id="pp-who" num="01" title="Who We Are">
          <P><strong className="text-white">4KMEDIA LLP</strong></P>
          <ContactCard
            title="Entity Information"
            rows={[
              [<IconLocation />, 'Address', null, '3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India'],
              [<IconGlobe />, 'Website', 'https://www.4kmedia.in/', 'https://www.4kmedia.in/'],
              [<IconEmail />, 'Email', 'mailto:team@4kmedia.in', 'team@4kmedia.in'],
              [<IconPhone />, 'Phone', 'tel:+919989958238', '+91 99899 58238'],
            ]}
          />
          <div className="mt-6">
            <P>4KMEDIA operates from India and provides digital marketing, website development, branding, advertising, creative, technology, consulting, and related services to clients in India and other countries.</P>
          </div>
        </DocSection>

        <DocSection id="pp-collect" num="02" title="Information We Collect">
          <P>Depending on how you interact with us, we may collect personal, business, technical, and transaction-related information.</P>
          <P>This may include:</P>
          <DocList items={[
            'Name',
            'Email address',
            'Phone or mobile number',
            'Company or organisation name',
            'Job title or professional information',
            'Billing and transaction information',
            'Project or enquiry details',
            'Files, content, and materials you provide',
            'Communications and correspondence',
            'Website and service usage information',
            'IP address, browser type, device information, and similar technical information',
          ]} />
          <P>If you are a client, you may also provide customer, lead, employee, website-user, or other personal data to us in connection with the services we provide.</P>
        </DocSection>

        <DocSection id="pp-how" num="03" title="How We Collect Information">
          <P>We may collect information:</P>
          <DocList items={[
            'when you submit an enquiry or contact form;',
            'when you email, call, or message us;',
            'when you request a proposal or purchase our services;',
            'when you use our website, client portal, or other online services;',
            'when you make or receive a payment;',
            'when you provide files, content, credentials, or project materials;',
            'through cookies, logs, analytics tools, and similar technologies; or',
            'from clients or authorized representatives for service delivery.',
          ]} />
          <P>We may also receive information from third parties where permitted by applicable law and reasonably necessary for our business or services.</P>
        </DocSection>

        <DocSection id="pp-use" num="04" title="How We Use Information">
          <P>We may use information to:</P>
          <DocList items={[
            'respond to enquiries;',
            'prepare proposals and quotations;',
            'provide and manage our services;',
            'communicate with clients and users;',
            'manage projects, approvals, and support;',
            'process payments, invoices, and business records;',
            'operate, maintain, and improve our website and services;',
            'protect our systems and prevent fraud, misuse, or unauthorized activity;',
            'analyze website, service, or campaign performance;',
            'send service-related communications;',
            'send marketing communications where permitted by applicable law; and',
            'comply with applicable legal, regulatory, tax, accounting, or contractual requirements.',
          ]} />
          <Box variant="cyan">We use personal data only for purposes that are reasonably connected with our business activities and the services we provide.</Box>
        </DocSection>

        <DocSection id="pp-client-data" num="05" title="Client Data and Service Provider Role">
          <P>In some cases, 4KMEDIA processes personal data on behalf of its clients, including lead data, customer data, website-user data, CRM data, campaign data, or similar information.</P>
          <P>Where we process such information on behalf of a client, the client is generally responsible for ensuring that it has the necessary authority, notices, consents, permissions, or other lawful basis to provide that information to us and instruct us to process it.</P>
          <P>4KMEDIA will process such information in accordance with the client's authorized instructions, the applicable agreement, and applicable law.</P>
          <P>Where appropriate or required, additional obligations may be established through a separate Data Processing Agreement (“DPA”) or Client Agreement.</P>
        </DocSection>

        <DocSection id="pp-share" num="06" title="Sharing of Information">
          <P>We do not sell personal data as a data-brokerage business.</P>
          <P>We may disclose or provide access to information where reasonably necessary to operate our business, provide our services, protect our systems, or comply with applicable law.</P>
          <P>This may include:</P>
          <DocList items={[
            'hosting and cloud providers;',
            'email and communication providers;',
            'payment processors;',
            'analytics and marketing platforms;',
            'CRM, project-management, or client-portal providers;',
            'contractors and consultants;',
            'professional advisers;',
            'service providers acting on our behalf; and',
            'regulators, courts, government authorities, or law-enforcement agencies where legally required or permitted.',
          ]} />
          <P>We may also disclose information where reasonably necessary to establish, exercise, or defend legal claims, prevent fraud or misuse, address security matters, or complete a business transaction such as a merger, restructuring, acquisition, or sale of assets.</P>
        </DocSection>

        <DocSection id="pp-payments" num="07" title="Payments">
          <P>Payments may be processed through third-party payment providers.</P>
          <P>Depending on the payment method, 4KMEDIA may receive limited payment-related information such as:</P>
          <DocList items={[
            'transaction ID;',
            'transaction amount;',
            'invoice number;',
            'payment status;',
            'payer name; and',
            'billing information.',
          ]} />
          <Box variant="red">
            We do not intentionally store full payment-card numbers, CVV/security codes, UPI PINs, or online-banking passwords on our own systems.
          </Box>
          <P>Payment providers may process payment information according to their own privacy policies and applicable terms.</P>
        </DocSection>

        <DocSection id="pp-cookies" num="08" title="Cookies and Website Technologies">
          <P>Our website may use cookies, pixels, tags, logs, analytics tools, and similar technologies for:</P>
          <DocList items={[
            'essential functionality;',
            'security;',
            'website performance;',
            'analytics;',
            'usage measurement;',
            'marketing measurement; and',
            'other website-related purposes.',
          ]} />
          <P>You may control certain cookies through your browser settings and, where available, through our cookie-consent tools. We will obtain appropriate consent before using non-essential cookies or similar technologies.</P>
          <P>Disabling certain technologies may affect website functionality.</P>
        </DocSection>

        <DocSection id="pp-international" num="09" title="International Processing">
          <P>4KMEDIA operates from India but may work with international clients, contractors, technology providers, and service providers.</P>
          <P>As a result, personal data may be processed, stored, or accessed in India or other countries.</P>
          <P>Where applicable law requires safeguards for international processing or transfers, we will use reasonable contractual, technical, organizational, or other appropriate safeguards.</P>
          <P>The actual location of processing may vary depending on the service providers and technologies used.</P>
        </DocSection>

        <DocSection id="pp-retention" num="10" title="Data Retention">
          <P>We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, or for longer where required or permitted by applicable law.</P>
          <P>Retention may depend on:</P>
          <DocList items={[
            'the type of information;',
            'the nature of the service;',
            'the client relationship;',
            'contractual requirements;',
            'legal, tax, and accounting obligations;',
            'security requirements; and',
            'dispute or record-keeping requirements.',
          ]} />
          <P>When information is no longer required, we may delete, anonymize, or securely dispose of it, subject to applicable legal, contractual, backup, security, and legitimate record-keeping requirements.</P>
        </DocSection>

        <DocSection id="pp-security" num="11" title="Data Security">
          <P>We use reasonable technical and organizational measures designed to protect personal data against unauthorized access, misuse, loss, alteration, or disclosure.</P>
          <P>Depending on the circumstances, these measures may include access controls, authentication, role-based access, secure systems, confidentiality requirements, backups, monitoring, and other appropriate safeguards.</P>
          <P>However, no website, electronic system, or internet transmission can be guaranteed to be completely secure.</P>
          <P>If we become aware of a security incident or personal-data breach, we will assess and respond to it and take appropriate steps, including notification where required by applicable law or contract.</P>
        </DocSection>

        <DocSection id="pp-rights" num="12" title="Your Rights and Choices">
          <P>Depending on applicable law, you may have rights relating to your personal data, including the right to:</P>
          <DocList items={[
            'request access to personal data;',
            'request correction or updating of inaccurate information;',
            'request deletion where legally applicable;',
            'withdraw consent where processing is based on consent;',
            'object to or restrict certain processing where legally applicable;',
            'opt out of marketing communications; and',
            'raise a privacy complaint or grievance.',
          ]} />
          <P>These rights may vary depending on your jurisdiction, the nature of the processing, and applicable legal requirements.</P>
          <Box variant="yellow">
            To make a privacy request, contact: <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a><br />
            Please use the subject line: <strong className="text-white">Privacy Request</strong>
          </Box>
        </DocSection>

        <DocSection id="pp-marketing" num="13" title="Marketing Communications">
          <P>We may send communications relating to:</P>
          <DocList items={[
            'projects;',
            'services;',
            'invoices;',
            'accounts;',
            'support;',
            'security; and',
            'other necessary business matters.',
          ]} />
          <P>Where permitted by applicable law, we may also send:</P>
          <DocList items={[
            'newsletters;',
            'offers;',
            'updates;',
            'educational content; and',
            'other promotional communications.',
          ]} />
          <P>You may opt out of promotional communications at any time by using the unsubscribe mechanism provided or contacting: <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a></P>
          <P>Opting out of marketing communications does not prevent us from sending essential service-related, contractual, security, or transactional communications.</P>
        </DocSection>

        <DocSection id="pp-children" num="14" title="Children's Privacy">
          <P>Our website and services are primarily intended for businesses, professionals, and adults.</P>
          <P>We do not knowingly seek to collect children's personal data for unrelated marketing purposes.</P>
          <P>If you believe that a child has provided personal data to us in circumstances where it should not have been collected, please contact us at: <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a></P>
          <P>We will review the matter and take appropriate action where required by applicable law.</P>
        </DocSection>

        <DocSection id="pp-third-party" num="15" title="Third-Party Links and Services">
          <P>Our website, communications, or services may contain links to third-party websites, applications, or services.</P>
          <P>We do not control the privacy practices, security, content, or availability of independent third parties.</P>
          <P>Information provided directly to third parties is subject to their own privacy policies and terms.</P>
          <P>We encourage you to review those policies before providing personal data to third-party services.</P>
        </DocSection>

        <DocSection id="pp-changes" num="16" title="Changes to This Policy">
          <P>We may update this Privacy Policy from time to time to reflect changes in:</P>
          <DocList items={[
            'our business;',
            'our services;',
            'our technology;',
            'our data-processing practices;',
            'applicable laws or regulations; or',
            'third-party services we use.',
          ]} />
          <P>When we update this Policy, we will revise the “Last Updated” date above.</P>
          <P>The latest version will be published on our website.</P>
          <P>Where applicable law requires additional notice for material changes, we will provide such notice through an appropriate method.</P>
        </DocSection>

        <DocSection id="pp-contact" num="17" title="Contact and Grievance">
          <P>If you have questions, privacy requests, or grievances regarding this Privacy Policy or our privacy practices, you may contact:</P>
          <ContactCard
            title="Contact & Grievance Officer"
            rows={[
              [<IconUser />, 'Entity', null, '4KMEDIA LLP'],
              [<IconLocation />, 'Address', null, '3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India'],
              [<IconUser />, 'Grievance Officer', null, 'Dabbikar Krishnakanth'],
              [<IconEmail />, 'Email', 'mailto:team@4kmedia.in', 'team@4kmedia.in'],
            ]}
          />
          <div className="mt-4">
            <P>We will address privacy requests and grievances in accordance with applicable law.</P>
          </div>
        </DocSection>

        <DocSection id="pp-governing" num="18" title="Governing Law">
          <P>Unless otherwise required by applicable law or provided in a separate written agreement, this Privacy Policy is governed by the laws of India.</P>
          <P>Nothing in this section is intended to restrict mandatory privacy rights available to individuals under applicable law.</P>
        </DocSection>

      </div>
    </LegalLayout>
  )
}
