import { FormControl, FormLabel, Icon, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import InputField from './InputField'

const FormField = ({type, placeholder, label,  icon:PassedIcon, ...rest}) => {
  return (
    <FormControl {...rest}>
      <FormLabel
        fontSize='13px'
        color='rgba(37, 39, 40, 0.4)'
        fontWeight='400'
        lineHeight='24px'
      >
        {label}
      </FormLabel>
      <InputGroup>
        {PassedIcon && (
          <InputRightElement
            justifyContent={'center'}
            alignItems={'center'}
            pointerEvents={'none'}
            height='full'
          >
            {<Icon as={PassedIcon} color='custom.gray' />}
          </InputRightElement>
        )}
        <InputField type={type} placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  )
}

export default FormField