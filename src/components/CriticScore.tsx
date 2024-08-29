import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <div>
      <Badge
        colorScheme={color}
        fontSize={"14px"}
        paddingX={"5px"}
        borderRadius={4}
      >
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
