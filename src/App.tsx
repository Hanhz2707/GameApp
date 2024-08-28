import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

const App = () => {
  // We have 2 children components here: GenreList and GameGrid.
  // When we select a genre in GenreList,
  // we want to pass that genre to GameGrid.
  // So create a state to hold the selected genre in parent component App.
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

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
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
