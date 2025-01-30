import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Tooltip, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router"; 

// Definindo a interface para as propriedades do BtnVoltar
interface BtnVoltarProps {
  top: string;  // Propriedade dinâmica para a posição vertical
}

export function BtnVoltar({ top }: BtnVoltarProps) {
  const router = useRouter();
  const homeRoute = "/";

  const handleClick = () => {
    router.push(homeRoute); 
  };

  return (
    <Flex position="absolute" left={4} top={top} transform="translateY(-50%)">
      <Tooltip label="Voltar" fontSize="md" placement="top">
        <Button
          variant="outline"
          colorScheme="green"
          size="sm"
          borderRadius="full"
          padding={2}
          leftIcon={<ArrowBackIcon />}
          _hover={{
            transform: 'scale(1.2)',
            transition: 'transform 0.3s ease',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          minWidth="auto"
          minHeight="auto"
          onClick={handleClick} 
        />
      </Tooltip>
    </Flex>
  );
}
