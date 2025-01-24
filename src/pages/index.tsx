import {
  Box,
  Text,
  Stack,
  Card,
  Heading,
  CardBody,
  Image,
} from "@chakra-ui/react";
import Link from 'next/link'
import Footer from "~components/Footer";
import HeaderPrincipal from "~components/HeaderPrincipal";

export default function App() {

  return (
    <>
      <HeaderPrincipal />
      <Box 
        bg="#adf6db" 
        minH="100vh" 
        paddingTop={{ base: "100px", md: "10px" }}
        overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={5} align="center" justify="center" px={{ base: 4, md: 0 }} width="100%" maxW="100%">
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            borderRadius="10"
            borderColor="transparent"
            cursor="pointer"
            bg="transparent"
            width={{ base: "90%", sm: "550px", md: "600px" }}
            height="auto"
            maxW="100%"
          >
            <Link href="/cuidados/comportamento">
              <Image
                objectFit="cover"
                maxW="100%" 
                height={{ base: "150px", sm: "200px" }}  
                width="100%"  
                src="/images/duvidas.png"
              />
            </Link>

            <Stack>
              <CardBody>
                <Text py="1" fontSize={{ base: "md", sm: "lg" }}>
                  Acesse informações e sugestões confiáveis de cuidados para seus
                  filhos de acordo com a idade
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Card
            direction={{ base: 'column', sm: 'row-reverse' }}
            overflow="hidden"
            variant="outline"
            borderRadius="10"
            borderColor="transparent"
            cursor="pointer"
            bg="transparent"
            width={{ base: "90%", sm: "550px", md: "600px" }}
            height="auto"
            maxW="100%"
          >

            <Link href="/comunidade">
            <Image
              objectFit="cover"
              maxW="100%" 
              height={{ base: "150px", sm: "200px" }}  
              width="100%"  
              src="/images/confiante.png"
            />
            </Link>

            <Stack>
              <CardBody bg="transparent">
                <Text py="1" fontSize={{ base: "md", sm: "lg" }}>
                  Entre em nossa comunidade de pais e nos ajude compartilhando suas
                  experiências com seus filhos
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            borderRadius="10"
            borderColor="transparent"
            bg="transparent"
            width={{ base: "90%", sm: "550px", md: "600px" }}
            height="auto"
            maxW="100%"
          >
            <Image
              objectFit="cover"
              maxW="100%" 
              height={{ base: "150px", sm: "200px" }}  
              width="100%"  
              src="/images/heal.png"
            />

            <Stack>
              <CardBody bg="transparent">
                <Heading size="md" fontWeight="bold" textAlign="center" fontSize={{ base: "lg", sm: "md" }}>
                  Dúvidas?
                </Heading>
                <Text py="1" fontSize={{ base: "md", sm: "lg" }}>
                  Entre em contato com nossa equipe de suporte para ajudar com suas dúvidas.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}


