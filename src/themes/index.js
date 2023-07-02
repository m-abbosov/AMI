import {extendTheme} from '@chakra-ui/react'
const theme = extendTheme({
  colors: {
    gray: '#EFF2F3',
    darkGray: 'rgba(37, 39, 40, 0.2)',
    black: '#252728',
    yellow: '#FFCF52'
  },
  fonts: {
    heading: `'Ristretto Pro', 'sans-serif'`,
    body: `'Ristretto Pro', 'sans-serif'`,
  }
})

export default theme