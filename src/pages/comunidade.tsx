import {
    Box,
    Button,
    Flex,
    Text,
    Image,
    Textarea,
    Avatar,
    IconButton,
    Tag,
    TagLabel,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AddIcon, BellIcon } from '@chakra-ui/icons';
import Footer from '~components/Footer';

export default function ComunidadePais() {
    return (
        <>

            <Box h="100vh" overflowY="auto" backgroundColor="#adf6db">
                <Flex w="100%" justify="space-between" align="center" bg="white" position="absolute" top={0} px={4} py={2} boxShadow="sm" zIndex={1}>
                    <Flex align="center">
                        <Link href={'/'}>
                            <Image
                                src={'/images/logo.png'}
                                alt="logo"
                                width={'80px'}
                                cursor="pointer"
                            />
                        </Link>
                    </Flex>
                    <Flex align="center">
                        <IconButton icon={<BellIcon boxSize={8} />} aria-label="Notificações" variant="ghost" mr={4} />
                        <Avatar size="sm" bg="green.700" color="white" />
                    </Flex>
                </Flex>

                <Flex flexDir="column" align="center" justify="flex-start" pt={28} px={4}>
                    <Text fontSize="3xl" color="#146B49" textAlign="center" mb={4}>
                        COMUNIDADE DE PAIS
                    </Text>

                    {/* Tags */}
                    <Flex justify="center" gap={4} mb={4}>
                        <Tag size="lg" colorScheme="green" borderRadius="full">
                            <TagLabel>COMPORTAMENTO</TagLabel>
                        </Tag>
                        <Tag size="lg" colorScheme="green" borderRadius="full">
                            <TagLabel>ALIMENTAÇÃO</TagLabel>
                        </Tag>
                        <Tag size="lg" colorScheme="green" borderRadius="full">
                            <TagLabel>SAÚDE MENTAL</TagLabel>
                        </Tag>
                    </Flex>

                    <Flex w="100%" maxWidth={760} bg="white" p={4} borderRadius={16} boxShadow="md" mb={4}>
                        <Textarea
                            placeholder="Comente aqui as suas experiências"
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

                {/* <Flex w="100%" bg="white" py={4} justify="center" position="sticky" bottom={0}>
              <Text color="gray.600">FOOTER</Text>
            </Flex>
           */}
            </Box>
            <Footer />
        </>
    );
}