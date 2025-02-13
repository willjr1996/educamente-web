import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from 'next/link';

export default function HeaderPrincipal() {
  
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
      <Box bg="white" p={{ base: 2, md: 4 }} boxShadow="sm" fontFamily="Delius">
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
            <Image src="/images/logo.png" objectFit="contain" cursor="pointer" mt="20" width="50px" />
          </Box>

          <Flex align="center" gap={10} direction="row" mt={0}>
            {!token ? (
              <>
                <Link href="/cadastro">
                  <Text fontSize={{ base: "xs", sm: "sm" }} color="green.700" cursor="pointer">
                    Cadastre-se
                  </Text>
                </Link>

                <Flex
                  align="center"
                  gap={0}
                  direction={{ base: "column", sm: "column" }}
                  mt={{ base: 4, sm: 0 }}
                >
                  <Avatar size={{ base: "sm", md: "md" }} bg="green.700" color="white" />

                  <Link href="/login">
                    <Text fontSize={{ base: "xs", sm: "sm" }} color="green.700" cursor="pointer">
                      Entrar
                    </Text>
                  </Link>
                </Flex>
              </>
            ) : (
              <Button onClick={handleLogout} colorScheme="green" size="sm">
                Sair
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
      <Divider color="grey.500" />
    </>
  );
}