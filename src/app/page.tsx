import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
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
      </div>

      {/* Hero content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 py-20">
          {/* Hero content will go here */}
          <div className="text-center">
            <h1 className="text-6xl font-light text-gray-900 mb-6">
              NBA Archetype Clustering
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
