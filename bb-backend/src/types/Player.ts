export type platforms = "steam" | "ps4" | "epic";
import { playlists } from "./MatchTypes.ts";

/* ——— Top Bar Input DTO ——— */
export type InputPlayerDTO = {
    playerID: string;
    playerPlatform: platforms;
    match_count: number;
    playlistType:  playlists;
}

/* ——— Player Card DTO ——— */

//inside teamColor.players[i].stats.boost
export type BoostData = {
    boostPerMinute: number;  //boost.bpm
    avgBoostAmount: number;  //boost.avgAmount
}

// inside teamColor.players[i].stats.positioning
export type PositioningData = {
    avgDistanceToBall: number;          // positioning.avg_dist_to_ball
    avgDistanceToTeammates: number;     // positioning.avg_dist_to_mates
    pctDefensiveThird: number;          // positioning.percent_defensive_third
    pctNeutralThird: number;            // positioning.percent_neutral_third
    pctOffensiveThird: number;          // positioning.percent_offensive_third
    pctDefensiveHalf: number;           // positioning.percent_defensive_half
    pctOffensiveHalf: number;           // positioning.percent_offensive_half
}
//inside teamColor.players[i]
export type ReplayPlayerStats = {
    playerName: string;     // players[i].name
    goals: number;          // players[i].stats.core.goals
    score: number;          // players[i].stats.core.score
}