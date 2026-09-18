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
   REFUND & CANCELLATION POLICY CONTENT
═══════════════════════════════════════════ */

export default function RefundPolicy() {
  const RF_SECTIONS = [
    { id: 'rf-general', label: '1. No General Refund Guarantee' },
    { id: 'rf-advance', label: '2. Advance Payments & Deposits' },
    { id: 'rf-cancellation', label: '3. Cancellation by Client' },
    { id: 'rf-marketing', label: '4. Digital Marketing & Ads' },
    { id: 'rf-web', label: '5. Web & Creative Services' },
    { id: 'rf-retainers', label: '6. Retainers & Recurring' },
    { id: 'rf-delays', label: '7. Delay & Abandonment' },
    { id: 'rf-approved', label: '8. Approved Work & Revisions' },
    { id: 'rf-failure', label: '9. 4KMEDIA Material Failure' },
    { id: 'rf-third-party', label: '10. Third-Party Decisions' },
    { id: 'rf-free', label: '11. Free & Trial Services' },
    { id: 'rf-adjustment', label: '12. Non-Cash Adjustment' },
    { id: 'rf-requests', label: '13. Refund Requests' },
    { id: 'rf-processing', label: '14. Refund Processing' },
    { id: 'rf-chargebacks', label: '15. Chargebacks & Reversals' },
    { id: 'rf-double-recovery', label: '16. No Double Recovery' },
    { id: 'rf-breach', label: '17. Effect of Client Breach' },
    { id: 'rf-agreements', label: '18. Specific Agreements' },
    { id: 'rf-governing', label: '19. Governing Law' },
    { id: 'rf-changes', label: '20. Changes to This Policy' },
    { id: 'rf-contact', label: '21. Contact' },
  ]

  return (
    <LegalLayout activeNav="rf" sections={RF_SECTIONS} lastUpdated="02 September 2026">
      <div className="relative min-w-0">

        <Box variant="yellow">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs font-mono uppercase tracking-wider mb-2">
            <span>EFFECTIVE DATE: 02 SEPTEMBER 2026</span>
            <span>POLICY REF: 4KM-RFND-2026.V2</span>
          </div>
          <P>
            This Refund & Cancellation Policy (<strong className="text-white">"Policy"</strong>) governs commercial cancellations, service terminations, and fee adjustment protocols for all professional services delivered by <strong className="text-white">4KMEDIA LLP</strong> (a Limited Liability Partnership registered under the laws of India with CIN: ACV-0899, hereinafter referred to as <strong className="text-white">"4KMEDIA"</strong>, <strong className="text-white">"Company"</strong>, <strong className="text-white">"we"</strong>, <strong className="text-white">"us"</strong>, or <strong className="text-white">"our"</strong>) to clients and engaging entities (hereinafter referred to as <strong className="text-white">"Client"</strong>, <strong className="text-white">"you"</strong>, or <strong className="text-white">"your"</strong>) through <a href="https://www.4kmedia.in/" target="_blank" rel="noopener noreferrer" className="text-brand underline font-medium">https://www.4kmedia.in/</a> or any official digital channel.
          </P>
          <P>
            Our Services are customized professional and digital services, including digital marketing, advertising, SEO, website design and development, branding, design, content creation, video, technology, consulting, registration assistance, and related services.
          </P>
          <P>
            Because our Services require advance planning, professional time, resource allocation, and customised work, payments are not generally refundable once work has commenced or resources have been committed, except as expressly set out in this Policy or required by applicable law.
          </P>
          <P>
            Nothing in this Policy excludes any right, remedy, or refund that cannot legally be excluded under applicable law.
          </P>
          <P>
            By placing an order, making a payment, approving a proposal, or otherwise engaging 4KMEDIA, the Client confirms it has read, understood and accepted this Policy, in addition to the 4KMEDIA Terms and Conditions and Privacy Policy.
          </P>
        </Box>

        <DocSection id="rf-general" num="01" title="1. General Principle: No General Refund Guarantee">
          <P>4KMEDIA does not provide a general "money-back", "satisfaction", "no-questions-asked", or unconditional refund guarantee.</P>
          <P>Payments are generally non-refundable once any of the following occur:</P>
          <DocList items={[
            'Work has commenced;',
            'A project, milestone, slot, deliverable, or service has been scheduled;',
            'Resources (people, time, software, third-party services, or budget) have been allocated;',
            'A Deliverable or milestone has been completed or submitted to the Client;',
            'The Client has approved, used, published, or distributed the work;',
            'Third-party costs, licences, domains, hosting, ads spend, or commitments have been incurred; or',
            'A billing or retention period has begun.',
          ]} />
          <P>A client's change of mind, change in business direction, dissatisfaction with commercial results, perceived slow progress, dislike of a design or creative direction, hiring of another service provider, or decision not to use the work does not automatically create a refund entitlement.</P>
        </DocSection>

        <DocSection id="rf-advance" num="02" title="2. Advance Payments, Bookings and Deposits">
          <P>Projects and Services may require an advance payment, deposit, booking fee, setup fee, or onboarding fee before work begins.</P>
          <P>Advance payments:</P>
          <DocList items={[
            'Reserve project capacity;',
            'Cover planning, research, strategy, design preparation, technical preparation, scheduling, administration, and other pre-commencement work; and',
            'Once work has started or material resources have been committed, are non-refundable except as expressly stated in this Policy or required by applicable law.',
          ]} />
          <P>An advance is not a security deposit and does not create a guaranteed right of return.</P>
        </DocSection>

        <DocSection id="rf-cancellation" num="03" title="3. Cancellation by the Client">
          <P>The Client may request cancellation in writing to <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a>.</P>

          <H3>3.1 Before Work Starts</H3>
          <P>If the Client cancels before work has materially started and before material third-party costs or commitments have been incurred, 4KMEDIA may, at its sole discretion, refund the unused amount after deducting:</P>
          <DocList items={[
            'Payment-gateway, bank, and currency-conversion charges;',
            'GST, withholding tax, and other taxes already paid or due;',
            'Administrative and proposal costs;',
            'Planning, consultation, or research time already incurred;',
            'Third-party costs already paid or committed; and',
            'Any other non-recoverable cost reasonably incurred for the Client.',
          ]} />
          <P>Cancellation does not automatically result in a full refund.</P>

          <H3>3.2 After Work Starts</H3>
          <P>If cancellation occurs after work has commenced, the Client remains fully responsible for the value of:</P>
          <DocList items={[
            'Work completed;',
            'Work in progress;',
            'Professional time spent (including research, strategy, design, development, content, setup, optimisation, reporting, and management);',
            'Meetings, communication, and review time;',
            'Project management;',
            'Resources allocated to the project;',
            'Approved milestones;',
            'Revisions included in the scope and used;',
            'Third-party costs, licences, subscriptions, and vendor commitments; and',
            'Other reasonable non-recoverable costs incurred by 4KMEDIA.',
          ]} />
          <P>Any amount already paid will be applied against these amounts. If an amount remains outstanding, the Client must pay it immediately. If a genuine unused balance remains after reconciliation, 4KMEDIA may, at its sole discretion, refund that balance, subject to applicable law and deduction of all non-recoverable costs.</P>

          <H3>3.3 Cancellation of Recurring or Retainer Services</H3>
          <P>For recurring or retainer Services, the Client may cancel future billing periods by giving at least fifteen (15) days' prior written notice (unless the applicable proposal states a longer notice period).</P>
          <P>The current billing period is non-refundable to the extent Services, time, or resources have been provided, reserved, or started. Cancellation does not entitle the Client to a refund of the current month/period.</P>
          <P>Unused hours, unused deliverables, or unused capacity do not automatically carry forward or create a refund entitlement unless expressly agreed in writing. Third-party subscriptions and committed costs remain payable.</P>

          <H3>3.4 Bulk / Package / Multi-Service Deals</H3>
          <P>Where Services are sold as a package or at a discounted bundled price, the refund (if any) is calculated on the actual proportionate value of work performed or Services delivered, not on the per-unit price of individual items. Bundled pricing is not refundable on a unit-by-unit basis.</P>

          <H3>3.5 Concurrent Use, Over-Consumption and Hourly Blocks</H3>
          <P>Where Services are sold by hour, block, retainer, or capacity, the Client may not claim a refund for unused portions, and may not offset overuse against future Services. Over-consumed hours/usage are payable in full.</P>

          <H3>3.6 Breach of Terms</H3>
          <P>If the Client materially breaches these Terms, the applicable proposal, the Client Agreement, or applicable law, the Client's right to any refund is automatically forfeited, even for undelivered portions, and 4KMEDIA may recover reasonable costs.</P>
        </DocSection>

        <DocSection id="rf-marketing" num="04" title="4. Digital Marketing, SEO and Advertising Services">
          <P>Fees for digital marketing, SEO, social media, advertising management, campaign setup, strategy, content planning, optimisation, reporting, and related Services are generally non-refundable once the relevant work or billing period has commenced.</P>
          <P>4KMEDIA does not guarantee any specific:</P>
          <DocList items={[
            'Sales;',
            'Leads;',
            'Revenue;',
            'Conversions;',
            'Traffic;',
            'Search rankings;',
            'First-page rankings;',
            'Followers;',
            'Engagement;',
            'Advertising performance;',
            'Platform approval; or',
            'Return on advertising spend.',
          ]} />
          <P>Poor or unexpected marketing performance is not, by itself, a refund ground.</P>
          <H3>Advertising Spend</H3>
          <P>Advertising budgets paid to or through platforms such as Google, Meta, LinkedIn, YouTube, marketplaces, or other advertising networks are separate from 4KMEDIA's professional fees.</P>
          <P>Advertising spend already paid to or consumed by a third-party platform is non-refundable by 4KMEDIA. Any platform refund depends entirely on the platform's own policies and decisions.</P>
          <P>4KMEDIA is not responsible for account suspension, restriction, ban, or rejection by any advertising platform.</P>
        </DocSection>

        <DocSection id="rf-web" num="05" title="5. Website, Development and Creative Services">
          <P>Once work has commenced, fees relating to design, development, content creation, video production, animation, testing, deployment, configuration, migration, training, and other customised work are generally non-refundable.</P>
          <P>The following third-party costs are generally non-refundable once purchased, registered, activated, or committed:</P>
          <DocList items={[
            'Domains;',
            'Hosting;',
            'SSL certificates;',
            'Software;',
            'Plugins;',
            'Themes;',
            'Licences;',
            'Stock assets;',
            'Fonts;',
            'APIs;',
            'External tools; and',
            'Vendor charges.',
          ]} />
          <P>Where a third party issues a refund to 4KMEDIA, 4KMEDIA may pass the net amount received to the Client after deducting applicable gateway, banking, conversion, and administrative charges. A refund will be made only if 4KMEDIA actually receives the corresponding refund from the third party.</P>
        </DocSection>

        <DocSection id="rf-retainers" num="06" title="6. Retainers and Recurring Services">
          <P>Retainer and recurring Services are generally billed in advance for the applicable billing period.</P>
          <P>Once a billing period has commenced, the fee for that period is generally non-refundable to the extent Services, time, or resources have been provided, reserved, or started.</P>
          <P>Cancellation applies to future billing periods only, subject to the required notice.</P>
          <P>Unused time, unused capacity, or unused deliverables do not automatically create a refund or carry-forward entitlement unless expressly agreed in writing.</P>
          <P>The Client remains responsible for all third-party costs and committed expenses.</P>
        </DocSection>

        <DocSection id="rf-delays" num="07" title="7. Client Delay, Non-Cooperation, and Abandonment">
          <P>The Client is responsible for providing required content, information, access, approvals, feedback, cooperation, and payments on time.</P>
          <P>If the Client fails to provide required materials, approvals, or access, or remains unresponsive for twenty (20) consecutive business days, 4KMEDIA may treat the project as abandoned after reasonable written notice.</P>
          <P>In such cases:</P>
          <DocList items={[
            'Completed work remains payable;',
            'Amounts already paid may be applied against work performed and costs incurred;',
            'No refund is due for work completed or resources committed;',
            'The original project timeline may be cancelled; and',
            'Restarting the project may require new fees, a revised scope, and new timelines.',
          ]} />
          <P>Client delay does not, by itself, create a refund right.</P>
        </DocSection>

        <DocSection id="rf-approved" num="08" title="8. Approved Work, Deemed Approval, and Revisions">
          <P>A Deliverable, milestone, draft, design, content item, campaign, or website stage is treated as approved if:</P>
          <DocList items={[
            'The Client approves it in writing;',
            'The Client approves it through the Client Portal;',
            'The Client instructs 4KMEDIA to proceed to the next stage;',
            'The Client publishes, uses, distributes, or relies on the work; or',
            'The Client does not provide specific written feedback within the review period stated in the applicable proposal (and, if none is stated, within three (3) business days of delivery).',
          ]} />
          <P>Approved work is final and non-refundable.</P>
          <P>Revisions included within the agreed scope do not create a refund right. Additional revisions, new concepts, redesigns, additional features, or changes outside the agreed scope may be charged separately.</P>
        </DocSection>

        <DocSection id="rf-failure" num="09" title="9. Refund Due to 4KMEDIA's Material Failure">
          <P>A refund will be considered only where all of the following are true:</P>
          <DocList items={[
            '4KMEDIA has materially failed to deliver a specific, clearly identified Deliverable expressly included in the approved Project Scope;',
            'The failure is solely and directly attributable to 4KMEDIA;',
            'The Client has provided all required information, content, access, approvals, and cooperation on time;',
            'The Client has given 4KMEDIA written notice of the failure within fifteen (15) days of the relevant delivery date, specifying the alleged failure in reasonable detail; and',
            '4KMEDIA has been given a reasonable opportunity (of at least fifteen (15) days from receipt of that notice) to correct, complete, or remediate the failure, and has failed to do so.',
          ]} />
          <P>If a refund is approved, it will be calculated on a proportionate basis for the specific undelivered portion only, and after deducting:</P>
          <DocList items={[
            'Work already performed;',
            'Work substantially completed;',
            'Approved milestones;',
            'Project management, research, and strategy time;',
            'Revisions, meetings, and communication time;',
            'Third-party costs and vendor charges;',
            'Non-recoverable expenses;',
            'Payment-gateway, bank, conversion, and administrative charges; and',
            'Costs resulting from Client delay, non-cooperation, or breach.',
          ]} />
          <P>No refund will be due for Services that have been substantially performed, even if the Client is not fully satisfied with a subjective aspect of the work.</P>
        </DocSection>

        <DocSection id="rf-third-party" num="10" title="10. No Refund for Third-Party Decisions">
          <P>4KMEDIA is not responsible for, and will not refund, losses or disruptions caused by decisions, actions, outages, or changes of third parties, including:</P>
          <DocList items={[
            'Advertising platforms;',
            'Search engines;',
            'Social media platforms;',
            'Hosting providers;',
            'Domain registrars;',
            'Payment providers;',
            'Software, plugin, or theme providers;',
            'App stores;',
            'AI service providers; and',
            'Other external service providers.',
          ]} />
          <P>This includes account suspension, restriction, ban, rejection, algorithm changes, policy changes, outages, pricing changes, feature changes, or loss of access.</P>
        </DocSection>

        <DocSection id="rf-free" num="11" title="11. Free, Complimentary, Trial, Pilot, and Discounted Services">
          <P>Any Service provided free of charge, on a trial basis, as a pilot, as a demo, as a bonus, at a promotional price, or at a discounted rate is generally non-refundable once work has commenced or resources have been committed.</P>
          <P>Where a 4KMEDIA attribution is included in such work, the Client's request to remove the attribution does not create any right to a refund of amounts already paid or work already completed. Removal of the attribution, if permitted, may be subject to an additional fee.</P>
        </DocSection>

        <DocSection id="rf-adjustment" num="12" title="12. Non-Cash Adjustment Option">
          <P>Where 4KMEDIA considers, at its sole discretion, that a goodwill adjustment is appropriate, it may (but is not required to) offer:</P>
          <DocList items={[
            'Service credit;',
            'Additional Services of equivalent value; or',
            'An extension of the engagement period,',
          ]} />
          <P>instead of a cash refund. Any such adjustment is final, non-transferable, non-redeemable for cash, and subject to the same non-refundability rules as paid Services.</P>
        </DocSection>

        <DocSection id="rf-requests" num="13" title="13. Refund Requests">
          <P>All refund or cancellation requests must be submitted in writing to:</P>
          <Box variant="yellow">
            Email: <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a><br />
            Subject line: <strong className="text-white">Refund or Cancellation Request — [Project Name / Invoice Number]</strong>
          </Box>
          <P>The request should include:</P>
          <DocList items={[
            'Client name;',
            'Company name (if applicable);',
            'Project name;',
            'Invoice number;',
            'Payment date and amount;',
            'Reason for the request; and',
            'Relevant supporting information.',
          ]} />
          <P>Submitting a request does not:</P>
          <DocList items={[
            'Automatically suspend outstanding payment obligations;',
            'Automatically entitle the Client to a refund; or',
            'Extend any due date.',
          ]} />
          <P>4KMEDIA may review the applicable proposal, scope, invoice, payment records, communications, approvals, work logs, and Deliverables before making a decision.</P>
        </DocSection>

        <DocSection id="rf-processing" num="14" title="14. Refund Processing">
          <P>Where a refund is approved under this Policy:</P>
          <DocList items={[
            'It will generally be returned through the original payment method;',
            'It may be subject to deduction of applicable transaction, payment-provider, banking, currency-conversion, and administrative charges;',
            'It will normally be initiated within seven (7) to ten (10) business days after approval;',
            'The time taken for the funds to reach the Client depends on the relevant bank or payment provider;',
            'Refunds will not normally be made to a different person, account, or country without appropriate verification and supporting documents; and',
            'Refunds cannot be transferred to a third party.',
          ]} />
          <P>For international transactions, currency fluctuations, conversion losses, and intermediary bank charges are the Client's responsibility unless directly caused by an error of 4KMEDIA.</P>
        </DocSection>

        <DocSection id="rf-chargebacks" num="15" title="15. Chargebacks and Payment Reversals">
          <P>The Client should contact 4KMEDIA at <a href="mailto:team@4kmedia.in" className="text-brand underline font-medium">team@4kmedia.in</a> before initiating a chargeback or payment reversal where reasonably possible.</P>
          <P>If a chargeback or payment dispute relates to Services that were performed, delivered, approved, substantially performed, or properly billed, 4KMEDIA may provide the payment provider with:</P>
          <DocList items={[
            'The applicable proposal, scope, or Client Agreement;',
            'This Policy and the 4KMEDIA Terms and Conditions;',
            'Invoices and payment records;',
            'Client Portal records;',
            'Emails, messages, and approvals;',
            'Work logs and project records; and',
            'Deliverables and delivery records.',
          ]} />
          <P>Unauthorised, fraudulent, or baseless chargebacks may result in:</P>
          <DocList items={[
            'Suspension or termination of Services;',
            'Forfeiture of any pending refund; and',
            'Recovery of legitimate amounts owed, subject to applicable law.',
          ]} />
          <P>Nothing in this section prevents a Client from exercising a genuine statutory or legal right.</P>
        </DocSection>

        <DocSection id="rf-double-recovery" num="16" title="16. No Double Recovery">
          <P>A Client may not obtain both:</P>
          <DocList items={[
            'A refund from 4KMEDIA; and',
            'A chargeback, bank reversal, or payment-provider refund',
          ]} />
          <P>for the same payment, in whole or in part.</P>
          <P>If a duplicate recovery occurs, the Client must promptly notify 4KMEDIA and return the excess amount, plus any associated costs, within fifteen (15) days.</P>
        </DocSection>

        <DocSection id="rf-breach" num="17" title="17. Effect of Client Breach">
          <P>If the Client breaches these Terms, the applicable proposal, the Client Agreement, or applicable law, the Client's right to any refund is automatically forfeited, including any pending or future refund. 4KMEDIA may also recover reasonable administrative, legal, and collection costs.</P>
        </DocSection>

        <DocSection id="rf-agreements" num="18" title="18. Specific Agreements Prevail">
          <P>If a proposal, SOW, Client Agreement, or other written agreement contains specific refund, cancellation, termination, or payment terms, those terms will apply to the relevant engagement to the extent of any inconsistency with this Policy.</P>
        </DocSection>

        <DocSection id="rf-governing" num="19" title="19. Governing Law">
          <P>This Policy is governed by the laws of India.</P>
          <P>Subject to applicable mandatory rights and remedies (including under the Consumer Protection Act, 2019, and applicable data-protection law), disputes relating to this Policy will be handled in accordance with the dispute-resolution provisions of the 4KMEDIA Terms and Conditions.</P>
        </DocSection>

        <DocSection id="rf-changes" num="20" title="20. Changes to This Policy">
          <P>4KMEDIA may update this Policy from time to time to reflect changes in its Services, business practices, technology, or applicable legal requirements. The updated version will be published on this page with a revised "Last Updated" date.</P>
          <P>For existing engagements, material changes will apply prospectively unless otherwise required by applicable law. Continued use of the Services or website after an update may constitute acceptance of the updated Policy, to the extent permitted by applicable law.</P>
        </DocSection>

        <DocSection id="rf-contact" num="21" title="21. Contact">
          <ContactCard
            title="Entity Information"
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
