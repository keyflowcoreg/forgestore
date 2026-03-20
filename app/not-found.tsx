import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6">
      <p className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        404
      </p>
      <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
      <p className="text-zinc-400 mb-8 text-center max-w-md">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
