import { ChakraProvider } from '@chakra-ui/react'
import 'react-color-picker/index.css'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../contexts/AuthContext";


export default function Main({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ToastContainer />
      <AuthProvider>
        <Component {...pageProps} />
        </AuthProvider>
    </ChakraProvider>
  )
}
