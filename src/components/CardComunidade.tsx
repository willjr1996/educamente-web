import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardComunidadeProps {
  children: ReactNode;
  nome: string;
  avatarNome: string;
}

const CardComunidade: React.FC<CardComunidadeProps> = ({ children, nome, avatarNome }) => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius={16}
      boxShadow="sm"
      w="760px"
      mb={4}
    >
      <Flex direction="column">
        <Flex align="center" mb={2}>
          <Avatar size="sm" name={avatarNome} bg="green.500" color="white" mr={2} />
          <Text fontWeight="bold">{nome}</Text>
        </Flex>
        <Text>{children}</Text>
      </Flex>
    </Box>
  );
};

export default CardComunidade;