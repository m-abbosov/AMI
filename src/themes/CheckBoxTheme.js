import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  label: {
    fontFamily: 'Manrope', 
  },
  control: {
    // bg: "green",
    borderRadius: 0, 
  },
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })