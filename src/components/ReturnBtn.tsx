import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Tooltip, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router"; 

interface BtnVoltarProps {
  top: string;  
}

export function BtnVoltar({ top }: BtnVoltarProps) {
  const router = useRouter();
  const homeRoute = "/";

  const handleClick = () => {
    router.push(homeRoute); 
  };

  return (
    <Flex position="absolute" left={5} top={top} transform="translateY(-45%)">
      <Tooltip label="Voltar" fontSize="md" placement="top" >
        <Button
          variant="outline"
          colorScheme="black"
          bg="#68d391"
          size="big"
          borderRadius="full"
          padding={4}
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
          display="flex"
          justifyContent="center"
          alignItems="center"
          iconSpacing={0} 
        />
      </Tooltip>
    </Flex>
  );
}