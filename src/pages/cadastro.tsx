import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Image,
  FormLabel,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '~components/Input'
import InputMask from 'react-input-mask'
import { Title } from '~components/Title'
import Modal from '~components/Modal'
import { ArrowBackIcon, CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import axios from 'axios'
import { notifyError, notifySuccess } from '~utils/utils';
import Router from 'next/router';
import Head from 'next/head'

export default function Cadastro() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [foneCelular, setFoneCelular] = useState('');

  const handleOpen = () => {
    if (password !== confirmPassword) {
      notifyError('As senhas não coincidem!');
      return;
    }
    onOpen();
  };

  function salvar() {
    let usuarioRequest = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      email: username,
      password: password
    }
    axios
      .post("http://localhost:8080/api/usuario", usuarioRequest)
      .then((response) => {
        notifySuccess("Usuário cadastrado com sucesso.");
        onClose();
        Router.push('/login');
      })
      .catch((error) => {
        console.log("Erro completo:", error);

        if (error.response) {
          console.log("Resposta do servidor:", error.response);

          if (error.response.data?.errors) {
            error.response.data.errors.forEach((err: { defaultMessage: any }) => notifyError(err.defaultMessage));
            onClose();
          } else {
            notifyError(error.response.data?.message || "Erro desconhecido no servidor.");
            onClose();
          }
        } else if (error.request) {
          notifyError("Erro na comunicação com o servidor. Verifique sua conexão.");
          onClose();
        } else {
          notifyError("Ocorreu um erro inesperado.");
          onClose();
        }
      });

  }

  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet" />
      </Head>
    <Box h="100vh" overflow="hidden" backgroundColor="#adf6db">
      <Flex flexDir="row" justify="space-between" align="center">
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={'88px'}
          margin="10px"
          position="absolute"
        />
        <Text
          fontSize="60"
          color="#146B49"
          w="100%"
          align="center"
          margin="auto"
          fontFamily="Delius"
        >
          CADASTRO
        </Text>
      </Flex>
      <Title name="Cadastro" />
      <Flex flexDir="row" align="center" justify="center" m="auto" fontFamily="Delius">
        <Flex
          as="form"
          w="100%"
          maxWidth={760}
          bg="white"
          p="8"
          borderRadius={8}
          flexDir="column"
          
        >
          <Stack spacing="2">
            <Input
              id="nome"
              name="nome"
              label="Nome: "
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
              borderColor="green"
              borderWidth="3px"
              bg="rgb(255, 255, 255)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />

            <FormLabel htmlFor="email">E-mail: </FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Escreva seu email aqui"
              borderColor="black"
              borderWidth="1px"
              bg="rgba(5, 166, 89, 0.7)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />

            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            >
              {(inputProps: any) => (
                <Input
                  name="cpf"
                  type="text"
                  label="CPF: "
                  placeholder="000.000.000-00"
                  {...inputProps}
                  borderColor="black"
                  borderWidth="1px"
                  bg="rgba(5, 166, 89, 0.7)"
                  focusBorderColor="rgba(5, 166, 89, 0.7)"
                />
              )}
            </InputMask>

            <Flex flexDir="row" alignItems="center" gap={4}>
              <InputMask
                mask="99/99/9999"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              >
                {(inputProps: any) => (
                  <Input
                    name="nascimento"
                    type="text"
                    label="Data de Nascimento: "
                    placeholder="Dia/Mês/Ano"
                    {...inputProps}
                    borderColor="black"
                    borderWidth="1px"
                    bg="rgba(5, 166, 89, 0.7)"
                    focusBorderColor="rgba(5, 166, 89, 0.7)"
                  />
                )}
              </InputMask>

              <InputMask
                mask="(99) 99999-9999"
                value={foneCelular}
                onChange={(e) => setFoneCelular(e.target.value)}
              >
                {(inputProps: any) => (
                  <Input
                    name="telefone"
                    type="text"
                    label="Telefone: "
                    placeholder="(00) 00000-0000"
                    {...inputProps}
                    borderColor="black"
                    borderWidth="1px"
                    bg="rgba(5, 166, 89, 0.7)"
                    focusBorderColor="rgba(5, 166, 89, 0.7)"
                  />
                )}
              </InputMask>
            </Flex>

            <FormLabel htmlFor="senha">Senha: </FormLabel>
            <Input
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderColor="black"
              borderWidth="1px"
              bg="rgba(5, 166, 89, 0.7)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />

            <FormLabel htmlFor="confirmaSenha">Confirme a Senha</FormLabel>
            <Input
              id="confirmaSenha"
              name="confirmaSenha"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              borderColor="black"
              borderWidth="1px"
              bg="rgba(5, 166, 89, 0.7)"
              focusBorderColor="rgba(5, 166, 89, 0.7)"
            />
          </Stack>

          <Flex justify="space-between" w="100%" mt="6" align="center" >

            <Link href="/login" passHref>
              <Button
                w={140}
                colorScheme="red"
                size="lg"
                leftIcon={<ArrowBackIcon />}
              >
                Voltar
              </Button>
            </Link>

            <Button w={140} onClick={handleOpen} leftIcon={<CheckIcon />} colorScheme="green" size="lg"
              disabled={!nome || !username || !password || !confirmPassword || !cpf || !dataNascimento || !foneCelular}
            >
              Concluir
            </Button>

            <Modal
              isOpen={isOpen}
              onClose={onClose}
              message="Tem certeza que deseja finalizar o cadastro agora?"
              title="CONFIRMAÇÃO"
              onClick={salvar}
            />

          </Flex>
        </Flex>
      </Flex>
    </Box>
    </>
  );
}