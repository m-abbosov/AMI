import {extendTheme} from '@chakra-ui/react'
import { checkboxTheme } from './CheckBoxTheme'
const theme = extendTheme({
  colors: {
    custom: {
      gray: '#EFF2F3',
      darkGray: 'rgba(37, 39, 40, 0.2)',
      black: '#252728',
      blue: '#2C7BC4',
      yellow: '#FFCF52',  
      grayIcon: 'rgba(0,0,0,0.2)',
      green: '#4BB155'
    },
  },
  fonts: {
    heading: `'Ristretto Pro', 'sans-serif'`,
    body: `'Ristretto Pro', 'sans-serif'`,
  },
  components: {
    Checkbox: checkboxTheme
  }
})

export default theme