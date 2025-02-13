import {
  Box,
  Flex,
  Icon,
  Text,
  Avatar,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Head from "next/head";

export function Header() {
  
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  // Função para fazer o logout (remover o token)
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
    <Box bg="mintcream" p={4} boxShadow="sm" fontFamily="Delius">
      <Flex
        align="center"
        justify="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Box
          w={{ base: "60px", md: "80px" }}
          h={{ base: "60px", md: "80px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="md"
          mt="-20"
        >
          <Link href={"/"} >
            <Image src="/images/logo.png" cursor="pointer" mt="20" width="50px"/>
          </Link>
        </Box>

        <Flex align="center" gap={6}>
          <Link href="/notificacoes" passHref>
            <Flex flexDir="column" align="center" cursor="pointer">
              <Icon as={BellIcon} boxSize={6} color="green.700" />
              <Text fontSize="sm" color="green.700" ml={1}>
                Ativar Notificações
              </Text>
            </Flex>
          </Link>

          {!token ? (
            <>
              <Link href="/login">
                <Text fontSize="sm" color="green.700" cursor="pointer">
                  Entrar
                </Text>
              </Link>
            </>
          ) : (
            
              
              <Button onClick={handleLogout} colorScheme="green" size="sm">
                Sair
              </Button>
            
          )}
        </Flex>
      </Flex>
    </Box>
    </>
  );
}
