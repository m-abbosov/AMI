import {
  FormControl,
  AbsoluteCenter,
  Icon,
  FormLabel,
  Input,
  Box,
} from '@chakra-ui/react'
import FileClipIcon from '@icons/FileClipIcon'
import { v4 } from 'uuid'
import FormFieldLabel from './FormFieldLabel'

const FormFileField = ({ label, ...styles }) => {
  const id = v4()
  return (
    <Box position='relative' {...styles}>
      <FormFieldLabel>{label || ''}</FormFieldLabel>
      <FormControl height='130px' border='1px solid #E9E9E9'>
        <FormFieldLabel height='100%' htmlFor={`input-${id}`}></FormFieldLabel>
        <AbsoluteCenter>
          <Icon as={FileClipIcon} position='absolute' border='1px solid #ccc' />
        </AbsoluteCenter>
        <Input height='100%' id={`input-${id}`} type='file' />
      </FormControl>
    </Box>
  )
}

export default FormFileField
