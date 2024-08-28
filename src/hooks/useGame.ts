import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    // It is an array of object where each object has a platform property of type Platform
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  // Define shape of the response from the API
  // interface FetchGamesResponse {
  //   count: number;
  //   results: Game[];
  // }

const useGame = (gameQuery: GameQuery) => 
  useData<Game>("/games", 
    {params: {genres: gameQuery.genre?.id,
              platforms: gameQuery.platform?.id
             }}


    ,[gameQuery]);



export default useGame;