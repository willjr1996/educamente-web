// import { Box, VStack, Image } from "@chakra-ui/react";
// import { Menu } from "~components/Menu";
// import Link from "next/link";
// import CardTexto from "~components/CardCuidados";
// import { Header } from "~components/Header";
// import { BtnVoltar } from "~components/ReturnBtn";
// import { withAuth } from "~contexts/withAuth";
// import Head from "next/head";

// function EducacaoInfantilA() {
//   return (
//     <>
//     <Head>
//         <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
//       </Head>
//       <Header/>
//       <Menu />

//       <Box
//         bg="#b3f0db"
//         w="100%"
//         minH="100vh"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         position="relative"
//         overflow="hidden"
//         fontFamily="Delius"
//       >

//         <BtnVoltar
//          top='3%'
//         />


//         <Box
//           position="absolute"
//           bottom="20px"
//           left="50%"
//           transform="translateX(-50%)"
//         >
//           <Image src="/images/alimentacao.png" 
//           w="631px" 
//           h="224px" />
//         </Box>

//         <VStack spacing={4} mt={8}>
//           <CardTexto>
//             A alimentação saudável para crianças é fundamental para o
//             desenvolvimento físico e mental, garantindo energia e nutrientes
//             essenciais para o crescimento.
//           </CardTexto>

//           <CardTexto>
//             Oferecer alimentos naturais e equilibrados, como frutas, vegetais
//             e proteínas, ajuda a fortalecer o sistema imunológico e promove a
//             saúde.
//           </CardTexto>

//           <CardTexto>
//             Uma alimentação saudável ensina hábitos positivos, prevenindo
//             doenças e melhorando a concentração, essencial para o desempenho
//             escolar e o bem-estar geral.
//           </CardTexto>
//         </VStack>
//       </Box>
//     </>
//   )
// }
// export default withAuth(EducacaoInfantilA);
import { Box, VStack, Image, Input, Button, Textarea } from "@chakra-ui/react";
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

function EducacaoInfantilA() {
  const { user } = useAuth();
  const { role } = user;
  const [lista, setLista] = useState<{ conteudo: string, id: number }[]>([]);
  const [conteudo, setConteudo] = useState('');
  const [alimentacaoRequest, setAlimentacaoRequest] = useState({
    idFuncionario: 1,
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
        handleErrors(error);
      });
  }

  function salvar() {
    axios.post("http://localhost:8080/api/sugestao/alimentacao", alimentacaoRequest)
      .then(() => {
        notifySuccess('Mensagem sobre alimentação cadastrada com sucesso.');
        setConteudo('');
        carregarLista();
      })
      .catch((error) => {
        handleErrors(error);
      })
  }

  async function remover(id: number) {
    await axios.delete(`http://localhost:8080/api/alimentacao/${id}`)
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
        <BtnVoltar top='3%' />

        <Box position="absolute" bottom="20px" left="50%" transform="translateX(-50%)">
          <Image src="/images/alimentacao.png" w="631px" h="224px" />
        </Box>

        <VStack spacing={4} mt={8}>
          {role === 'ROLE_FUNCIONARIO_ADMIN' && (
            <Box>
              <FormControl>
                <FormLabel>Cadastrar Mensagem</FormLabel>
                <Textarea
                  value={conteudo}
                  onChange={e => {
                    setConteudo(e.target.value);
                    setAlimentacaoRequest({ ...alimentacaoRequest, mensagem: e.target.value });
                  }}
                  placeholder="Digite a mensagem"
                  borderColor="green"
                  borderWidth="3px"
                  bg="rgb(255, 255, 255)"
                  focusBorderColor="rgba(5, 166, 89, 0.7)"
                  fontFamily="Delius"
                  size="lg"
                  minH="150px"
                  resize="vertical"
                />
              </FormControl>
              <Button onClick={salvar} colorScheme="green" mt={4} fontFamily="Delius">
                Salvar Mensagem
              </Button>
            </Box>
          )}

          {lista.map((item) => (
            <Box key={item.id} display="flex" alignItems="center">
              <CardTexto>{item.conteudo}</CardTexto>
              {role === 'ROLE_FUNCIONARIO_ADMIN' && (
                <Button colorScheme="red" ml={2} onClick={() => remover(item.id)} >Remover</Button>
              )}
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
}

export default withAuth(EducacaoInfantilA);