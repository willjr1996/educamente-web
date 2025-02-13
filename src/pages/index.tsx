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
import { withAuth } from "../contexts/withAuth";
import Head from 'next/head'

function App() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
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
        fontFamily="Delius"
      >
        <Stack spacing={8} align="center" justify="center" px={{ base: 4, md: 0 }} width="100%" maxW="100%">
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
            <Link href="/cuidados/comportamento">
              <Image
                objectFit="cover"
                maxW="100%"
                height={{ base: "150px", sm: "200px" }}
                width="100%"
                cursor="pointer"
                src="/images/duvidas.png"
              />
            </Link>

            <Stack mt="4">
              <CardBody>
                <Heading size="md" fontWeight="bold" textAlign="left" fontSize={{ base: "lg", sm: "md" }} fontFamily="Delius" mt="0">
                  SUGESTÕES
                </Heading>
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
            bg="transparent"
            width={{ base: "90%", sm: "600px", md: "600px" }}
            height="auto"
            maxW="100%"
          >

            <Link href="/comunidade">
              <Image
                objectFit="cover"
                maxW="100%"
                height={{ base: "150px", sm: "200px" }}
                width="100%"
                cursor="pointer"
                src="/images/confiante.png"
              />
            </Link>

            <Stack mt="5">

              <CardBody bg="transparent">
                <Heading size="md" fontWeight="bold" textAlign="left" fontSize={{ base: "lg", sm: "md" }} fontFamily="Delius">
                  COMUNIDADE
                </Heading>
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
            <Link href="" passHref>
              <Image
                objectFit="cover"
                maxW="100%"
                height={{ base: "150px", sm: "200px" }}
                width="100%"
                cursor="pointer"
                src="/images/heal.png"
              />
            </Link>

            <Stack mt="5">

              <CardBody bg="transparent">
                <Heading size="md" fontWeight="bold" textAlign="left" fontSize={{ base: "lg", sm: "md" }} fontFamily="Delius">
                  DÚVIDAS?
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
export default withAuth(App);