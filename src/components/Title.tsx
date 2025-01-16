import Head from 'next/head'

interface TitleProps {
  name?: string
}

export function Title({ name }: TitleProps) {
  return (
    <Head>
      <title>{name ? `${name} - EducaMente` : 'EducaMente'}</title>
    </Head>
  )
}

import 
{ Flex, 
  Text, 
  Button
 } from '@chakra-ui/react'
import { Logo } from './Logo'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  const links = [
    { href: '/', label: 'Início' },
    { href: '/', label: 'Produtos' },
    { href: '/', label: 'Clientes' },
    { href: '/', label: 'Pedidos' }
  ]

  return (
    <Flex align={'center'} justify={'space-between'} p={"1rem 3rem"}>
      <Logo size={250} link='/' />
      <Flex gap={5} alignItems={"center"}>
      {links.map((link, index) => (
          <Text key={index} as={"a"} href={link.href} fontWeight={router.pathname === link.href ? 'bold' : 'normal'}>
            {link.label}
          </Text>
        ))}
        <Button
        />
      </Flex>
    </Flex>
  )
}
