import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

const App = () => {
  // We have 2 children components here: GenreList and GameGrid.
  // When we select a genre in GenreList,
  // we want to pass that genre to GameGrid.
  // So create a state to hold the selected genre in parent component App.

  // const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // Component hold state should be the one hold it

  return (
    <div>
      <Grid
        templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
        // For this column, the base will have 1 fraction
        // and the lg will have 200px and 1 fraction
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        {/* Aside should only be visible for larger devices */}
        <Show>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={3} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
