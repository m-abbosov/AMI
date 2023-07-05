import { FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

const FormFileField = () => {
  return (
    <FormControl>
      <FormLabel
        fontSize='13px'
        color='rgba(37, 39, 40, 0.4)'
        fontWeight='400'
        lineHeight='24px'
      >
        {label}
      </FormLabel>
      
    </FormControl>
  )
}

export default FormFileField