// src/lib/nba-data.ts
import 'server-only';
import fs from 'fs/promises';
import path from 'path';

export type PlayerRow = {
  Player: string;
  Team: string;
  Pos: 'PG' | 'SG' | 'SF' | 'PF' | 'C';
  Cluster_ID: number;
} & Record<string, string | number>;

export async function getAllPlayers(): Promise<PlayerRow[]> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'nba_clustered_data.json');
  const json = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(json) as PlayerRow[];
}

export function groupByClusterForPos(rows: PlayerRow[], pos: PlayerRow['Pos']): Map<number, PlayerRow[]> {
  const filtered = rows.filter(r => r.Pos === pos);
  const map = new Map<number, PlayerRow[]>();
  for (const row of filtered) {
    const id = row.Cluster_ID;
    if (!map.has(id)) map.set(id, []);
    map.get(id)!.push(row);
  }
  return map;
}

export function mean(rows: PlayerRow[], key: string): number | null {
  const nums = rows.map(r => Number(r[key])).filter(n => Number.isFinite(n));
  if (!nums.length) return null;
  return Number((nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2));
}