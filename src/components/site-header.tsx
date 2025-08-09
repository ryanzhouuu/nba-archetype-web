"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PositionCode = "PG" | "SG" | "SF" | "PF" | "C";

type Props = { currentPos?: PositionCode };

const themeByPos: Record<PositionCode, { pill: string; hover: string }> = {
  PG: {
    pill: "from-blue-600 to-sky-500",
    hover: "from-blue-700 to-sky-600",
  },
  SG: {
    pill: "from-red-600 to-orange-500",
    hover: "from-red-700 to-orange-600",
  },
  SF: {
    pill: "from-indigo-600 to-purple-500",
    hover: "from-indigo-700 to-purple-600",
  },
  PF: {
    pill: "from-emerald-600 to-lime-500",
    hover: "from-emerald-700 to-lime-600",
  },
  C: {
    pill: "from-sky-600 to-cyan-500",
    hover: "from-sky-700 to-cyan-600",
  },
};

export default function SiteHeader({ currentPos }: Props) {
  const pathname = usePathname();
  const routeToPos: Record<string, PositionCode> = {
    "/point-guard": "PG",
    "/shooting-guard": "SG",
    "/small-forward": "SF",
    "/power-forward": "PF",
    "/center": "C",
  };
  const inferredPos: PositionCode | undefined =
    currentPos ?? routeToPos[pathname ?? ""];
  const isHome = (pathname ?? "/") === "/";
  return (
    <div className="fixed inset-x-0 top-0 z-50 mt-0">
      {/* Subtle gradient accent line */}
      {/* <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 opacity-60" /> */}

      {/* Route-aware nav background */}
      <nav
        className={
          isHome
            ? "backdrop-blur bg-white/90 border-b border-slate-200 shadow-sm opacity-90"
            : "backdrop-blur-sm bg-slate-950/85 border-b border-white/10 shadow-sm"
        }
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className={
              isHome
                ? "flex items-center gap-3 text-slate-900"
                : "flex items-center gap-3 text-white"
            }
          >
            <span className="font-semibold tracking-tight hidden sm:inline">
              NBA Archetype Clustering
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {(
              [
                { label: "PG", href: "/point-guard", code: "PG" },
                { label: "SG", href: "/shooting-guard", code: "SG" },
                { label: "SF", href: "/small-forward", code: "SF" },
                { label: "PF", href: "/power-forward", code: "PF" },
                { label: "C", href: "/center", code: "C" },
              ] as { label: string; href: string; code: PositionCode }[]
            ).map((item) => {
              const isActive = inferredPos === item.code;
              const theme = themeByPos[item.code];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors
                    ${
                      isActive
                        ? `border-transparent text-white bg-gradient-to-r ${theme.pill}`
                        : isHome
                        ? `border-slate-300 text-slate-700 bg-white/60 hover:text-white hover:bg-gradient-to-r hover:border-transparent ${theme.hover}`
                        : `border-white/20 text-gray-200 hover:text-white hover:bg-gradient-to-r hover:border-transparent ${theme.hover}`
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
