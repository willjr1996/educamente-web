import { 
Avatar,
Box, 
Flex, 
Image, 
Text,
 } from "@chakra-ui/react";
 import Link from 'next/link'

export default function HeaderPrincipal (){
    return(
<Box bg="white" p={4} boxShadow="sm">
  <Flex align="center" justify="space-between">
        <Box
      w="80px"
      h="80px"
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
    ); 
}

