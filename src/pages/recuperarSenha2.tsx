import {
    Box,
    Button,
    Flex,
    Stack,
    Text,
    Image,
    FormLabel,
    useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from '~components/Input';
import { ArrowBackIcon, CheckIcon } from '@chakra-ui/icons';
import Modal from '~components/Modal';

export default function Cadastro() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box h="100vh" overflow="hidden" backgroundColor="#adf6db">
            <Flex flexDir="column" align="center" justify="center" h="100vh">
                <Flex w="100%" justify="space-between" align="center" position="absolute" top={4} px={4}>
                    <Link href={'/'}>
                        <Image
                            src={'/images/logo.png'}
                            alt="logo"
                            width={'88px'}
                            cursor="pointer"
                        />
                    </Link>
                </Flex>

                <Text fontSize="80"
                    color="#146B49" textAlign="center"
                    mb={2}>
                    RECUPERAR SENHA
                </Text>

                <Flex
                    as="form"
                    w="100%"
                    maxWidth={760}
                    bg="white"
                    borderColor="black"
                    p="8"
                    borderRadius={16}
                    flexDir="column"
                    align="center"
                    boxShadow="md"
                >
                    <Stack spacing={4} width="100%">

                        <Text fontSize="25"
                            color="#146B49"
                            textAlign="center"
                            mb={8}>
                            Preencha os campos de recuperar senha, e confirme-os para redefinir sua senha
                        </Text>
                        <FormLabel htmlFor="senha">Senha:</FormLabel>
                        <Input
                            id="senha"
                            name="senha"
                            type="text"
                            placeholder="Escreva aqui sua nova senha de acesso"
                            borderColor="black"
                            borderWidth="1px"
                            bg="rgba(5, 166, 89, 0.7)"
                            focusBorderColor="rgba(5, 166, 89, 0.7)"
                        />

                        <FormLabel htmlFor="confirmaSenha">Confirmar Senha:</FormLabel>
                        <Input
                            id="confirmaSenha"
                            name="confirmaSenha"
                            type="text"
                            placeholder="Reescreva aqui sua nova senha de acesso"
                            borderColor="black"
                            borderWidth="1px"
                            bg="rgba(5, 166, 89, 0.7)"
                            focusBorderColor="rgba(5, 166, 89, 0.7)"
                        />
                    </Stack>

                    <Flex justify="space-between" align="center" w="100%" mt="6">
                        <Button
                            w={140}
                            colorScheme="red"
                            size="lg"
                            leftIcon={<ArrowBackIcon />}
                        >
                            Voltar
                        </Button>
                        <Button
                            w={140}
                            onClick={onOpen}
                            colorScheme="green"
                            size="lg"
                            rightIcon={<CheckIcon />}
                        >
                            Confirmar
                        </Button>
                    </Flex>

                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                        message="Tem certeza que deseja finalizar a recuperação de senha agora?"
                        title="CONFIRMAÇÃO"
                    />
                </Flex>
            </Flex>
        </Box>
    );
}
