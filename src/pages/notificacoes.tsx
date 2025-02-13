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
import { withAuth } from '~contexts/withAuth';
import HeaderPrincipal from '~components/HeaderPrincipal';
import Head from 'next/head';

function DicasDiarias() {

return (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
        </Head>
        <Box h="100vh" overflow="hidden" backgroundColor="#adf6db" fontFamily="Delius">
            <Flex flexDir="column" align="center" justify="center" h="100vh">
                <Text
                    fontSize={{ base: "40px", md: "70px" }} 
                    color="#146B49"
                    textAlign="center"
                    mb={2}
                    mt={{ base: 8, md: 16 }} 
                    fontFamily="Delius"
                >
                    DICAS DIÁRIAS
                </Text>

                
                <Flex
                    w="100%"
                    maxWidth={{ base: "90%", md: "760px" }} 
                    bg="white"
                    borderColor="black"
                    p={{ base: 4, md: 8 }} 
                    borderRadius={16}
                    flexDir="column"
                    align="center"
                    boxShadow="md"
                >
                    <Text
                        fontSize={{ base: "18px", md: "25px" }}
                        color="#146B49"
                        textAlign="center"
                        mb={8}
                        fontFamily="Delius"
                    >
                        Gostaria de receber dicas diárias sobre saúde mental infantil e de práticas educativas baseadas em metodologias positivas?
                    </Text>

                    {/* Botões */}
                    <Flex justify="space-between" align="center" w="100%" mt="6">
                        <Link href="/" passHref>
                            <Button
                                w={{ base: "120px", md: "140px" }} 
                                colorScheme="red"
                                size={{ base: "md", md: "lg" }} 
                                leftIcon={<ArrowBackIcon />}
                                fontFamily="Delius"
                            >
                                Voltar
                            </Button>
                        </Link>

                        <Link href="/" passHref>
                            <Button
                                w={{ base: "120px", md: "140px" }}
                                colorScheme="green"
                                size={{ base: "md", md: "lg" }} 
                                rightIcon={<CheckIcon />}
                                fontFamily="Delius"
                            >
                                Confirmar
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    </>
);
}

export default withAuth(DicasDiarias);