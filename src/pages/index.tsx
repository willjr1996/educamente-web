import {
  Box,
  Flex,
  Text,
  Stack,
  Card,
  Heading,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button
} from "@chakra-ui/react";
// import { Header } from '~components/Header'
import Link from 'next/link'
import Footer from "~components/Footer";
import HeaderPrincipal from "~components/HeaderPrincipal";



export default function App() {

  return (
    <>
      <HeaderPrincipal />
      <Box bg="#adf6db" height="100vh" >
        <Stack spacing={14} align="center" justify="center" height="100vh">
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            cursor="pointer"
          >

            <Link href="/cuidados/comportamento">
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src="/images/duvidas.png" />
            </Link>

            <Stack>
              <CardBody bg="transparent">

                <Text py='2' >
                Acesse informações e sugestões confiáveis de cuidados para seus
                filhos de acordo com a idade
                </Text>
              </CardBody>


            </Stack>
          </Card>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'

          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src="/images/confiante.png" />

            <Stack>
              <CardBody bg="transparent">

                <Text py='2'>
                Entre em nossa comunidade de pais e nos ajude compartilhando suas
                experiências com seus filhos
                </Text>
              </CardBody>


            </Stack>
          </Card>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'

          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src="/images/heal.png"
            />

            <Stack>
              <CardBody bg="transparent">
                <Heading size='md' fontWeight="bold">Dúvidas?</Heading>

                <Text py='2'>
                Entre em contato com nossa
                equipe de suporte para ajudar com suas dúvidas.
                </Text>
              </CardBody>


            </Stack>
          </Card>

        </Stack>
      </Box>
    </>
  )
}
