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
import { BtnVoltar } from "~components/ReturnBtn";
import Footer from "~components/Footer";


function FAQ() {
  const faqs = [
    {
      question: "Como faço para me cadastrar?",
      answer:
        "Você pode se cadastrar clicando no botão 'Não tem cadastro? Faça agora!' no canto inferior esquerdo da página de login.",
    },
    {
      question: "Como faço para ter acesso às notificações?",
      answer: [
        "Para receber notificações, siga estes passos:",
        " 1: Acesse o site e faça login na sua conta.",
        " 2: Clique no ícone de menu no canto superior esquerdo da tela.",
        " 3: Aceite as notificações quando solicitado.",
        "Assim, você receberá alertas sobre novos conteúdos e atualizações importantes!"
      ]
    }
    ,
    {
      question: "Como faço para entrar na comunidade?",
      answer: [
        "Para participar da comunidade, siga estas etapas:",
        "1. Faça login no site com sua conta.",
        "2. Clique na aba 'Comunidade' no menu principal.",
        "3. Veja os comentários de outros pais e compartilhe suas experiências também!",
        "A comunidade é um espaço seguro para troca de informações e apoio sobre saúde mental infantil."
      ]
    },
    {
      question: "Como faço para ver as sugestões de saúde mental infantil?",
      answer: [
        "Para acesar sugestões de bem-estar infantil:",
        "Cadastre-se no site e faça login.",
        "No menu pricipal, clique na aba 'Sugestões.'",
        "Visualize conteúdos exclusivos sobre saúde mental infantil.",
      ]
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
      <BtnVoltar top="15%"/>
      <Header />
      <Box minH="100vh" bg="#adf6db" fontFamily="Delius">
        <Box p={[4, 8]} maxW="800px" mx="auto">
          <Heading as="h1" size={["lg", "xl"]} textAlign="center" mb={[4, 6]} color="#146B49" fontFamily="Delius">
            Perguntas Frequentes
          </Heading>
          <Text textAlign="center" mb={[4, 8]} color="#146B49" fontWeight="semibold" fontSize={["sm", "md"]}>
            Aqui você encontra respostas para as dúvidas mais comuns. Caso precise
            de mais ajuda, entre em contato com nosso suporte.
          </Text>

          <Accordion allowToggle border="transparent">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} mb={[3, 4]}>
                <h2>
                  <AccordionButton
                    border="1px solid green"
                    py={[2, 4]}
                    _hover={{ bg: "green.300" }}
                  >
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize={["sm", "md"]}
                    >
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={[3, 4]}
                  border="1px solid green"
                  borderTop="none"
                  fontSize={["sm", "md"]}
                >
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((line, lineIndex) => (
                      <Text key={lineIndex} mb={[1, 2]}>
                        {line}
                      </Text>
                    ))
                  ) : (
                    <Text>{faq.answer}</Text>
                  )}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
      <Footer/>
    </>
  );
}
export default withAuth(FAQ);