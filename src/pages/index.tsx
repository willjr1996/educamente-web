/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Flex,
  Text,
  Avatar,
  VStack,
  Image
} from "@chakra-ui/react";
// import { Header } from '~components/Header'
import Link from 'next/link'
import Footer from "~components/Footer";


export default function App() {
  return (
    <>
      <Box bg="#adf6db" height="100vh" display="flex" flexDirection="column">
        <Box bg="white" p={4} boxShadow="sm">
          <Flex align="center" justify="space-between">
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

            <Flex align="center" gap={4}>
              <Link href="/cadastro">
                <Text fontSize="sm" color="green.700" cursor="pointer">
                  Cadastre-se
                </Text>
              </Link>
              <Avatar size="sm" bg="green.700" color="white" />
              <Link href="/login">
                <Text fontSize="sm" color="green.700" cursor="pointer">
                  Entrar
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Box>

        <VStack spacing={8} py={8} align="center" flex="1">
          <Flex
            // bg="green.100"
            p={6}
            borderRadius="md"
            boxShadow="sm"
            align="center"
            w="90%"
            maxW="800px"
          >
            <Box
              w="250px"
              h="145px"
              // bg="green.300"
              borderRadius="full"
              mr={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              <Link href="/cuidados/comportamento">
                <Image src="/images/duvidas.png" />
              </Link>
            </Box>
            <Text>
              Acesse informações e sugestões confiáveis de cuidados para seus
              filhos de acordo com a idade
            </Text>
          </Flex>

          <Flex
            // bg="green.100"
            p={6}
            borderRadius="md"
            boxShadow="sm"
            align="center"
            w="90%"
            maxW="800px"
          >
            <Box
              w="250px"
              h="60px"
              // bg="green.300"
              borderRadius="full"
              mr={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/images/confiante.png" />
            </Box>
            <Text>
              Entre em nossa comunidade de pais e nos ajude compartilhando suas
              experiências com seus filhos
            </Text>
          </Flex>

          <Flex
            // bg="green.100"
            p={6}
            borderRadius="md"
            boxShadow="sm"
            align="center"
            w="90%"
            maxW="700px"
          >
            <Box
              w="250px"
              h="250px"
              // bg="green.300"
              borderRadius="full"
              mr={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/images/heal.png" />
            </Box>
            <Text>
              <Text fontWeight="bold">Dúvidas?</Text> Entre em contato com nossa
              equipe de suporte para ajudar com suas dúvidas.
            </Text>
          </Flex>
        </VStack>

        {/* <Box bg="white" textAlign="center" py={4}>
        <Text color="#146B49" fontWeight="bold">FOOTER</Text>
      </Box> */}
        <Footer />
      </Box>
    </>
  )
}
