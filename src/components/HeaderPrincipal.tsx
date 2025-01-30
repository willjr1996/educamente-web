import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from 'next/link';

export default function HeaderPrincipal() {
  return (
    <>
      <Box bg="white" p={{ base: 2, md: 4 }} boxShadow="sm">
        <Flex
          align="center"
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Box
            w={{ base: "60px", md: "80px" }}
            h={{ base: "60px", md: "80px" }}
            border="2px solid lightblue"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
          >
            <Image src="/images/logo.png" objectFit="contain" cursor="pointer" />
          </Box>

          <Flex align="center" gap={10} direction="row" mt={0}>
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
          </Flex>
        </Flex>
      </Box>
      <Divider color="grey.500" />
    </>
  );
}
