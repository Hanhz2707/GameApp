import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
// Define shape of the response from the API
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  // Telling TS this is an array of Game
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Provide a generic type argument to get method <> so we know what shape the response will have
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <div>
      {error && <Text color="red.500">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
