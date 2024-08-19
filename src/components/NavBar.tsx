import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      {/* This Navbar is layout horizontally so use HStack */}
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
