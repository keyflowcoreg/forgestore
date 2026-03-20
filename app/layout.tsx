import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NoiseOverlay } from "@/components/NoiseOverlay";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
