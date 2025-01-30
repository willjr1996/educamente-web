import { Box, Text, VStack, Image } from '@chakra-ui/react'
import { Menu } from '~components/Menu'
import Link from 'next/link'
import CardTexto from "~components/CardCuidados";
import { Header } from '~components/Header';
import { BtnVoltar } from '~components/ReturnBtn';

export default function EducacaoInfantilS() {
  return (
    <>
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
        overflow="hidden"
      >

        <BtnVoltar
        top='3%'
        />

        <Box position="absolute" top="20px" right="20px">
          <Image
            src="/images/duvida.png/"
            w="200px"
            h="200px"
            borderRadius="50%"
          />
        </Box>

        <Box position="absolute" bottom="20px" left="20px">
          <Image
            src="/images/obrigado.png/"
            w="200px"
            h="200px"
            borderRadius="50%"
          />
        </Box>

        <VStack spacing={6} mt={8}>
          <CardTexto>
            <Text>
              A saúde mental infantil é essencial para o bem-estar das crianças,
              e promover um ambiente seguro e acolhedor ajuda a prevenir
              transtornos emocionais.
            </Text>
          </CardTexto>

          <CardTexto>
            <Text>
              Conversar abertamente sobre sentimentos e emoções é fundamental
              para o desenvolvimento emocional, permitindo que as crianças
              aprendam a lidar com desafios psicológicos.
            </Text>
          </CardTexto>

          <CardTexto>
            <Text >
              Atividades que incentivem a criatividade e o jogo livre auxiliam
              no equilíbrio emocional, promovendo a autoestima e a resiliência
              desde os primeiros anos.
            </Text>
          </CardTexto>
        </VStack>
      </Box>
    </>
  )
}
