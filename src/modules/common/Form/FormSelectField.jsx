import { Box, FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

const FormSelectField = ({placeholder, size, options, label, ...rest}) => {
  return (
    <FormControl {...rest}>
      <FormLabel
        fontSize='13px'
        color='rgba(37, 39, 40, 0.4)'
        fontWeight='400'
        lineHeight='24px'
      >
        {label || ''}
      </FormLabel>
      <Select
        placeholder={placeholder}
        variant='filled'
        bg='custom.gray'
        height='78px'
        rounded='none'
      >
        {options.map((option, j) => (
          <option key={j}>{option}</option>
        ))}
      </Select>
    </FormControl>
  )
}

export default FormSelectField