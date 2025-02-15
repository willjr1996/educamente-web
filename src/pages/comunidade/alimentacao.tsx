import { useEffect, useState } from 'react';
import { Box, Button, Flex, Text, Image, Textarea, Avatar, IconButton, Tag, TagLabel } from '@chakra-ui/react';
import Link from 'next/link';
import { AddIcon, BellIcon } from '@chakra-ui/icons';
import { notifyError, notifySuccess } from "~utils/utils";
import Footer from '~components/Footer';
import { BtnVoltar } from '~components/ReturnBtn';
import { Header } from '~components/Header';
import { withAuth } from '~contexts/withAuth';
import Head from 'next/head';
import CardComunidade from '~components/CardComunidade';
import { useAuth } from '~contexts/AuthContext';
import axios from 'axios';

function ComunidadePais() {
    const { user } = useAuth();
    const { role } = user;
    const { userId } = user;
    const [lista, setLista] = useState<{
        usuario: any;
        funcionario: any; comentario: string, id: number
    }[]>([]);

    const [comentarioAlimentacao, setComentarioAlimentacao] = useState("");

    const [comentarioAlimentacaoRequest, setComentarioAlimentacaoRequest] = useState({
        idUsuario: userId,
        mensagem: '',
        dataRegistro: new Date().toLocaleDateString('pt-BR'),
    });

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {
        axios.get("http://localhost:8080/api/alimentacao")
            .then((response) => {
                setLista(response.data);
            })
            .catch((error) => {
                notifyError("Erro ao carregar as mensagens de alimentação");
            });
    }

    function salvar() {
        axios.post("http://localhost:8080/api/comentario/alimentacao", comentarioAlimentacaoRequest)
            .then(() => {
                notifySuccess('Seu comentario foi cadastrado com sucesso.');
                setComentarioAlimentacao('');
                carregarLista();
            })
            .catch((error) => {
                notifyError("Erro ao postar comentário");
            })
    }

    async function remover(id: number) {
        await axios.delete(`http://localhost:8080/api/alimentacao/${id}`)
            .then(() => {
                notifySuccess('Comentário removido com sucesso.');
                carregarLista();
            })
            .catch((error) => {
                notifyError("Erro ao excluir comentário");
            })
    }

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <Box h="100vh" overflowY="auto" backgroundColor="#adf6db">
                <BtnVoltar top='15%' />
                <Flex flexDir="column" align="center" justify="flex-start" pt={28} px={4} fontFamily="Delius">
                    <Text fontSize="3xl" color="#146B49" textAlign="center" mb={4}>
                        COMUNIDADE DE PAIS
                    </Text>

                    {/* Tags - Filtro */}
                    <Flex justify="center" gap={4} mb={4}>
                        <Tag size="lg" colorScheme="green" borderRadius="full">
                            <Link href="/comunidade/comportamento">
                                Comportamento
                            </Link>
                        </Tag>
                        <Tag size="lg" colorScheme="green" borderRadius="full" fontWeight="bold">
                            <TagLabel>Alimentação</TagLabel>
                        </Tag>
                        <Tag size="lg" colorScheme="green" borderRadius="full">
                            <Link href="/comunidade/saudemental">
                                Saúde mental
                            </Link>
                        </Tag>
                    </Flex>

                    <Flex w="100%" maxWidth={1000} bg="white" p={4} borderRadius={16} boxShadow="md" mb={4}>
                        <Textarea
                            placeholder="Comente aqui as suas experiências sobre alimentação"
                            bg="rgb(255, 255, 255)"
                            focusBorderColor="rgba(5, 166, 89, 0.7)"
                            borderColor="gray.300"
                            flex={1}
                            resize="none"
                            value={comentarioAlimentacao}
                            onChange={(e) => {
                                setComentarioAlimentacao(e.target.value);
                                setComentarioAlimentacaoRequest({ ...comentarioAlimentacaoRequest, mensagem: e.target.value });
                            }}
                        />
                        <IconButton icon={<AddIcon />} aria-label="Adicionar comentário" ml={2} colorScheme="green" onClick={salvar} />
                    </Flex>
                    {lista.map((item) => (
                        item.comentario && (
                            <Box
                                key={item.id}
                                justifyContent="center"
                                display="flex"
                                alignItems="center"
                                w="100%"
                                flexDirection={{ base: 'column', md: 'row' }}
                                textAlign={{ base: 'center', md: 'left' }}
                            >
                                <CardComunidade
                                    nome={item.usuario?.nome || item.funcionario?.nome || "Usuário desconhecido"}
                                    avatarNome={item.usuario?.nome?.charAt(0).toUpperCase() || "U"}
                                >
                                    {item.comentario || "Sem comentário disponível"}
                                </CardComunidade>
                                {userId === item.usuario.id && (
                                    <Button
                                        colorScheme="red"
                                        ml={{ base: 0, md: 2 }}
                                        mt={{ base: 2, md: 0 }}
                                        onClick={() => remover(item.id)}
                                    >
                                        Remover
                                    </Button>
                                )}

                                {role === "ROLE_FUNCIONARIO_ADMIN" && (
                                    <Button
                                        colorScheme="red"
                                        ml={{ base: 0, md: 2 }}
                                        mt={{ base: 2, md: 0 }}
                                        onClick={() => remover(item.id)}
                                    >
                                        Remover
                                    </Button>
                                )}
                            </Box>
                        )
                    ))}
                </Flex>
            </Box>
            <Footer />
        </>
    );
}

export default withAuth(ComunidadePais);