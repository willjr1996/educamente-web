import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Image,
  FormLabel,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '~components/Input'
import InputMask from 'react-input-mask'
import { Title } from '~components/Title'

export default function Cadastro() {
  return (
    <Box h="100vh" overflow="hidden" backgroundColor="#adf6db">
      <Flex flexDir="row" justify="space-between" align="center">
        <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={'88px'}
          margin="10px"
          cursor="pointer"
        />
        </Link>
        <Text
          fontSize="90"
          color="#146B49"
          w="100%"
          align="center"
          margin="auto"
        >
          CADASTRO
        </Text>
      </Flex>
      <Title name="Cadastro" />
      <Flex flexDir="row" align="center" justify="center" m="auto">
        <Flex
          as="form"
          w="100%"
          maxWidth={760}
          bg="white"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="2">
            <Input
              id="nome"
              name="nome"
              label="Nome: "
              type="text"
              placeholder="Escreva seu nome completo"
              borderColor="black"
              borderWidth="1px"
              bg="rgba(5, 166, 89, 0.7)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />

            <FormLabel htmlFor="email">E-mail: </FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Escreva seu email aqui"
              borderColor="black"
              borderWidth="1px"
              bg="rgba(5, 166, 89, 0.7)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />

            <InputMask mask="999.999.999-99">
              {(inputProps: any) => (
                <Input
                  name="cpf"
                  type="text"
                  label="CPF: "
                  placeholder="000.000.000-00"
                  {...inputProps}
                  borderColor="black"
                  borderWidth="1px"
                  bg="rgba(5, 166, 89, 0.7)"
                  focusBorderColor="rgba(5, 166, 89, 0.7)"
                />
              )}
            </InputMask>

            <Flex flexDir="row" alignItems="center" gap={4}>
              <InputMask mask="99/99/9999">
                {(inputProps: any) => (
                  <Input
                    name="nascimento"
                    type="text"
                    label="Data de Nascimento: "
                    placeholder="Dia/Mês/Ano"
                    {...inputProps}
                    borderColor="black"
                    borderWidth="1px"
                    bg="rgba(5, 166, 89, 0.7)"
                    focusBorderColor="rgba(5, 166, 89, 0.7)"
                  />
                )}
              </InputMask>

              <InputMask mask="(99) 99999-9999">
                {(inputProps: any) => (
                  <Input
                    name="telefone"
                    type="text"
                    label="Telefone: "
                    placeholder="(00) 00000-0000"
                    {...inputProps}
                    borderColor="black"
                    borderWidth="1px"
                    bg="rgba(5, 166, 89, 0.7)"
                    focusBorderColor="rgba(5, 166, 89, 0.7)"
                  />
                )}
              </InputMask>
            </Flex>

            <FormLabel htmlFor="senha">Senha: </FormLabel>
            <Input
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              borderColor="black"
              borderWidth="1px"
              bg="rgba(5, 166, 89, 0.7)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />

            <FormLabel htmlFor="confirmaSenha">Confirme a Senha</FormLabel>
            <Input
              id="confirmaSenha"
              name="confirmaSenha"
              type="password"
              placeholder="Confirme sua senha"
              borderColor="black"
              borderWidth="1px"
              bg="rgba(5, 166, 89, 0.7)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />
          </Stack>
          <Flex justify="right" align="center" w="100%" mt="6">
            <Button w={140} type="submit" colorScheme="green" size="lg">
              Concluir
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
