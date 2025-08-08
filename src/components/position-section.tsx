import React from "react";

export default function PositionSection() {
  const positions: Array<{
    code: string;
    name: string;
    summary: string;
    tags: string[];
    accent: string; // tailwind gradient classes
  }> = [
    {
      code: "PG",
      name: "Point Guard",
      summary: "Ball handling, playmaking, pace control",
      tags: ["Playmaking", "PnR", "Perimeter"],
      accent: "from-blue-600 to-blue-400",
    },
    {
      code: "SG",
      name: "Shooting Guard",
      summary: "Perimeter scoring and off-ball movement",
      tags: ["Scoring", "Catch & Shoot", "Spacing"],
      accent: "from-red-600 to-orange-500",
    },
    {
      code: "SF",
      name: "Small Forward",
      summary: "Two-way versatility across the wing",
      tags: ["Slashing", "3&D", "Switchability"],
      accent: "from-indigo-600 to-purple-500",
    },
    {
      code: "PF",
      name: "Power Forward",
      summary: "Physicality, screening, stretch potential",
      tags: ["Stretch", "Roll", "Rebounding"],
      accent: "from-emerald-600 to-lime-500",
    },
    {
      code: "C",
      name: "Center",
      summary: "Rim protection, finishing, interior gravity",
      tags: ["Rim Protect", "Post", "Boards"],
      accent: "from-sky-600 to-cyan-500",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Contrasting analytical background (dark, dotted, angled highlight) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900">
        {/* Dotted matrix pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:18px_18px]" />
        {/* Angled soft highlight band */}
        <div className="absolute inset-0 opacity-25 bg-[linear-gradient(120deg,rgba(59,130,246,0.10)_0%,transparent_30%,transparent_70%,rgba(239,68,68,0.10)_100%)]" />
        {/* Central vignette to focus content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-red-600" />
            <span className="text-sm font-semibold text-gray-100">
              Positions
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore by Position
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-300 max-w-2xl">
            Five roles, distinct archetypes. Select a position to view clustered
            play styles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {positions.map((pos) => (
            <article
              key={pos.code}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card glow */}
              <div
                className={`pointer-events-none absolute -inset-1 rounded-[1.25rem] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40 bg-gradient-to-r ${pos.accent}`}
                aria-hidden
              />

              <div className="relative flex h-full flex-col gap-4 p-6">
                <div
                  className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${pos.accent}`}
                />

                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-sm font-semibold tracking-widest text-gray-500">
                      {pos.code}
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-gray-900 leading-tight">
                      {pos.name}
                    </h3>
                  </div>
                  {/* Sparkline icon */}
                  <svg
                    viewBox="0 0 64 24"
                    className="h-8 w-16 text-gray-400 group-hover:text-gray-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M2 20 L12 12 L22 18 L32 6 L42 14 L62 4" />
                  </svg>
                </div>

                <p className="text-sm text-gray-700/90 leading-relaxed min-h-12">
                  {pos.summary}
                </p>

                <div className="mt-1 flex flex-wrap gap-2">
                  {pos.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-gray-700/90 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-800 transition-colors hover:border-transparent hover:text-white hover:bg-gradient-to-r ${pos.accent}`}
                  >
                    View {pos.code} clusters
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
