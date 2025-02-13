import {
    Box,
    Heading,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
    Text,
  } from "@chakra-ui/react";
  import { withAuth } from "../contexts/withAuth";
import Head from "next/head";
import { Header } from "~components/Header";

 function FAQ() {
    const faqs = [
      {
        question: "Como faço para me cadastrar?",
        answer:
          "Você pode se cadastrar clicando no botão 'Não tem cadastro? Faça agora!' no canto inferior esquerdo da página de login.",
      },
      {
        question: "Quais são os métodos de pagamento aceitos?",
        answer: "Aceitamos cartões de crédito, débito e PIX.",
      },
      {
        question: "Quanto tempo leva para a entrega?",
        answer: "O prazo de entrega depende da sua localização, mas geralmente varia entre 3 a 7 dias úteis.",
      },
      {
        question: "Como recuperar minha senha?",
        answer: "Você pode recuperar sua senha clicando no botão 'Esqueceu a senha?' no canto inferior direito da página de login.",
      },
    ];
  
    return (
      <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Box p={8} maxW="800px" mx="auto">
        <Heading as="h1" size="xl" textAlign="center" mb={6} color="teal.500" fontFamily="Delius">
          Perguntas Frequentes
        </Heading>
        <Text textAlign="center" mb={8} color="gray.600" fontFamily="Delius">
          Aqui você encontra respostas para as dúvidas mais comuns. Caso precise
          de mais ajuda, entre em contato com nosso suporte.
        </Text>
        {/* Campo de Busca
        <Input
          placeholder="Busque uma pergunta..."
          size="lg"
          mb={8}
          borderColor="teal.400"
          focusBorderColor="teal.600"
        /> */}
        {/* Acordeão com perguntas e respostas */}
        <Accordion allowToggle fontFamily="Delius">
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      </>
    );
  }
  export default withAuth(FAQ);