import { Box, Text, VStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { Menu } from '~components/Menu'

export default function EducacaoInfantil() {
  return (
    <>
      <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={'88px'}
          margin="10px"
        />
      </Link>
      <Menu />
      <Box
        bg="#b3f0db"
        w="100vw"
        h="100vh"
        display="flex"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box position="absolute" top="20px" left="20px">
          <Image
            src="/images/duvida.png/"
            w="132px"
            h="132px"
            borderRadius="50%"
          />
        </Box>

        <Box position="absolute" bottom="20px" right="20px">
          <Image
            src="/images/pulaPula.png/"
            w="170px"
            h="161px"
            borderRadius="50%"
          />
        </Box>

        <VStack spacing={6}>
          <Box
            bg="#006633"
            borderRadius="10px"
            w="350px"
            p={4}
            boxShadow="lg"
            color="white"
          >
            <Text fontSize="md">
              A alimentação saudável para crianças é fundamental para o
              desenvolvimento físico e mental, garantindo energia e nutrientes
              essenciais para o crescimento.
            </Text>
          </Box>

          <Box
            bg="#006633"
            borderRadius="10px"
            w="350px"
            p={4}
            boxShadow="lg"
            color="white"
          >
            <Text fontSize="md">
              Oferecer alimentos naturais e equilibrados, como frutas, vegetais
              e proteínas, ajuda a fortalecer o sistema imunológico e promove a
              saúde.
            </Text>
          </Box>

          <Box
            bg="#006633"
            borderRadius="10px"
            w="350px"
            p={4}
            boxShadow="lg"
            color="white"
          >
            <Text fontSize="md">
              Uma alimentação saudável ensina hábitos positivos, prevenindo
              doenças e melhorando a concentração, essencial para o desempenho
              escolar e o bem-estar geral.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  )
}
