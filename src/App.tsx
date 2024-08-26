import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

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
            <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
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
