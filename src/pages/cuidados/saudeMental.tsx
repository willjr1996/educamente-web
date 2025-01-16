import {
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
                <Image src="/images/duvida.png/" w="132px" h="132px" borderRadius="50%" />
            </Box>

            <Box position="absolute" bottom="20px" right="20px">
                <Image src="/images/pulaPula.png/" w="170px" h="161px" borderRadius="50%" />
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
                        A saúde mental infantil é essencial para o bem-estar
                        das crianças, e promover um ambiente seguro e acolhedor
                        ajuda a prevenir transtornos emocionais.
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
                        Conversar abertamente sobre sentimentos e emoções
                        é fundamental para o desenvolvimento emocional,
                        permitindo que as crianças aprendam a lidar com desafios
                        psicológicos.
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
                        Atividades que incentivem a criatividade e o jogo livre
                        auxiliam no equilíbrio emocional, promovendo a autoestima
                        e a resiliência desde os primeiros anos.
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}