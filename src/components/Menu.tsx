import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export function Menu() {
    return (
        <Box bg="mintcream" p={4} borderRadius="md">
            <Heading as="h2" size="md" textAlign="center" mb={4}>
                TIPOS DE CUIDADOS
            </Heading>
            <Flex justifyContent="center" gap={4}>
                <Link href="/cuidados/comportamento" passHref>
                    <Button
                        bg="green.300"
                        color="black"
                        _hover={{ bg: "green.400" }}
                        borderRadius="lg"
                        px={6}
                    >
                COMPORTAMENTO
            </Button>
            </Link>
            <Link href="/cuidados/alimentacao" passHref>
            <Button
                bg="green.300"
                color="black"
                _hover={{ bg: "green.400" }}
                borderRadius="lg"
                px={6}
            >
                ALIMENTAÇÃO
            </Button>
            </Link>

            <Link href="/cuidados/saudeMental" passHref>
            <Button
                bg="green.300"
                color="black"
                _hover={{ bg: "green.400" }}
                borderRadius="lg"
                px={6}
            >
                SAÚDE MENTAL
            </Button>
            </Link>
        </Flex>
    </Box >
  );
}
