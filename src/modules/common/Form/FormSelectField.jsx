import { Box, FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
import FormFieldLabel from './FormFieldLabel'

const FormSelectField = ({placeholder, size, options, label, ...rest}) => {
  return (
    <FormControl {...rest}>
      <FormFieldLabel >
        {label || ''}
      </FormFieldLabel>
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