import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { AnnouncementBarWrapper } from "./AnnouncementBarWrapper";
import { CookieBannerWrapper } from "./CookieBannerWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Business Factory — 8 Developer Tools, One Ecosystem",
  description:
    "8 developer tools. One ecosystem. Built by AI agents. RulesForge, AgentAudit, CryptoPayKit, PromptForge, PageForge, OGForge, ScreenForge, AIToolsRadar.",
  keywords: [
    "AI tools",
    "developer tools",
    "AI agents",
    "MCP",
    "coding rules",
    "AI prompts",
    "landing page generator",
    "OG image generator",
    "crypto payments",
    "x402",
    "saas",
    "ecosystem",
  ],
  openGraph: {
    title: "AI Business Factory — 8 Developer Tools, One Ecosystem",
    description: "8 developer tools. One ecosystem. Built by AI agents.",
    type: "website",
    url: "https://forgestore.vercel.app",
    siteName: "ForgeStore",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Factory — 8 Developer Tools, One Ecosystem",
    description: "8 developer tools. One ecosystem. Built by AI agents.",
    images: ["/api/og"],
  },
  metadataBase: new URL("https://forgestore.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Business Factory",
    url: "https://forgestore.vercel.app",
    description: "8 developer tools. One ecosystem. Built by AI agents.",
    logo: "https://forgestore.vercel.app/favicon.ico",
    foundingDate: "2025",
    sameAs: [
      "https://github.com/keyflowcoreg",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@forgestore.dev",
      contactType: "customer support",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "149",
      priceCurrency: "USD",
      offerCount: "8",
    },
  };

  return (
    <html lang="en" className={`${inter.className} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        <NoiseOverlay />
        <AnnouncementBarWrapper />
        {children}
        <CookieBannerWrapper />
      </body>
    </html>
  );
}
