import { ChakraProvider } from '@chakra-ui/react'
import 'react-color-picker/index.css'

import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function Main({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ToastContainer />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}
