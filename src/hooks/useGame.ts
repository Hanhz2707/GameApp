import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  // Define shape of the response from the API
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGame = () => {
  // Telling TS this is an array of Game
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();

    // Provide a generic type argument to get method <> so we know what shape the response will have
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});

    // return a cleanup function 
    // This will bring error since we did not check for canceled request (resolved)
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;