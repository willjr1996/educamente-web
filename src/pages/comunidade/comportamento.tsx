import { Box, Button, Flex, Text, Image, Textarea, Avatar, IconButton, Tag, TagLabel } from '@chakra-ui/react';
import Link from 'next/link';
import { AddIcon, BellIcon } from '@chakra-ui/icons';
import Footer from '~components/Footer';
import { BtnVoltar } from '~components/ReturnBtn';
import { Header } from '~components/Header';
import { withAuth } from '~contexts/withAuth';
import Head from 'next/head';

function ComunidadePais() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <Box h="100vh" overflowY="auto" backgroundColor="#adf6db">
                <BtnVoltar
                    top='15%'
                />
                <Flex flexDir="column" align="center" justify="flex-start" pt={28} px={4} fontFamily="Delius">
                    <Text fontSize="3xl" color="#146B49" textAlign="center" mb={4}>
                        COMUNIDADE DE PAIS
                    </Text>

                    {/* Tags - Filtro */}
                    <Flex justify="center" gap={4} mb={4}>
                        <Tag size="lg" colorScheme="green" borderRadius="full" fontWeight="bold">
                            <TagLabel>Comportamento</TagLabel>
                        </Tag>
                        <Tag size="lg" colorScheme="green" borderRadius="full">
                            <Link href="/comunidade/alimentacao">
                                Alimentação
                            </Link>
                        </Tag>
                        <Tag size="lg" colorScheme="green" borderRadius="full">
                            <Link href="/comunidade/saudemental">
                                Saúde mental
                            </Link>
                        </Tag>
                    </Flex>

                    <Flex w="100%" maxWidth={760} bg="white" p={4} borderRadius={16} boxShadow="md" mb={4}>
                        <Textarea
                            placeholder="Comente aqui as suas experiências sobre comportamento"
                            bg="rgba(5, 166, 89, 0.1)"
                            borderColor="gray.300"
                            flex={1}
                            resize="none"
                        />
                        <IconButton icon={<AddIcon />} aria-label="Adicionar comentário" ml={2} colorScheme="green" />
                    </Flex>

                    <Flex flexDir="column" w="100%" maxWidth={760} gap={4}>
                        <Flex bg="white" p={4} borderRadius={16} boxShadow="sm" flexDir="column">
                            <Flex align="center" mb={2}>
                                <Avatar size="sm" name="Pais 1" bg="green.500" color="white" mr={2} />
                                <Text fontWeight="bold">Pais 1</Text>
                            </Flex>
                            <Text>
                                Quando meu filho teve que ajudar um colega que estava com dificuldades, vi como ele se tornou mais empático e responsável. Foi um momento marcante.
                            </Text>
                        </Flex>

                        <Flex bg="white" p={4} borderRadius={16} boxShadow="sm" flexDir="column">
                            <Flex align="center" mb={2}>
                                <Avatar size="sm" name="Pais 2" bg="green.500" color="white" mr={2} />
                                <Text fontWeight="bold">Pais 2</Text>
                            </Flex>
                            <Text>
                                Lembro quando minha filha enfrentou uma situação de bullying na escola. Após conversarmos, ela se tornou mais confiante e aprendeu a se posicionar com respeito.
                            </Text>
                        </Flex>

                        <Flex bg="white" p={4} borderRadius={16} boxShadow="sm" flexDir="column">
                            <Flex align="center" mb={2}>
                                <Avatar size="sm" name="Pais 3" bg="green.500" color="white" mr={2} />
                                <Text fontWeight="bold">Pais 3</Text>
                            </Flex>
                            <Text>
                                Houve um dia em que meu filho teve que tomar uma decisão importante sozinho. Ao ver como ele se comportou com maturidade, percebi o quanto ele evoluiu.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            <Footer />
        </>
    );
}
export default withAuth(ComunidadePais);