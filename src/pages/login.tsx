import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Image,
  Input,
  FormLabel
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Login() {
  return (
    <Box h="100vh" overflow="hidden" backgroundColor="#adf6db">
      <Flex flexDir="row" justify="space-between" align="center">
        <Image src={'/images/logo.png'} alt="logo" width={'88px'} margin="10px" />
        <Text fontSize="90" color="#146B49" w="100%" align="center" >EducaMente</Text>
      </Flex>
      <Text fontSize="90" border="auto" color="#146B49" w="100%" align="center" mt="2">LOGIN</Text>
      <Flex flexDir="column" align="center" justify="center" h="100vh" overflow="hidden" border="auto" mt="-220">
        <Flex
          as="form"
          w="100%"
          maxWidth={660}
          bg="white"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="4">
            <FormLabel htmlFor="nome">Nome: </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Escreva seu email aqui"
            />

            <FormLabel htmlFor="email">E-mail: </FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Escreva aqui sua senha de acesso"
            />
          </Stack>
          <Flex justify="space-between" align="center" w="100%" mt="6">
            <Flex w="100%" justify="center">
              <Link href="cadastro">
                <Text fontSize="sm" cursor="pointer">Não tem cadastro? Faça agora!</Text>
              </Link>
            </Flex>
            <Button
              w={140}
              type="submit"
              colorScheme="green"
              size="lg"
            >
              Entrar
            </Button>
          </Flex>
        </Flex>
        <Flex justify="flex-end" w="100%" mt="6" px="390">
          <Link href="">
            <Text>Esqueceu a senha?</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}