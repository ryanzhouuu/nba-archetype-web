// Central place to add custom analysis text per position cluster.
// Fill in descriptions like: clusterDescriptions.PG[1] = "Your text...";

import type { PlayerRow } from "./nba-data";

export type ClusterDescriptions = Record<PlayerRow["Pos"], Record<number, string>>;

export const clusterDescriptions: ClusterDescriptions = {
  PG: {
    0: "Ball-dominant, score-first all around stars who have the skill and impact to generate offense at will. Key stats: PTS, TS%, and ORtg.",
    1: "Facilitating, secondary guard options who's primary role is to create for others and may struggle to score consistently. Key stats: AST, 3P%.",
    2: "Verstile, all-around guards who are a jack of all trades. Some may struggle to shoot it consistently, but make up for it with reboudning. Key stats: TRB, 3P%, DRtg.",
    3: "Score-first microwaves who can provide an offensive spark to any unit, but usually aren't the first option. Key stats: 3P%, TS%, and ORtg."
  },
  SG: {
    0: "Lockdown perimeter defenders who terrorrize opposing guards and wings on a nightly basis. Key stats: TRB, DRtg.",
    1: "Spark plugs that generate instant offense and shoot high volumes (may struggle defensively). Key stats: PTS, DRtg.",
    2: "Spot up shooters that space the floor without needing the ball. A great complementary piece next to any star. Key stats: 3P%, ORtg.",
    3: "Ball-handling do-it-all players that are proficient in all facets of the game and can serve as a focal point on their team. Key stats: PTS, AST, TRB.",
    4: "Younger guards who are still developing and find inconsistencies on both ends of the floor. Key stats: 3P%, TS%, ORtg, DRtg."
  },
  SF: {
    0: "Slashing wings who rely on athleticism to penetrate defenses and finish at the cup. Key stats: 3P%, TS%, TRB.",
    1: "The classic 3 & D wing who defends multiple positions and are a threat from beyond the arc. Key stats: 3P%, DRtg.",
    2: "Well-rounded 2-way forwards who have no holes in their game and can be the initiator of an offense. Key stats: PTS, AST, TRB, 3P%.",
    3: "Score-first forwards who are still a little rough around the edges. High potential but lacking refinement. Key stats: 3P%, ORtg.",
  },
  PF: {
    0: "High usage, all-around forwards who are highly efficient and can carry the scoring load. Key stats: PTS, TRB, TS%.",
    1: "Incomplete forwards who don't defend/rebound effectively or shoot very efficiently either, making them hard to play at times. Key stats: 3P%, ORtg, DRtg.",
    2: "The modern 4-man who can stretch the floor and provide inside support, elevating the entire offense. Key stats: 3P%, ORtg.",
    3: "Larger, bruising forwards who are a force on the glass but provide negative spacing. Key stats: TRB, 3P%.",
    4: "Defensive-minded forwards that can switch on to wings easily and provide penetration on offense. Key stats: TRB, DRtg,"
  },
  C: {
    0: "Lob threats that specialize in pick and roll situations and rim protection. Key stats: 3P%, TS%, DRtg.",
    1: "Big, bruising glass cleaners who rely on pure size and power to dominate the boards. Key stats: TRB, TS%.",
    2: "The modern stretch-5 who is a threat from deep and is mobile on defense. Key stats: 3P%, TS%, DRtg.",
    3: "Ball-dominant, high-usage bigs who can be a versatile option on offense. Key stats: PTS, TRB, TS%."
  },
};

