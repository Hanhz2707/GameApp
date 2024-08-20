import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameGrid = () => {
  // Creating custom hook to fetch games
  const { games, error } = useGame();

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
