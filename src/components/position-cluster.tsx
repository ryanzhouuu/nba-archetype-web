import {
  getAllPlayers,
  groupByClusterForPos,
  mean,
  type PlayerRow,
} from "@/lib/nba-data";

type Props = { pos: PlayerRow["Pos"] };

export const revalidate = 3600;

export default async function PositionClusters({ pos }: Props) {
  const data = await getAllPlayers();
  const clusters = Array.from(groupByClusterForPos(data, pos).entries()).sort(
    (a, b) => a[0] - b[0]
  ); // cluster id ascending

  const themeByPos: Record<
    PlayerRow["Pos"],
    { overlay: string; badge: string }
  > = {
    PG: {
      overlay:
        "bg-[conic-gradient(at_30%_20%,#1e40af_20%,#1d4ed8_40%,#3b82f6_60%,#93c5fd_80%,transparent_100%)]",
      badge: "bg-[conic-gradient(#1e40af,#1d4ed8,#3b82f6,#93c5fd,#1e40af)]",
    },
    SG: {
      overlay:
        "bg-[conic-gradient(at_30%_20%,#b91c1c_20%,#dc2626_40%,#f97316_60%,#fb923c_80%,transparent_100%)]",
      badge: "bg-[conic-gradient(#b91c1c,#dc2626,#f97316,#fb923c,#b91c1c)]",
    },
    SF: {
      overlay:
        "bg-[conic-gradient(at_30%_20%,#3730a3_20%,#4f46e5_40%,#7c3aed_60%,#a78bfa_80%,transparent_100%)]",
      badge: "bg-[conic-gradient(#3730a3,#4f46e5,#7c3aed,#a78bfa,#3730a3)]",
    },
    PF: {
      overlay:
        "bg-[conic-gradient(at_30%_20%,#065f46_20%,#059669_40%,#10b981_60%,#84cc16_80%,transparent_100%)]",
      badge: "bg-[conic-gradient(#065f46,#059669,#10b981,#84cc16,#065f46)]",
    },
    C: {
      overlay:
        "bg-[conic-gradient(at_30%_20%,#0369a1_20%,#0ea5e9_40%,#06b6d4_60%,#22d3ee_80%,transparent_100%)]",
      badge: "bg-[conic-gradient(#0369a1,#0ea5e9,#06b6d4,#22d3ee,#0369a1)]",
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {clusters.map(([clusterId, rows]) => {
        const avgPTS = mean(rows, "PTS");
        const avgAST = mean(rows, "AST");
        const avgTRB = mean(rows, "TRB");
        const avg3P = Math.round((mean(rows, "3P%") ?? 0) * 100);
        const avgTS = Math.round((mean(rows, "TS%") ?? 0) * 100);
        const avgORtg = mean(rows, "ORtg");
        const avgDRtg = mean(rows, "DRtg");

        return (
          <article
            key={clusterId}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`pointer-events-none absolute -inset-[1px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60 ${themeByPos[pos].overlay}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />
            <div className="relative p-5 sm:p-6 flex flex-col gap-4 sm:gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                    <div
                      className={`absolute inset-0 rounded-full ${themeByPos[pos].badge} opacity-60`}
                    />
                    <div className="absolute inset-[3px] rounded-full bg-black/40 backdrop-blur" />
                    <div className="absolute inset-0 flex items-center justify-center text-[11px] sm:text-xs font-extrabold text-white">
                      {clusterId}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base sm:text-lg font-bold text-white truncate">
                      Cluster {clusterId}
                    </h2>
                    <div className="text-[10px] sm:text-[11px] text-gray-300/90">
                      Per-100 poss summary
                    </div>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-300 bg-white/10 border border-white/20 rounded-full px-2 py-1 self-start sm:self-auto">
                  {rows.length} players
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Stat label="PTS" value={avgPTS} />
                <Stat label="AST" value={avgAST} />
                <Stat label="TRB" value={avgTRB} />
                <Stat label="3P%" value={avg3P} />
                <Stat label="TS%" value={avgTS} />
                <Stat label="ORtg" value={avgORtg} />
                <Stat label="DRtg" value={avgDRtg} />
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-200 mb-2">
                  Players
                </div>
                <ul className="space-y-1.5 max-h-56 overflow-auto pr-1 custom-scroll">
                  {rows
                    .sort(
                      (a, b) =>
                        (Number(b["PTS"]) || 0) - (Number(a["PTS"]) || 0)
                    )
                    .map((p) => {
                      const pts = Number(p["PTS"]) || 0;
                      const ast = Number(p["AST"]) || 0;
                      const trb = Number(p["TRB"]) || 0;
                      const threePct = Math.round(
                        (Number(p["3P%"]) || 0) * 100
                      );
                      return (
                        <li
                          key={p.Player}
                          className="flex items-center justify-between text-xs sm:text-sm text-gray-300"
                        >
                          <div className="min-w-0 flex-1">
                            <span className="truncate">{p.Player}</span>
                            <span className="text-gray-400 ml-2">{p.Team}</span>
                          </div>
                          <div className="ml-3 flex items-center flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-gray-300/90">
                            <span className="inline-flex rounded border border-white/15 bg-white/5 px-1.5 py-0.5">
                              PTS {pts}
                            </span>
                            <span className="inline-flex rounded border border-white/15 bg-white/5 px-1.5 py-0.5">
                              AST {ast}
                            </span>
                            <span className="hidden sm:inline-flex rounded border border-white/15 bg-white/5 px-1.5 py-0.5">
                              TRB {trb}
                            </span>
                            <span className="hidden sm:inline-flex rounded border border-white/15 bg-white/5 px-1.5 py-0.5">
                              3P% {threePct}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-2">
      <div className="text-[10px] font-semibold text-gray-300">{label}</div>
      <div className="text-sm font-bold text-white">{value ?? "—"}</div>
    </div>
  );
}
