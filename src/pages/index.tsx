// import {
//   Box,
//   Flex,
//   Heading,
//   Grid,
//   Image,
//   Text,
//   // Button,
//   useColorModeValue,

// } from '@chakra-ui/react';
// import React from 'react';
// import { Header } from '~components/Header';
// import { Menu } from '~components/Menu'


// export default function App() {
//   return(
//     <>
//     <Header />
//     <Box >
//     <Menu />
//     </Box>
//     </>
//   )
// }


import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Avatar,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function App() {
  return (
    <Box bg="mintcream" minH="100vh">
      {/* Header */}
      <Box bg="white" p={4} boxShadow="sm">
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <Box
            w="50px"
            h="50px"
            border="2px solid lightblue"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
          >
            <Image src="/images/logo.png" />
          </Box>

          {/* Login and Register */}
          <Flex align="center" gap={4}>
            <Text fontSize="sm" color="green.700" cursor="pointer">
              Cadastre-se
            </Text>
            <Avatar size="sm" bg="green.700" color="white" />
              <Text fontSize="sm" color="green.700" cursor="pointer">
              Entrar
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <VStack spacing={8} py={8} align="center">
        {/* Section 1 */}
        <Flex
          bg="green.100"
          p={6}
          borderRadius="md"
          boxShadow="sm"
          align="center"
          w="90%"
          maxW="500px"
        >
          <Box
            w="60px"
            h="60px"
            bg="green.300"
            borderRadius="full"
            mr={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Placeholder for icon */}
          </Box>
          <Text>
            Acesse informações e sugestões confiáveis de cuidados para seus
            filhos de acordo com a idade
          </Text>
        </Flex>

        {/* Section 2 */}
        <Flex
          bg="green.100"
          p={6}
          borderRadius="md"
          boxShadow="sm"
          align="center"
          w="90%"
          maxW="500px"
        >
          <Box
            w="60px"
            h="60px"
            bg="green.300"
            borderRadius="full"
            mr={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Placeholder for icon */}
          </Box>
          <Text>
            Entre em nossa comunidade de pais e nos ajude compartilhando suas
            experiências com seus filhos
          </Text>
        </Flex>

        {/* Section 3 */}
        <Flex
          bg="green.100"
          p={6}
          borderRadius="md"
          boxShadow="sm"
          align="center"
          w="90%"
          maxW="500px"
        >
          <Box
            w="60px"
            h="60px"
            bg="green.300"
            borderRadius="full"
            mr={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Placeholder for icon */}
          </Box>
          <Text>
            <Text fontWeight="bold">Dúvidas?</Text> Entre em contato com nossa
            equipe de suporte para ajudar com suas dúvidas.
          </Text>
        </Flex>
      </VStack>

      {/* Footer */}
      <Box bg="white" textAlign="center" py={4}>
        <Text color="#146B49" fontWeight="bold">FOOTER</Text>
      </Box>
    </Box>
  );
}
