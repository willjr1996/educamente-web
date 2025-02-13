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
          flexDirection={{ base: "column", md: "row" }} // Coluna em mobile, linha em desktop
          gap={{ base: 2, md: 6 }} // Espaçamento menor em mobile, maior em desktop
        >
          {/* Logo */}
          <Box
            w={{ base: "50px", md: "80px" }} // Tamanho menor em mobile, maior em desktop
            h={{ base: "50px", md: "80px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
          >
            <Link href={"/"}>
              <Image src="/images/logo.png" cursor="pointer" width={{ base: "50px", md: "80px" }} />
            </Link>
          </Box>

          {/* Notificações e Login/Logout */}
          <Flex align="center" gap={{ base: 12, md: 8 }}>
            {/* Botão de Notificações */}
            <Link href="/notificacoes" passHref>
              <Flex flexDir="column" align="center" cursor="pointer">
                <Icon as={BellIcon} boxSize={{ base: 5, md: 6 }} color="green.700" /> {/* Ícone menor em mobile */}
                <Text fontSize={{ base: "xs", md: "sm" }} color="green.700" ml={1}> {/* Texto menor em mobile */}
                  Ativar Notificações
                </Text>
              </Flex>
            </Link>

            {/* Login/Logout */}
            {!token ? (
              <Link href="/login">
                <Text fontSize={{ base: "xs", md: "sm" }} color="green.700" cursor="pointer"> {/* Texto menor em mobile */}
                  Entrar
                </Text>
              </Link>
            ) : (
              <Button
                onClick={handleLogout}
                colorScheme="green"
                size={{ base: "xs", md: "sm" }} // Botão menor em mobile
              >
                Sair
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}