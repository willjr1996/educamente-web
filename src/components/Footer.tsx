import {
  Stack,
  HStack,
  Text,
  Box,
  Divider
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
    <Divider color="grey.500"/>
    <Box bg="white" color="#146B49" py={{ base: 4, md: 6 }}>
      <Stack
        maxW="100%"
        marginInline="auto"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
        p={2}
        spacing={4}
        justifyContent="center"
      >
        <HStack textAlign="center" justify="center">
          <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }} textAlign="center">
            FOOTER
          </Text>
        </HStack>
      </Stack>
    </Box>
    </>
  );
}
