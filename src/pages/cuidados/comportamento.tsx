import 
{ 
Box, 
Text,
VStack,
Image,
} from "@chakra-ui/react";

export default function EducacaoInfantil() {
  return (
    <Box
      bg="#b3f0db"
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >

      <Box position="absolute" top="20px" left="20px">
        <Image src="/images/duvida.png/" w="132px" h="132px" borderRadius="50%"/>
      </Box>

      <Box position="absolute" bottom="20px" right="20px">
      <Image src="/images/pulaPula.png/" w="170px" h="161px" borderRadius="50%"/>
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
          <Text fontSize="md" >
            A educação infantil deve ser baseada no respeito, incentivando a
            curiosidade das crianças e promovendo um ambiente de aprendizado
            acolhedor e divertido.
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
            Estabelecer uma rotina diária de atividades lúdicas e educativas
            estimula o desenvolvimento cognitivo e emocional, preparando as
            crianças para o futuro.
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
            Incentivar o diálogo e a escuta ativa nas crianças ajuda a
            desenvolver habilidades sociais, fortalecendo a comunicação e o
            relacionamento interpessoal desde cedo.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}