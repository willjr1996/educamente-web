import { Stack, HStack, Text, Box, Divider } from '@chakra-ui/react';
import Head from 'next/head';

export default function Footer() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
      <Divider color="grey.500" />
      <Box bg="white" color="#146B49" py={{ base: 2, md: 3 }}>
        <Stack
          maxW="100%"
          marginInline="auto"
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
          p={2}
          spacing={4}
          justifyContent="center"
        >
          <HStack textAlign="center" justify="center" align="center">
            <Text 
              fontWeight="bold" 
              fontSize={{ base: "sm", md: "md" }} 
              textAlign="center" 
              fontFamily="Delius"
            >
              Educamente © 2025
              <br />
              Desenvolvido por: Alex William, Matheus Roberto e Wilson Barbosa
            </Text>
          </HStack>
        </Stack>
      </Box>
    </>
  );
}