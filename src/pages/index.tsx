import {
  Box,
  Text,
  Stack,
  Card,
  Heading,
  CardBody,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from 'next/link'
import Footer from "~components/Footer";
import { withAuth } from "../contexts/withAuth";
import Head from 'next/head'
import { Header } from "~components/Header";

function App() {

  const cardDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const imageSize = useBreakpointValue({ base: " 100%", md: "100%" });
  const headingSize = useBreakpointValue({ base: "lg", md: "md" });
  const textSize = useBreakpointValue({ base: "md", md: "lg" });
  const cardWidth = useBreakpointValue({ base: "90%", md: "600px" });
  const stackSpacing = useBreakpointValue({ base: 4, md: 8 });


  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
      <Header />
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
        <Stack spacing={stackSpacing} align="center" justify="center" px={{ base: 4, md: 0 }} width="100%" maxW="100%">
          {/* Card 1: Sugestões */}
          <Card
            direction={cardDirection === 'column' ? 'column' : 'row'}
            overflow="hidden"
            variant="outline"
            borderRadius="10"
            borderColor="transparent"
            bg="transparent"
            width={cardWidth}
            height="auto"
            maxW="100%"
          >
            <Link href="/cuidados/comportamento">
              <Box
                width={imageSize}
                height={imageSize}
                position="relative"
                cursor="pointer"
              >
                <Image
                  src="/images/duvidas.png"
                  alt="Sugestões"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  borderRadius="10"
                />
              </Box>
            </Link>

            <Stack mt={{ base: 4, sm: 0 }} ml={{ sm: 4 }}>
              <CardBody>
                <Heading size={headingSize} fontWeight="bold" textAlign="left" fontFamily="Delius">
                  SUGESTÕES
                </Heading>
                <Text py="1" fontSize={textSize}>
                  Acesse informações e sugestões confiáveis de cuidados para seus
                  filhos de acordo com a idade.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          {/* Card 2: Comunidade */}
          <Card
            direction={cardDirection === 'column' ? 'column' : 'row-reverse'}
            overflow="hidden"
            variant="outline"
            borderRadius="10"
            borderColor="transparent"
            bg="transparent"
            width={cardWidth}
            height="auto"
            maxW="100%"
          >
            <Link href="/comunidade/comportamento">
              <Box
                width={imageSize}
                height={imageSize}
                position="relative"
                cursor="pointer"
              >
                <Image
                  src="/images/confiante.png"
                  alt="Comunidade"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  borderRadius="10"
                />
              </Box>
            </Link>

            <Stack mt={{ base: 4, sm: 0 }} mr={{ sm: 4 }}>
              <CardBody>
                <Heading size={headingSize} fontWeight="bold" textAlign="left" fontFamily="Delius">
                  COMUNIDADE
                </Heading>
                <Text py="1" fontSize={textSize}>
                  Entre em nossa comunidade de pais e nos ajude compartilhando suas
                  experiências com seus filhos.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          {/* Card 3: Dúvidas */}
          <Card
            direction={cardDirection === 'column' ? 'column' : 'row'}
            overflow="hidden"
            variant="outline"
            borderRadius="10"
            borderColor="transparent"
            bg="transparent"
            width={cardWidth}
            height="auto"
            maxW="100%"
          >
            <Link href="/faq">
              <Box
                width={imageSize}
                height={imageSize}
                position="relative"
                cursor="pointer"
              >
                <Image
                  src="/images/heal.png"
                  alt="Dúvidas"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  borderRadius="10"
                />
              </Box>
            </Link>

            <Stack mt={{ base: 4, sm: 0 }} ml={{ sm: 4 }}>
              <CardBody>
                <Heading size={headingSize} fontWeight="bold" textAlign="left" fontFamily="Delius">
                  DÚVIDAS?
                </Heading>
                <Text py="1" fontSize={textSize}>
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