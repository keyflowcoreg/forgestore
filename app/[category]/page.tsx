"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  categories,
  getProductsByCategory,
  getCategoryBySlug,
  type Category,
} from "@/lib/products";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? "☆" : ""}
      <span className="text-zinc-500 ml-1">{rating}</span>
    </span>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = use(params);
  const category = getCategoryBySlug(slug);
  const products = getProductsByCategory(slug as Category);

  const categoryMap: Record<string, string> = {
    "mcp-servers": "MCP Server",
    "coding-rules": "Coding Rules",
    "prompt-packs": "Prompt Pack",
    "agent-skills": "Agent Skill",
    templates: "Template",
    security: "Security",
  };

  if (!category) {
    return (
      <div className="flex flex-col min-h-screen">
        <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-purple-400">Forge</span>Store
            </Link>
          </div>
        </nav>
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-zinc-100 mb-4">
              Category not found
            </h1>
            <Link
              href="/"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Back to marketplace
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-purple-400">Forge</span>Store
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Browse
            </Link>
            <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500">
              List Your Product
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Category Header */}
        <section className="border-b border-zinc-800/50 bg-zinc-900/20">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex items-center gap-3 mb-2">
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Marketplace
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-sm text-zinc-300">{category.name}</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-5xl">{category.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-zinc-100">
                  {category.name}
                </h1>
                <p className="text-zinc-400 mt-1">{category.description}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-4">
              {products.length} product{products.length !== 1 ? "s" : ""}{" "}
              available
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">
                No products in this category yet.
              </p>
              <p className="text-zinc-600 mt-2">
                Be the first to list one.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-900"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      {categoryMap[product.category] || product.category}
                    </span>
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full px-2 py-1">
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-purple-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zinc-100">
                      ${product.price}
                    </span>
                    <div className="text-right">
                      <StarRating rating={product.rating} />
                      <p className="text-xs text-zinc-500 mt-1">
                        {product.downloads.toLocaleString()} downloads
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-3">
                    by {product.seller}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Other Categories */}
        <section className="border-t border-zinc-800/50 bg-zinc-900/20">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-xl font-bold text-zinc-100 mb-6">
              Other Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {categories
                .filter((c) => c.slug !== slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}`}
                    className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 text-sm text-zinc-400 transition-all hover:border-purple-500/50 hover:text-zinc-100"
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            ForgeStore — The marketplace for AI tools. 10% platform fee, 90% to
            creators.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
