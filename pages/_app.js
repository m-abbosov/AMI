import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '../src/themes'
import Layout from '../src/modules/common/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Component {...pageProps} />
      </>
    </ChakraProvider>
  )
}

export default MyApp
