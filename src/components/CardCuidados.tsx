import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardTextoProps {
    children: ReactNode;
}

const CardTexto: React.FC<CardTextoProps> = ({ children }) => {
    return (
      <Box
        bg="#006633"
        borderRadius="10px"
        w="350px"
        p={4}
        boxShadow="lg"
        color="white"
      >
        <Text fontSize="md">{children}</Text>
      </Box>
    );
  };
  
  export default CardTexto;