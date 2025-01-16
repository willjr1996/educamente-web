import { Stack, HStack, Link, Text ,Divider, Image, IconButton, LinkProps, Box } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return(
        <Box bg="white">
        <Stack
        maxW="5xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="center"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
      >
        {/* <Link href="https://templateskart.com" isExternal>
          <Image w="100px" src="/assets/images/layouts/hero_image.png" alt="TemplatesKart" />
        </Link>
   */}
        <HStack spacing={4} alignItems="center">
        <Text color="#146B49" fontWeight="bold">FOOTER</Text>
        </HStack>
  
      </Stack>
      </Box>
    );
  }