"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "RulesForge",
    desc: "AI coding rules generator",
    price: "$29",
    url: "https://rulesforge.vercel.app",
    accent: "cyan",
  },
  {
    name: "AgentAudit",
    desc: "Security scanner for AI configs",
    price: "$47",
    url: "https://agentaudit-five.vercel.app",
    accent: "rose",
  },
  {
    name: "CryptoPayKit",
    desc: "x402 crypto payment toolkit",
    price: "$49",
    url: "https://cryptopaykit.vercel.app",
    accent: "amber",
  },
  {
    name: "PromptForge",
    desc: "200+ AI prompts",
    price: "$19",
    url: "https://promptforge-indol.vercel.app",
    accent: "violet",
  },
  {
    name: "PageForge",
    desc: "AI landing page generator",
    price: "$29",
    url: "https://pageforge-phi.vercel.app",
    accent: "indigo",
  },
  {
    name: "OGForge",
    desc: "Social card generator",
    price: "$9",
    url: "https://ogforge.vercel.app",
    accent: "violet",
  },
  {
    name: "ScreenForge",
    desc: "App Store screenshots",
    price: "$19",
    url: "https://screenforge-ten.vercel.app",
    accent: "rose",
  },
  {
    name: "AIToolsRadar",
    desc: "Compare 40+ AI tools",
    price: "Free",
    url: "https://aitoolsradar-zeta.vercel.app",
    accent: "emerald",
  },
] as const;

const accentMap: Record<string, { border: string; bg: string; text: string; glow: string; badge: string }> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
    badge: "bg-cyan-500/15 text-cyan-300 ring-cyan-500/30",
  },
  rose: {
    border: "border-rose-500/30",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    glow: "group-hover:shadow-rose-500/20",
    badge: "bg-rose-500/15 text-rose-300 ring-rose-500/30",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
    badge: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    glow: "group-hover:shadow-violet-500/20",
    badge: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
  },
  indigo: {
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    glow: "group-hover:shadow-indigo-500/20",
    badge: "bg-indigo-500/15 text-indigo-300 ring-indigo-500/30",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    badge: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  },
};

const stats = [
  { value: "8", label: "Products Live" },
  { value: "$0", label: "Platform Fees" },
  { value: "Enterprise", label: "Grade" },
  { value: "AI", label: "Built With" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AI Business Factory",
            url: "https://forgestore.vercel.app",
            description:
              "8 developer tools. One ecosystem. Built by AI agents.",
            sameAs: [],
            offers: products.map((p) => ({
              "@type": "Offer",
              name: p.name,
              description: p.desc,
              price: p.price === "Free" ? "0" : p.price.replace("$", ""),
              priceCurrency: "USD",
              url: p.url,
              availability: "https://schema.org/InStock",
            })),
          }),
        }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight text-zinc-100">
            AI Business <span className="text-purple-400">Factory</span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#products"
              className="hidden sm:inline text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Products
            </a>
            <a
              href="#bundle"
              className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500"
            >
              Get Bundle
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-zinc-950 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.06),transparent_50%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300 mb-8">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                All products live on Vercel
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-50 mb-6 leading-[1.05]">
                AI Business{" "}
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Factory
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
                8 developer tools. One ecosystem.{" "}
                <span className="text-zinc-300">Built by AI agents.</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#products"
                  className="rounded-xl bg-purple-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Explore Products
                </a>
                <a
                  href="#bundle"
                  className="rounded-xl border border-zinc-700 px-8 py-3.5 text-base font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-zinc-100"
                >
                  Get Full Bundle &mdash; $149
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-zinc-800/50 bg-zinc-900/30">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-zinc-100">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-500 mt-1.5 font-medium tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section id="products" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
                The Complete Toolkit
              </h2>
              <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                Every tool you need to build, ship, and monetize AI-powered products.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {products.map((product, i) => {
              const colors = accentMap[product.accent];
              return (
                <motion.a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={fadeUp}
                  className={`group relative flex flex-col rounded-2xl border ${colors.border} bg-zinc-900/40 p-6 transition-all duration-300 hover:bg-zinc-900/70 hover:shadow-xl ${colors.glow} hover:-translate-y-1`}
                >
                  {/* Accent line top */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-px ${colors.bg}`}
                    style={{ opacity: 0.6 }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-lg font-bold text-zinc-100 group-hover:${colors.text} transition-colors`}>
                      {product.name}
                    </h3>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${colors.badge}`}
                    >
                      {product.price}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-1">
                    {product.desc}
                  </p>

                  <div
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.text} group-hover:gap-2.5 transition-all`}
                  >
                    {product.price === "Free" ? "View" : "Try Free"}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </section>

        {/* Bundle CTA */}
        <section id="bundle" className="border-y border-zinc-800/50 bg-zinc-900/20">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300 mb-6">
                Save 40% with the bundle
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
                Get the full ecosystem
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                All 8 tools for one price. Lifetime access, all future updates included.
              </p>

              <div className="inline-flex flex-col items-center gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-zinc-100">$149</span>
                  <span className="text-zinc-500 line-through text-lg">$250</span>
                </div>
                <p className="text-sm text-zinc-500">One-time payment. 8 products. No recurring fees.</p>
                <a
                  href="https://forgestore.vercel.app/bundle"
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-10 py-4 text-base font-semibold text-white transition-all hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Buy Full Bundle
                </a>
                <div className="flex flex-wrap justify-center gap-3 text-xs text-zinc-500">
                  {products.map((p) => (
                    <span key={p.name} className="rounded-full bg-zinc-800/60 px-2.5 py-1">
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-zinc-400">
                AI Business Factory
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                8 developer tools. One ecosystem. Built by AI agents.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="/terms" className="hover:text-zinc-300 transition-colors">
                Terms
              </a>
              <a href="/privacy" className="hover:text-zinc-300 transition-colors">
                Privacy
              </a>
              <a href="mailto:support@forgestore.dev" className="hover:text-zinc-300 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} AI Business Factory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
