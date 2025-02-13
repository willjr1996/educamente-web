import { Box, VStack, Image } from "@chakra-ui/react";
import { Menu } from "~components/Menu";
import CardTexto from "~components/CardCuidados";
import { Header } from "~components/Header";
import { BtnVoltar } from "~components/ReturnBtn";
import { withAuth } from "~contexts/withAuth";
import Head from "next/head";

function EducacaoInfantilC() {
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

        <BtnVoltar 
         top='3%'
        />

        <Box position="absolute" top="20px" left="80px">
          <Image
            src="/images/duvida.png"
            w="200px"
            h="200px"
            borderRadius="50%"
          />
        </Box>

        <Box position="absolute" bottom="20px" right="20px">
          <Image
            src="/images/pulaPula.png"
            w="220px"
            h="208px"
            borderRadius="50%"
          />
        </Box>

        <VStack spacing={4} mt={8}>
          <CardTexto>
            A educação infantil deve ser baseada no respeito, incentivando a
            curiosidade das crianças e promovendo um ambiente de aprendizado
            acolhedor e divertido.
          </CardTexto>

          <CardTexto>
            Estabelecer uma rotina diária de atividades lúdicas e educativas
            estimula o desenvolvimento cognitivo e emocional, preparando as
            crianças para o futuro.
          </CardTexto>

          <CardTexto>
            Incentivar o diálogo e a escuta ativa nas crianças ajuda a
            desenvolver habilidades sociais, fortalecendo a comunicação e o
            relacionamento interpessoal desde cedo.
          </CardTexto>
        </VStack>
      </Box>
    </>
  );
}
export default withAuth(EducacaoInfantilC);