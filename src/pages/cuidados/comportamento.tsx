import { Box, VStack, Image, Input, Button, Textarea, useBreakpointValue } from "@chakra-ui/react";
import { Menu } from "~components/Menu";
import CardTexto from "~components/CardCuidados";
import { Header } from "~components/Header";
import { BtnVoltar } from "~components/ReturnBtn";
import { withAuth } from "~contexts/withAuth";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import { notifyError, notifySuccess } from '~utils/utils'
import { useAuth } from "~contexts/AuthContext";
import { FormControl, FormLabel } from '@chakra-ui/react'

function EducacaoInfantilC() {
  const { user } = useAuth(); 
  const { role } = user;
  const { id } = user;
  const [lista, setLista] = useState<{ conteudo: string, id: number }[]>([]);
  const [conteudo, setConteudo] = useState('');
  const [comportamentoRequest, setComportamentoRequest] = useState({
    idFuncionario: id,
    mensagem: '',
    dataRegistro: new Date().toLocaleDateString('pt-BR'),
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    carregarLista();
  }, [])

  function carregarLista() {
    axios.get("http://localhost:8080/api/comportamento")
      .then((response) => {
        setLista(response.data)
      })
  }

  function salvar() {
    axios.post("http://localhost:8080/api/sugestao/comportamento", comportamentoRequest)
      .then(() => {
        notifySuccess('Mensagem sobre comportamento cadastrada com sucesso.');
        setConteudo(''); 
        carregarLista();
      })
      .catch((error) => {
        handleErrors(error);
      })
  }

  async function remover(id: number) {
    await axios.delete(`http://localhost:8080/api/comportamento/${id}`)
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

    <Box bg="#b3f0db" w="100%" minH="100vh" display="flex" flexDirection="column" alignItems="center" position="relative" overflowX="hidden" fontFamily="Delius">
      <BtnVoltar top={{ base: '6%', md: '3%' }} />

      {/* Imagem superior esquerda (oculta em mobile) */}
      {!isMobile && (
        <Box position="absolute" top="20px" left="80px">
          <Image src="/images/duvida.png" w="200px" h="200px" borderRadius="50%" />
        </Box>
      )}

      {/* Imagem inferior direita (oculta em mobile) */}
      {!isMobile && (
        <Box position="absolute" bottom="20px" right="20px">
          <Image src="/images/pulaPula.png" w="220px" h="208px" borderRadius="50%" />
        </Box>
      )}

      <VStack spacing={4} mt={{ base: 4, md: 8 }} w={{ base: "90%", md: "80%" }}>
        {role === 'ROLE_FUNCIONARIO_ADMIN' && (
          <Box w="100%" display="flex" justifyContent="center">
          <FormControl maxW="80%" w="100%">
            <FormLabel textAlign="center">Cadastrar Mensagem</FormLabel>
            <Textarea
              value={conteudo}
              onChange={e => {
                setConteudo(e.target.value);
                setComportamentoRequest({ ...comportamentoRequest, mensagem: e.target.value });
              }}
              placeholder="Digite a mensagem"
              borderColor="green"
              borderWidth="3px"
              bg="rgb(255, 255, 255)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
              fontFamily="Delius"
              size="lg"
              minH="50px" // Reduzindo a altura mínima
              resize="vertical"
              w="100%"
            />
            <Button onClick={salvar} colorScheme="green" mt={4} fontFamily="Delius" w="100%">
              Salvar Mensagem
            </Button>
          </FormControl>
        </Box>
        )}

        {lista.map((item) => (
          <Box key={item.id} display="flex" justifyContent="center" alignItems="center" w="100%">
            <CardTexto>{item.conteudo}</CardTexto>
            {role === 'ROLE_FUNCIONARIO_ADMIN' && (
              <Button colorScheme="red" ml={2} onClick={() => remover(item.id)}>
                Remover
              </Button>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  </>
);
}

export default withAuth(EducacaoInfantilC);