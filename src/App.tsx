import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        {/* Aside should only be visible for larger devices */}
        <Show>
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
