import PositionClusters from "@/components/position-cluster";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Small Forward Archetypes" };

export default function SmallForwardPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(120deg,rgba(79,70,229,0.10)_0%,transparent_30%,transparent_70%,rgba(167,139,250,0.10)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>
      <header className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-10 pb-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-gray-200">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500" />
            Small Forward
          </div>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Small Forward Archetype Clusters
        </h1>
        <p className="mt-2 text-gray-300 max-w-2xl">
          Two-way wing versatility, switching, and scalable scoring. Explore
          clustered play styles among SFs.
        </p>
      </header>
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-16">
        <PositionClusters pos="SF" />
      </main>
    </div>
  );
}
