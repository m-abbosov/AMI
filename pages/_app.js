import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '../src/themes'
import Layout from '@modules/common/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
