import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Business Factory",
  description:
    "The story behind AI Business Factory. 8 developer tools, one ecosystem, built by AI agents.",
};

const milestones = [
  {
    date: "March 2026",
    title: "Ecosystem Launch",
    description: "All 8 products live on Vercel. ForgeStore becomes the central hub.",
  },
  {
    date: "February 2026",
    title: "Rapid Expansion",
    description: "PageForge, OGForge, ScreenForge, and AIToolsRadar ship in quick succession.",
  },
  {
    date: "January 2026",
    title: "First Products",
    description: "RulesForge, AgentAudit, CryptoPayKit, and PromptForge launch as standalone tools.",
  },
  {
    date: "December 2025",
    title: "The Idea",
    description: "A solo developer decides to build an entire SaaS ecosystem using AI agents as co-builders.",
  },
];

const values = [
  {
    title: "Ship Fast",
    description: "Speed over perfection. Get real products in front of real users, then iterate based on feedback.",
  },
  {
    title: "Zero Platform Fees",
    description: "No hidden charges, no percentage cuts on your revenue. You pay once, you own it forever.",
  },
  {
    title: "AI-Native",
    description: "Every tool is built with AI, for AI developers. We practice what we preach.",
  },
  {
    title: "Open Ecosystem",
    description: "Each product works standalone but shines together. No lock-in, no walled gardens.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-zinc-100">
            AI Business <span className="text-purple-400">Factory</span>
          </a>
          <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            Back to Home
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Building the future of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              developer tools
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            AI Business Factory is a solo-built ecosystem of 8 developer tools,
            created with AI agents as co-builders. One developer, one vision:
            make AI-powered development accessible to everyone.
          </p>
        </div>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Timeline</h2>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-purple-500 shrink-0" />
                  {i < milestones.length - 1 && (
                    <div className="flex-1 w-px bg-zinc-800" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                    {m.date}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-1">{m.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center rounded-2xl border border-zinc-800 bg-zinc-900/30 p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to explore?</h2>
          <p className="text-zinc-400 mb-8">
            Check out the full ecosystem of developer tools.
          </p>
          <a
            href="/"
            className="inline-flex rounded-xl bg-purple-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-purple-500"
          >
            View All Products
          </a>
        </section>
      </main>
    </div>
  );
}
