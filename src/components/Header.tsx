import {
  Box,
  Flex,
  Icon,
  Text,
  Avatar,
  Image,
  Divider
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import Link from "next/link";

export function Header() {
  return (
    <Box bg="mintcream" p={4} boxShadow="sm">
      <Flex align="center" justify="space-between">
        <Box
          w="50px"
          h="50px"
          border="2px solid lightblue"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="md"
        >
          <Link href={"/"} >
          <Image src="/images/logo.png" />
          </Link>
        </Box>

        <Flex align="center" gap={6} >
          <Flex flexDir="column" align="center" cursor="pointer">
            <Icon as={BellIcon} boxSize={6} color="green.700" />
            <Text fontSize="sm" color="green.700" ml={1}>
              Notificações
            </Text>
          </Flex>

          <Avatar size="sm" bg="green.700" color="white" />
        </Flex>
      </Flex>
      <Divider bg="grey"/>
    </Box>
  );
}
