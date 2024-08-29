import { Box } from "@chakra-ui/react";

interface Props {
  // Define the props for this component
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ base: "80%", md: "100%" }}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
