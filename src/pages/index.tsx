import {
  Box,
  Flex,
  Text,
  Stack,
  Card, 
  Heading,
  CardHeader, 
  CardBody, 
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
    <Stack spacing={4} align="center" justify="center" height="100vh">
        {/* Quadrado Preto 1 */}
        <Box
          w="100px"
          h="100px"
          bg="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white">Quadrado 1</Text>
        </Box>

        {/* Quadrado Preto 2 */}
        <Box
          w="100px"
          h="100px"
          bg="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white">Quadrado 2</Text>
        </Box>

        {/* Quadrado Preto 3 */}
        <Box
          w="100px"
          h="100px"
          bg="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white">Quadrado 3</Text>
        </Box>

        {/* Quadrado Preto 4 */}
        <Box
          w="100px"
          h="100px"
          bg="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white">Quadrado 4</Text>
        </Box>
      </Stack>
      </Box>
      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  {/* <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  /> */}

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </>
  )
}
