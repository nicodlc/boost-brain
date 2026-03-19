import { BoostData, PositioningData, ReplayPlayerStats } from "../types/Player.ts";
import { playlists, ReplayMatchData } from "../types/MatchTypes.ts";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export class BallchasingService {

    private apiKey: string = "";
    private baseURL: string = "https://ballchasing.com/api/replays"

    constructor(baseURL: string){
        this.apiKey = Deno.env.get("BALLCHASING_API_KEY") || "";
        this.baseURL = baseURL || "" ;
    }
    
    async fetchMatchReplayIDs(
        apiKey: string,
        playerID: string,
        playlistType: playlists,
        matchCount: number
    ) : Promise<ReplayMatchData[] | []>{


        if(!apiKey || !playerID || !playlistType){
            throw new Error("Missing required parameters");
        }

        const replayIDs: ReplayMatchData[] = [];

        /* some requests over 200 matches require 
            iteration on the BC API's pages.
        */

        let nextURL: string | null =  `${this.baseURL}?player-name=${playerID}&playlist=${playlistType}&count=${matchCount}`;

        if(matchCount < 4){
            throw new Error("Invalid quantity: Must be at least 5")
        }
        else if(matchCount <= 10 ){
            console.info(`Fetching ${matchCount} matches for ${playerID}`)
            const singleResponse = await fetch(nextURL, {
                headers: {
                    'Authorization': this.apiKey
                }
            })

            if(!singleResponse.ok || singleResponse.status != 200){
                throw new Error('Failed to fetch from Ballchasing API')
            }

            const data = await singleResponse.json();
            const replayObjectList = Array.isArray(data?.list) ? data.list : [];

            /* Each element on the response list has many fields including 
                id, link, map_code, map_name, etc. 

                This function only collects minimal metadata
                like the duration of the match, playlist, and the replayID.
            */

            // deno-lint-ignore no-explicit-any
            const replayBatch = replayObjectList.map((replay: any) => ({
                matchID: replay.id,
                duration: replay.duration,
                playlistID: replay.playlist_name,
            }))

            return replayBatch;
        }
        else {
            let ids: ReplayMatchData[] = [];
            while(nextURL){
                const response = await fetch(nextURL, {
                    headers: {
                        'Authorization': this.apiKey
                    }
                })

                if(!response.ok){
                    throw new Error(response.statusText);
                };

                const data: Record<string, any> = await response.json();

                // deno-lint-ignore no-explicit-any
                ids = data.list?.map((replay: any) => ({
                    matchID: replay.id,
                    duration: replay.duration,
                    playlistID: replay.playlist_name,
                }))

                nextURL = data.next ?? null;
                replayIDs.push(...ids)

                /*Ballchasing rate limiting allows 2 requests per second*/
                await sleep(700)
            }

            
            return replayIDs;
        }
    }

    // TODO: implement function to fetch replay data for each replayID
    async fetchReplayData(replayID: string, playerID: string): Promise<ReplayPlayerStats[] | null> {
        const completeURL = `${this.baseURL}/${replayID}`

        try{
            const response = await fetch(completeURL, {
                headers: {
                    'Authorization': this.apiKey
                }
            })

            if(!response.ok || response.status != 200){
                console.error(`Error: ${response.statusText}`)
                return null;
            }

            const data = await response.json();
            const player = this.getPlayerTeam(playerID, data);

            

        } catch(error){
            console.error(`Failed to fetch data for replay ${replayID}: ${error}`)
        }

        /* Nothing was found, defaulting to a null object for the time being.*/
        return null;
    }




    //TODO: Implement function to get the player's team
    getPlayerTeam(playerID: string, data: Record<string, any>): boolean {
        return false;
    }
}