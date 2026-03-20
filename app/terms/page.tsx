import type { Metadata } from "next";
import { TermsOfService } from "@/components/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service — AI Business Factory",
  description:
    "Terms of Service for AI Business Factory. Read the terms that govern the use of our developer tools ecosystem.",
};

export default function TermsPage() {
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
      <TermsOfService
        companyName="AI Business Factory"
        productName="AI Business Factory"
        contactEmail="legal@forgestore.dev"
        websiteUrl="https://forgestore.vercel.app"
        lastUpdated="2026-03-20"
      />
    </div>
  );
}
