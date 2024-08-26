import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

// Array of Platform objects
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // This is index signature, represent the type of the key and each key is mapped to a value of type IconType
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <div>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"gray.500"}
          />
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
