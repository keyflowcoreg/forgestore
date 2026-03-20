import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Business Factory",
  description:
    "Privacy Policy for AI Business Factory. Learn how we collect, use, and protect your personal data in accordance with GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-zinc-100">
            AI Business <span className="text-purple-400">Factory</span>
          </a>
          <a
            href="/"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </nav>
      <PrivacyPolicy
        companyName="AI Business Factory"
        contactEmail="privacy@forgestore.dev"
        websiteUrl="https://forgestore.vercel.app"
        lastUpdated="2026-03-20"
      />
    </div>
  );
}
