import React from 'react'
import {
  FormLabel,
} from '@chakra-ui/react'

const FormFieldLabel = ({children, ...styles}) => {
  return (
    <FormLabel
      fontSize='13px'
      color='rgba(37, 39, 40, 0.4)'
      fontWeight='400'
      lineHeight='24px'
      {...styles}
    >
      {children}
    </FormLabel>
  )
}

export default FormFieldLabel