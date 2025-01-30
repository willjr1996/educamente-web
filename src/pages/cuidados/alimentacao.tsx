import { Box, VStack, Image } from "@chakra-ui/react";
import { Menu } from "~components/Menu";
import Link from "next/link";
import CardTexto from "~components/CardCuidados";
import { Header } from "~components/Header";
import { BtnVoltar } from "~components/ReturnBtn";

export default function EducacaoInfantilA() {
  return (
    <>
      <Header/>
      <Menu />

      <Box
        bg="#b3f0db"
        w="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >

        <BtnVoltar
         top='3%'
        />


        <Box
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
        >
          <Image src="/images/alimentacao.png" 
          w="631px" 
          h="224px" />
        </Box>

        <VStack spacing={4} mt={8}>
          <CardTexto>
            A alimentação saudável para crianças é fundamental para o
            desenvolvimento físico e mental, garantindo energia e nutrientes
            essenciais para o crescimento.
          </CardTexto>

          <CardTexto>
            Oferecer alimentos naturais e equilibrados, como frutas, vegetais
            e proteínas, ajuda a fortalecer o sistema imunológico e promove a
            saúde.
          </CardTexto>

          <CardTexto>
            Uma alimentação saudável ensina hábitos positivos, prevenindo
            doenças e melhorando a concentração, essencial para o desempenho
            escolar e o bem-estar geral.
          </CardTexto>
        </VStack>
      </Box>
    </>
  )
}