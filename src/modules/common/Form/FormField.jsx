import { FormControl, FormLabel, Icon, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import InputField from './InputField'
import FormFieldLabel from './FormFieldLabel'

const FormField = ({type, placeholder, label,  icon:PassedIcon, ...rest}) => {
  return (
    <FormControl {...rest}>
      <FormFieldLabel>
        {label}
      </FormFieldLabel>
      <InputGroup>
        {PassedIcon && (
          <InputRightElement
            justifyContent={'center'}
            alignItems={'center'}
            pointerEvents={'none'}
            height='full'
          >
            {<Icon as={PassedIcon} color='custom.grayIcon' />}
          </InputRightElement>
        )}
        <InputField type={type} placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  )
}

export default FormField