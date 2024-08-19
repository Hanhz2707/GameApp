import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div>
      {/* This Navbar is layout horizontally so use HStack */}
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text fontSize="2xl">Game Hub</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
