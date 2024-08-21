import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={genre.image_background}
              />
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
