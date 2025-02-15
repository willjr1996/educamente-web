import { Box, VStack, Image, Input, Button, Text, Textarea, useBreakpointValue } from "@chakra-ui/react";
import { Menu } from "~components/Menu";
import CardTexto from "~components/CardCuidados";
import { Header } from "~components/Header";
import { BtnVoltar } from "~components/ReturnBtn";
import { withAuth } from "~contexts/withAuth";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import { notifyError, notifySuccess } from "~utils/utils";
import { useAuth } from "~contexts/AuthContext";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Footer from "~components/Footer";

function EducacaoInfantilS() {
  const { user } = useAuth();
  const { role } = user;
  const { userId } = user;
  const [lista, setLista] = useState<{ conteudo: string, id: number }[]>([]);
  const [conteudo, setConteudo] = useState('');
  const [saudeRequest, setSaudeRequest] = useState({
    idFuncionario: userId,
    mensagem: '',
    dataRegistro: new Date().toLocaleDateString('pt-BR'),
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    carregarLista();
  }, [])

  function carregarLista() {
    axios.get("http://localhost:8080/api/saudemental")
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => {
        handleErrors(error);
      });
  }

  function salvar() {
    axios.post("http://localhost:8080/api/sugestao/saudemental", saudeRequest)
      .then(() => {
        notifySuccess('Mensagem sobre saúde mental cadastrada com sucesso.');
        setConteudo('');
        carregarLista();
      })
      .catch((error) => {
        handleErrors(error);
      })
  }

  async function remover(id: number) {
    await axios.delete(`http://localhost:8080/api/saudemental/${id}`)
      .then(() => {
        notifySuccess('Mensagem removida com sucesso.');
        carregarLista();
      })
      .catch((error) => {
        handleErrors(error);
      })
  }

  function handleErrors(error: any) {
    if (error.response?.data?.errors) {
      error.response.data.errors.forEach((err: { defaultMessage: string }) => notifyError(err.defaultMessage));
    } else {
      notifyError(error.response?.data?.message || 'Erro desconhecido');
    }
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Menu />

      <Box
        bg="#b3f0db"
        w="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        overflowX="hidden"
        fontFamily="Delius"
      >
        <BtnVoltar top={{ base: '6%', md: '3%' }} />

        {/* Imagem superior direita (oculta em mobile) */}
        {!isMobile && (
          <Box position="absolute" top="20px" right="20px">
            <Image src="/images/duvida.png" w="200px" h="200px" borderRadius="50%" />
          </Box>
        )}

        {/* Imagem inferior esquerda (oculta em mobile) */}
        {!isMobile && (
          <Box position="absolute" bottom="20px" left="20px">
            <Image src="/images/obrigado.png" w="200px" h="200px" borderRadius="50%" />
          </Box>
        )}

        <VStack
          spacing={6}
          mt={{ base: 4, md: 8 }}
          w={{ base: "90%", md: "80%" }}
          alignItems="center" // Centraliza os itens no VStack
        >
          {role === 'ROLE_FUNCIONARIO_ADMIN' && (
            <Box w="100%" display="flex" justifyContent="center">
              <FormControl maxW={{ base: "100%", md: "80%" }} w="100%">
                <FormLabel textAlign="center">Cadastrar Mensagem</FormLabel>
                <Box display="flex" justifyContent="center">
                  <Textarea
                    value={conteudo}
                    onChange={e => {
                      setConteudo(e.target.value);
                      setSaudeRequest({ ...saudeRequest, mensagem: e.target.value });
                    }}
                    placeholder="Digite a mensagem"
                    borderColor="green"
                    borderWidth="3px"
                    bg="rgb(255, 255, 255)"
                    focusBorderColor="rgba(5, 166, 89, 0.7)"
                    fontFamily="Delius"
                    size="lg"
                    minH="40px"
                    resize="vertical"
                    w={{ base: "100%", md: "80%" }} // Ajusta a largura do Textarea
                  />
                </Box>
                <Box display="flex" justifyContent="center" mt={4}>
                  <Button
                    onClick={salvar}
                    colorScheme="green"
                    fontFamily="Delius"
                    w={{ base: "100%", md: "80%" }} // Ajusta a largura do Button
                  >
                    Salvar Mensagem
                  </Button>
                </Box>
              </FormControl>
            </Box>
          )}

          {lista.map((item) => (
            item.conteudo && (
            <Box
              key={item.id}
              justifyContent="center"
              display="flex"
              alignItems="center"
              w="100%"
              flexDirection={{ base: 'column', md: 'row' }} // Coluna em mobile, linha em desktop
              textAlign={{ base: 'center', md: 'left' }} // Centraliza texto em mobile
            >
              <CardTexto>{item.conteudo}</CardTexto>
              {role === 'ROLE_FUNCIONARIO_ADMIN' && (
                <Button
                  colorScheme="red"
                  ml={{ base: 0, md: 2 }} // Remove margem em mobile
                  mt={{ base: 2, md: 0 }} // Adiciona margem no topo em mobile
                  onClick={() => remover(item.id)}
                >
                  Remover
                </Button>
              )}
            </Box>
            )
          ))}
        </VStack>
      </Box>
      <Footer />
    </>
  );
}

export default withAuth(EducacaoInfantilS);