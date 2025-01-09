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
import { Title } from '~components/Title'

export default function Cadastro() {
    return (
        <Box h="100vh" overflow="hidden" backgroundColor="#adf6db">
            <Flex flexDir="row" justify="space-between" align="center">
                <Image src={'/images/logo.png'} alt="logo" width={'88px'} margin="10px" />
                <Text fontSize="90" color="#146B49" w="100%" align="center" margin="auto">CADASTRO</Text>
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
                        <FormLabel htmlFor="nome">Nome: </FormLabel>
                        <Input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Escreva seu nome completo"
                        />
                        
                        <FormLabel htmlFor="email">E-mail: </FormLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Escreva seu email aqui"
                        />
                        
                        <FormLabel htmlFor="cpf">CPF: </FormLabel>
                        <Input
                            id="cpf"
                            name="cpf"
                            type="text"
                            placeholder="Escreva aqui seu CPF"
                        />
                        
                        <Flex flexDir="row" alignItems="center"  >
                        <FormLabel htmlFor="dtNascimento">Nascimento: </FormLabel>
                        <Input
                            id="dtNascimento"
                            name="dtNascimento"
                            type="number"
                            placeholder="Dia/Mês/Ano"
                            mr={10}
                        />
                        <FormLabel htmlFor="telefone">Telefone: </FormLabel>
                        <Input
                            id="telefone"
                            name="telefone"
                            type="number"
                            // placeholder=""
                        />
                        </Flex>
                        
                        <FormLabel htmlFor="senha">Senha: </FormLabel>
                        <Input
                            id="senha"
                            name="senha"
                            type="password"
                            placeholder="Digite sua senha"
                        />
                        
                        <FormLabel htmlFor="confirmaSenha">Confirme a Senha</FormLabel>
                        <Input
                            id="confirmaSenha"
                            name="confirmaSenha"
                            type="password"
                            placeholder="Confirme sua senha"
                        />
                    </Stack>
                    <Flex justify="right" align="center" w="100%" mt="6">
                        <Button
                            w={140}
                            type="submit"
                            colorScheme="green"
                            size="lg"
                        >
                            Concluir
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}
