export type Category =
  | "mcp-servers"
  | "coding-rules"
  | "prompt-packs"
  | "agent-skills"
  | "templates"
  | "security";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  rating: number;
  downloads: number;
  seller: string;
  badge: string;
}

export const categories: {
  slug: Category;
  name: string;
  description: string;
  icon: string;
}[] = [
  {
    slug: "mcp-servers",
    name: "MCP Servers",
    description: "Extend your AI agent's capabilities",
    icon: "\u26A1",
  },
  {
    slug: "coding-rules",
    name: "Coding Rules",
    description: ".cursorrules, CLAUDE.md, AGENTS.md",
    icon: "\uD83D\uDCDC",
  },
  {
    slug: "prompt-packs",
    name: "Prompt Packs",
    description: "Battle-tested prompts for every task",
    icon: "\uD83D\uDCAC",
  },
  {
    slug: "agent-skills",
    name: "Agent Skills",
    description: "Workflow automations and skills",
    icon: "\uD83E\uDD16",
  },
  {
    slug: "templates",
    name: "Templates",
    description: "Landing pages, dashboards, components",
    icon: "\uD83C\uDFA8",
  },
  {
    slug: "security",
    name: "Security",
    description: "Audit configs, hardening guides",
    icon: "\uD83D\uDD12",
  },
];

export const products: Product[] = [
  {
    id: "rulesforge-pro",
    name: "RulesForge Pro Pack",
    description:
      "50 battle-tested rule files for Cursor, Claude Code, and Windsurf. Ship better code on autopilot.",
    price: 29,
    category: "coding-rules",
    rating: 4.9,
    downloads: 2341,
    seller: "ForgeStore",
    badge: "Featured",
  },
  {
    id: "cryptopaykit",
    name: "CryptoPayKit",
    description:
      "Complete x402 developer toolkit. Accept USDC payments in your app with 5 lines of code.",
    price: 49,
    category: "mcp-servers",
    rating: 4.8,
    downloads: 1287,
    seller: "ForgeStore",
    badge: "Featured",
  },
  {
    id: "agentaudit",
    name: "AgentAudit Full Report",
    description:
      "AI agent security scanner. Detect prompt injection, data leaks, and permission exploits.",
    price: 47,
    category: "security",
    rating: 4.7,
    downloads: 892,
    seller: "ForgeStore",
    badge: "Featured",
  },
  {
    id: "promptforge-pro",
    name: "PromptForge Pro",
    description:
      "200+ AI prompts organized by use case. Marketing, coding, analysis, writing, and more.",
    price: 19,
    category: "prompt-packs",
    rating: 4.8,
    downloads: 3156,
    seller: "ForgeStore",
    badge: "Featured",
  },
  {
    id: "mcp-github",
    name: "MCP GitHub Server",
    description:
      "Full GitHub integration for AI agents. Manage repos, PRs, issues, and actions from your chat.",
    price: 39,
    category: "mcp-servers",
    rating: 4.6,
    downloads: 1854,
    seller: "DevForge Labs",
    badge: "Popular",
  },
  {
    id: "mcp-postgres",
    name: "MCP Postgres Server",
    description:
      "Query, migrate, and manage PostgreSQL databases through your AI agent. Schema-aware completions.",
    price: 35,
    category: "mcp-servers",
    rating: 4.5,
    downloads: 967,
    seller: "DataTools Co",
    badge: "New",
  },
  {
    id: "cursor-rules-react",
    name: "React Rules for Cursor",
    description:
      "25 opinionated .cursorrules for React/Next.js projects. Hooks, state management, testing patterns.",
    price: 15,
    category: "coding-rules",
    rating: 4.4,
    downloads: 1432,
    seller: "React Masters",
    badge: "Popular",
  },
  {
    id: "seo-prompt-pack",
    name: "SEO Prompt Pack",
    description:
      "75 prompts for SEO analysis, keyword research, content optimization, and technical audits.",
    price: 12,
    category: "prompt-packs",
    rating: 4.3,
    downloads: 2087,
    seller: "GrowthHacks",
    badge: "Trending",
  },
  {
    id: "deploy-skill",
    name: "AutoDeploy Skill",
    description:
      "One-command deployment skill for Vercel, Netlify, and Cloudflare. Zero-config CI/CD for agents.",
    price: 25,
    category: "agent-skills",
    rating: 4.6,
    downloads: 743,
    seller: "ShipFast Tools",
    badge: "New",
  },
  {
    id: "saas-landing",
    name: "SaaS Landing Template",
    description:
      "Production-ready landing page template. Dark mode, responsive, animated sections. Next.js + Tailwind.",
    price: 39,
    category: "templates",
    rating: 4.7,
    downloads: 1621,
    seller: "UI Forge",
    badge: "Popular",
  },
  {
    id: "hardening-guide",
    name: "AI Agent Hardening Guide",
    description:
      "Complete security checklist and configs for production AI agents. OWASP-aligned threat model.",
    price: 29,
    category: "security",
    rating: 4.5,
    downloads: 534,
    seller: "SecureAI Labs",
    badge: "Essential",
  },
  {
    id: "code-review-skill",
    name: "Code Review Skill",
    description:
      "Automated code review agent skill. Checks style, security, performance, and generates PR comments.",
    price: 19,
    category: "agent-skills",
    rating: 4.4,
    downloads: 1103,
    seller: "DevForge Labs",
    badge: "Trending",
  },
];

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const featuredProducts = products.filter((p) => p.badge === "Featured");
