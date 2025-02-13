import { Box, Button, Flex, Stack, Text, Image, Input, FormLabel, color } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Head from 'next/head'
import { notifyError } from '~utils/utils'

export default function Login() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!username) {
      notifyError("Digite seu email");
    } else if (!password) {
      notifyError("Digite sua senha");
    }
    await login(username, password)
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
      <Box h="100vh" overflow="hidden" backgroundColor="#adf6db">
        <Flex flexDir="column" align="center" justify="center" py={6}>
          <Image src={'/images/logo.png'} alt="logo" width={'88px'} marginBottom={4} />
          <Text fontSize="70" color="#146B49" textAlign="center" fontFamily="Delius">Bem vindo ao Educamente!</Text>
        </Flex>

        <Flex flexDir="column" align="center" justify="center" h="100vh" overflow="hidden" mt="-200" fontFamily="Delius">
          <Flex as="form" w="30%" maxWidth={660} bg="white" p="6" borderRadius={8} flexDir="column" onSubmit={handleLogin}>
            <Stack spacing="4">
              <Text fontSize="50" color="#146B49" w="100%" textAlign="center" mt="-5" fontFamily="Delius">
                Login
              </Text>
              <FormLabel fontFamily="Delius" fontSize="30" mt="-5">Email: </FormLabel>
              <Input
                mt="-5"
                name="email"
                type="email"
                placeholder="Digite seu email"
                borderColor="green"
                borderWidth="3px"
                bg="rgb(255, 255, 255)"
                focusBorderColor="rgba(5, 166, 89, 0.7)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fontFamily="Delius"
              />
              <FormLabel fontFamily="Delius" fontSize="30">Senha: </FormLabel>
              <Input
                mt="-5"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                borderColor="green"
                borderWidth="3px"
                bg="rgb(255, 255, 255)"
                focusBorderColor="rgba(5, 166, 89, 0.7)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fontFamily="Delius"
              />
            </Stack>
            <Flex justify="space-between" align="center" w="100%" mt="6" >
              <Flex w="100%" justify="left">
                <Link href="cadastro">
                  <Text fontSize="sm" cursor="pointer" fontFamily="Delius" _hover={{ color: "green" }}>Não tem cadastro? Faça agora!</Text>
                </Link>
              </Flex>

              <Button w={140} type="submit" colorScheme="green" size="lg" fontFamily="Delius">Entrar</Button>
            </Flex>
          </Flex>
          <Flex justify="center" w="100%" mt="6" px="630" cursor="pointer">
            <Link href="/recuperarSenha">
              <Text fontFamily="Delius" _hover={{ color: "green" }}>Esqueceu a senha?</Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}