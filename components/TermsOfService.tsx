// ---------------------------------------------------------------------------
// TermsOfService  (Server Component)
// ---------------------------------------------------------------------------

interface TermsOfServiceProps {
  companyName: string;
  productName: string;
  contactEmail: string;
  websiteUrl: string;
  lastUpdated: string;
  governingLaw?: string;
  jurisdiction?: string;
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

export function TermsOfService({
  companyName,
  productName,
  contactEmail,
  websiteUrl,
  lastUpdated,
  governingLaw = "the laws of Italy",
  jurisdiction = "the courts of Cagliari, Italy",
}: TermsOfServiceProps) {
  return (
    <article className="prose-invert mx-auto max-w-3xl space-y-12 px-4 py-16 text-zinc-300 sm:px-6 lg:px-0">
      <header className="space-y-3 border-b border-zinc-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="text-sm text-zinc-500">Last updated: {lastUpdated}</p>
        <p className="leading-relaxed">
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of <strong className="text-white">{productName}</strong> (the
          &quot;Service&quot;), operated by{" "}
          <strong className="text-white">{companyName}</strong> (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;). By accessing or using the Service,
          you agree to be bound by these Terms.
        </p>
      </header>

      <Section id="acceptance" title="1. Acceptance of Terms">
        <p>
          By creating an account, making a purchase, or otherwise using the
          Service, you confirm that you are at least 16 years of age and have
          the legal capacity to enter into a binding agreement.
        </p>
      </Section>

      <Section id="account" title="2. Account Registration">
        <p>
          You are responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>
      </Section>

      <Section id="license" title="3. License and Access">
        <p>
          Subject to these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable licence to access and use the Service for
          your personal or internal business purposes.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Copy, modify, distribute, or create derivative works of the Service.</li>
          <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
          <li>Use the Service for any unlawful purpose.</li>
          <li>Use automated means (bots, scrapers) without written permission.</li>
          <li>Resell or sublicense the Service without prior written consent.</li>
        </ul>
      </Section>

      <Section id="payments" title="4. Payments and Refunds">
        <p>
          The Service includes paid digital products and bundles.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Pricing.</strong> All prices are
            displayed in USD at checkout.
          </li>
          <li>
            <strong className="text-white">Payment processing.</strong> Payments
            are handled by Stripe. Your use of Stripe is subject to their terms.
          </li>
          <li>
            <strong className="text-white">Digital products &mdash; no refunds.</strong>{" "}
            Due to the nature of digital products, all sales are final once delivered, except where required by applicable law.
          </li>
        </ul>
      </Section>

      <Section id="ip" title="5. Intellectual Property">
        <p>
          All content, features, and functionality of the Service are the exclusive
          property of {companyName} or its licensors and are protected by copyright,
          trademark, and other intellectual property laws.
        </p>
      </Section>

      <Section id="limitations" title="6. Disclaimer and Limitation of Liability">
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
          AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
        </p>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, {companyName.toUpperCase()}{" "}
          SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES.
        </p>
      </Section>

      <Section id="termination" title="7. Termination">
        <p>
          We may suspend or terminate your access at any time, with or without
          cause. You may terminate your account by contacting us at{" "}
          <a href={`mailto:${contactEmail}`} className="text-white underline underline-offset-4 hover:text-zinc-200">
            {contactEmail}
          </a>.
        </p>
      </Section>

      <Section id="governing-law" title="8. Governing Law and Jurisdiction">
        <p>
          These Terms shall be governed by and construed in accordance with{" "}
          {governingLaw}. Any disputes shall be subject to the exclusive
          jurisdiction of {jurisdiction}.
        </p>
      </Section>

      <Section id="entire-agreement" title="9. Entire Agreement">
        <p>
          These Terms, together with our{" "}
          <a href="/privacy" className="text-white underline underline-offset-4 hover:text-zinc-200">
            Privacy Policy
          </a>, constitute the entire agreement between you and {companyName}.
        </p>
      </Section>

      <Section id="contact" title="10. Contact Us">
        <p>If you have any questions about these Terms:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Email:</strong>{" "}
            <a href={`mailto:${contactEmail}`} className="text-white underline underline-offset-4 hover:text-zinc-200">
              {contactEmail}
            </a>
          </li>
          <li>
            <strong className="text-white">Website:</strong>{" "}
            <a href={websiteUrl} className="text-white underline underline-offset-4 hover:text-zinc-200">
              {websiteUrl}
            </a>
          </li>
        </ul>
      </Section>
    </article>
  );
}
