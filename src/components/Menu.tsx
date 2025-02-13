import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export function Menu() {
  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
    <Box bg="#b3f0db" w="100%">
      <Heading as="h2" size="md" textAlign="center" mb={4} fontFamily="Delius">
        TIPOS DE CUIDADOS
      </Heading>
      <Flex justifyContent="center" gap={4}>
        <Link href="/cuidados/comportamento" passHref>
          <Button
            bg="green.300"
            color="black"
            _hover={{ bg: 'green.400' }}
            borderRadius="lg"
            px={6}
            fontFamily="Delius"
          >
            COMPORTAMENTO
          </Button>
        </Link>
        <Link href="/cuidados/alimentacao" passHref>
          <Button
            bg="green.300"
            color="black"
            _hover={{ bg: 'green.400' }}
            borderRadius="lg"
            px={6}
            fontFamily="Delius"
          >
            ALIMENTAÇÃO
          </Button>
        </Link>

        <Link href="/cuidados/saudeMental" passHref>
          <Button
            bg="green.300"
            color="black"
            _hover={{ bg: 'green.400' }}
            borderRadius="lg"
            px={6}
            fontFamily="Delius"
          >
            SAÚDE MENTAL
          </Button>
        </Link>
      </Flex>
    </Box>
    </>
  );
}
