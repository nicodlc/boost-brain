import {playlists} from "./Player.ts"

export type ReplayMatchData = {
    matchID: string;
    mapName: string;
    duration: number; // in seconds!
    playlistID: playlists;
}
