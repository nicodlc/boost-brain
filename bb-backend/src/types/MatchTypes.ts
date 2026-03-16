export type playlists = "ranked-solo-standard" | "ranked-duos" | "ranked-standard";

export type ReplayMatchData = {
    matchID: string;
    duration: number; // in seconds!
    playlistID: playlists;
}
