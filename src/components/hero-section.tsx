import { Boxes } from "@/components/ui/background-boxes";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with glowy effects */}
      <div className="absolute inset-0 bg-[#fafafa]">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#f0f0f0]"></div>

        {/* Deep blue accent circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-900/35 to-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-800/30 to-blue-700/15 rounded-full blur-3xl"></div>

        {/* Dark red accent circles */}
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-red-900/35 to-red-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-gradient-to-br from-red-800/30 to-red-700/15 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern for analytics feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Additional glow effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-red-600/10 rounded-full blur-3xl"></div>

        {/* Background Boxes Component */}
        <Boxes />
      </div>

      {/* Hero content */}
      <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 rounded-2xl px-4 sm:px-0 w-full max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full">
          <svg
            viewBox="0 0 150 150"
            className="w-20 h-20 sm:w-36 sm:h-36 object-contain border-2 border-black rounded-xl"
            aria-label="NBA Logo"
          >
            <image href="/nba-logo.svg" width="150" height="150" />
          </svg>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center sm:text-left">
            Archetype Clustering
          </h1>
        </div>
        <p className="text-base sm:text-xl text-gray-700 text-center max-w-2xl leading-relaxed font-semibold">
          Explore how unsupervised machine learning clustering categorizes
          different player archetypes by position.
        </p>
        <p className="text-base sm:text-xl text-gray-700 text-center max-w-2xl leading-relaxed font-semibold">
          All data from the 2024-2025 NBA season.
        </p>
        <div className="mt-6 sm:mt-8 animate-bounce">
          <svg
            className="w-10 h-10 sm:w-16 sm:h-16 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 13l5 5 5-5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 6l5 5 5-5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
