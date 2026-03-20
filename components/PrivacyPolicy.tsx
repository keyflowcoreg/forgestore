// ---------------------------------------------------------------------------
// PrivacyPolicy  (Server Component)
// ---------------------------------------------------------------------------

interface PrivacyPolicyProps {
  companyName: string;
  contactEmail: string;
  websiteUrl: string;
  lastUpdated: string;
  dpoEmail?: string;
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}

export function PrivacyPolicy({
  companyName,
  contactEmail,
  websiteUrl,
  lastUpdated,
  dpoEmail,
}: PrivacyPolicyProps) {
  const dpo = dpoEmail ?? contactEmail;

  return (
    <article className="prose-invert mx-auto max-w-3xl space-y-12 px-4 py-16 text-zinc-300 sm:px-6 lg:px-0">
      {/* ------ Header ------ */}
      <header className="space-y-3 border-b border-zinc-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-zinc-500">
          Last updated: {lastUpdated}
        </p>
        <p className="leading-relaxed">
          {companyName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
          operates{" "}
          <a href={websiteUrl} className="text-white underline underline-offset-4 hover:text-zinc-200">
            {websiteUrl}
          </a>
          . This Privacy Policy explains how we collect, use, disclose, and
          safeguard your personal data when you visit our website or use our
          services, in accordance with the General Data Protection Regulation
          (GDPR) and other applicable data-protection legislation.
        </p>
      </header>

      <Section id="data-collection" title="1. Data We Collect">
        <p>We may collect the following categories of personal data:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Identity data</strong> &mdash; name,
            email address, username.
          </li>
          <li>
            <strong className="text-white">Account data</strong> &mdash;
            credentials and profile preferences.
          </li>
          <li>
            <strong className="text-white">Transaction data</strong> &mdash;
            payment details (processed securely by Stripe and/or Coinbase; we do
            not store full card numbers or private keys).
          </li>
          <li>
            <strong className="text-white">Technical data</strong> &mdash; IP
            address, browser type, operating system, referring URLs, pages
            visited, timestamps collected through server logs and Google
            Analytics.
          </li>
          <li>
            <strong className="text-white">Usage data</strong> &mdash;
            information about how you interact with our services.
          </li>
          <li>
            <strong className="text-white">Communication data</strong> &mdash;
            messages sent to us via forms or email.
          </li>
        </ul>
      </Section>

      <Section id="data-usage" title="2. How We Use Your Data">
        <p>Your data is processed for the following purposes:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Providing and maintaining our services.</li>
          <li>Processing transactions and managing subscriptions.</li>
          <li>Communicating with you about your account or our services.</li>
          <li>
            Analysing usage patterns to improve performance and user experience
            (Google Analytics).
          </li>
          <li>Ensuring security and preventing fraud.</li>
          <li>Complying with legal obligations.</li>
        </ul>
        <p>
          We process personal data only when we have a lawful basis to do so,
          such as your consent, contractual necessity, legitimate interest, or
          legal obligation (Art.&nbsp;6 GDPR).
        </p>
      </Section>

      <Section id="cookies" title="3. Cookies &amp; Tracking Technologies">
        <p>
          Our site uses cookies and similar tracking technologies. You can
          control cookie preferences through our cookie banner at any time.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-zinc-700 text-xs uppercase text-zinc-400">
              <tr>
                <th className="py-3 pr-4">Category</th>
                <th className="py-3 pr-4">Purpose</th>
                <th className="py-3">Can disable?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Necessary</td>
                <td className="py-3 pr-4">
                  Authentication, security, basic functionality
                </td>
                <td className="py-3">No</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Analytics</td>
                <td className="py-3 pr-4">
                  Anonymous traffic analysis (Google Analytics)
                </td>
                <td className="py-3">Yes</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Marketing</td>
                <td className="py-3 pr-4">
                  Advertising and campaign measurement
                </td>
                <td className="py-3">Yes</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Preferences</td>
                <td className="py-3 pr-4">
                  Language, theme, and personalisation
                </td>
                <td className="py-3">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="third-parties" title="4. Third-Party Services">
        <p>We share data with the following processors:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Vercel</strong> &mdash; hosting and
            edge delivery.
          </li>
          <li>
            <strong className="text-white">Stripe</strong> &mdash; payment
            processing (PCI DSS Level 1 certified).
          </li>
          <li>
            <strong className="text-white">Google Analytics</strong> &mdash;
            usage analysis (only when you consent to analytics cookies).
          </li>
        </ul>
        <p>
          We do not sell your personal data. Third-party processors are
          contractually obligated to handle your data in compliance with the GDPR
          and our Data Processing Agreements.
        </p>
      </Section>

      <Section id="your-rights" title="5. Your Rights Under the GDPR">
        <p>
          As a data subject in the European Economic Area (EEA), you have the
          following rights:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-white">Right of access</strong> (Art.&nbsp;15)</li>
          <li><strong className="text-white">Right to rectification</strong> (Art.&nbsp;16)</li>
          <li><strong className="text-white">Right to erasure</strong> (Art.&nbsp;17)</li>
          <li><strong className="text-white">Right to restriction</strong> (Art.&nbsp;18)</li>
          <li><strong className="text-white">Right to data portability</strong> (Art.&nbsp;20)</li>
          <li><strong className="text-white">Right to object</strong> (Art.&nbsp;21)</li>
          <li><strong className="text-white">Right to withdraw consent</strong> (Art.&nbsp;7)</li>
          <li><strong className="text-white">Right to lodge a complaint</strong> with your local supervisory authority.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href={`mailto:${dpo}`}
            className="text-white underline underline-offset-4 hover:text-zinc-200"
          >
            {dpo}
          </a>
          . We will respond within 30 days.
        </p>
      </Section>

      <Section id="data-retention" title="6. Data Retention">
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes for which it was collected.
        </p>
      </Section>

      <Section id="security" title="7. Security">
        <p>
          We implement industry-standard technical and organisational measures
          to protect your personal data, including encryption in transit (TLS),
          secure storage, access controls, and regular security assessments.
        </p>
      </Section>

      <Section id="changes" title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated &quot;Last updated&quot; date.
        </p>
      </Section>

      <Section id="contact" title="9. Contact Us">
        <p>If you have any questions about this Privacy Policy:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Email:</strong>{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-white underline underline-offset-4 hover:text-zinc-200"
            >
              {contactEmail}
            </a>
          </li>
          <li>
            <strong className="text-white">Website:</strong>{" "}
            <a
              href={websiteUrl}
              className="text-white underline underline-offset-4 hover:text-zinc-200"
            >
              {websiteUrl}
            </a>
          </li>
        </ul>
      </Section>
    </article>
  );
}
