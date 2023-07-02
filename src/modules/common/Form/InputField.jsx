import { Input } from '@chakra-ui/react'
import React from 'react'

const InputField = ({type, placeholder}) => {
  return (
    <Input
      variant='filled'
      bg='custom.gray'
      p='27px 30px'
      rounded='none'
      type={type}
      placeholder={placeholder}
    />
  )
}

export default InputField