import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FastGL — GitLab, but Faster',
  description:
    'A high-performance GitLab replicate built with Next.js 16, React 19, and TypeScript. Code management, reimagined.',
  openGraph: {
    title: 'FastGL',
    description: 'GitLab, but faster.',
    type: 'website',
  },
};

const TECH_STACK = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'App Router'] as const;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-16 text-white">
      <div className="w-full max-w-3xl space-y-8 text-center">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-400">
            <span aria-hidden="true">⚡</span> GitLab Replicate, but faster
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-white">Fast</span>
          <span className="text-orange-500">GL</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-xl text-lg text-slate-400 sm:text-xl">
          A high-performance Git hosting platform built with Next.js 16, React 19, and TypeScript.
          Code management, reimagined.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/signup"
            className="w-full rounded-lg bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400 sm:w-auto"
          >
            Get Started
          </a>
          <a
            href="/explore"
            className="w-full rounded-lg border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white sm:w-auto"
          >
            Explore Repos →
          </a>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
