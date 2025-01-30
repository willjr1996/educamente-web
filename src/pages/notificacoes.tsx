import {
    Box,
    Button,
    Flex,
    Text,
    Image,
    Avatar,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowBackIcon, CheckIcon } from '@chakra-ui/icons';

export default function DicasDiarias() {
    return (
        <Box h="100vh" overflow="hidden" backgroundColor="#adf6db">
            <Flex flexDir="column" align="center" justify="center" h="100vh">
                <Flex w="100%" justify="space-between" align="center" bg="white" position="absolute" top={0} px={4} py={2}>
                    <Link href={'/'}>
                        <Image
                            src={'/images/logo.png'}
                            alt="logo"
                            width={'88px'}
                            cursor="pointer"
                        />
                    </Link>
                    <Avatar size={{ base: "sm", md: "md" }} bg="green.700" color="white" />

                </Flex>

                <Text fontSize="70" color="#146B49" textAlign="center" mb={2} mt={16}>
                    DICAS DIÁRIAS
                </Text>

                <Flex
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
                    <Text fontSize="25" color="#146B49" textAlign="center" mb={8}>
                        Gostaria de receber dicas diárias sobre saúde mental infantil e de práticas educativas baseadas em metodologias positivas?
                    </Text>

                    <Flex justify="space-between" align="center" w="100%" mt="6">
                        <Link href="/" passHref>
                            <Button
                                w={140}
                                colorScheme="red"
                                size="lg"
                                leftIcon={<ArrowBackIcon />}
                            >
                                Voltar
                            </Button>
                        </Link>

                        {/*adicionar funcionalidade */}
                        <Link href="/" passHref>
                            <Button
                                w={140}
                                colorScheme="green"
                                size="lg"
                                rightIcon={<CheckIcon />}
                            >
                                Confirmar
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}
