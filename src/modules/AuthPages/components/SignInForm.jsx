import { Box, Icon, Stack } from '@chakra-ui/react'
import Btn from '@modules/common/Btn'
import FormField from '@modules/common/Form/FormField'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'

const formFields = [
  {label: "E-mail", type: 'email', placeholder: "Введите ваш e-mail", icon: MdAlternateEmail},
  {label: "Пароль", type: 'password', placeholder: "Введите ваш пароль", icon: FiKey},
]

const SignInForm = () => {
  return (
    <Box p='40px 50px' bg='white' maxWidth='420px' margin='0 auto'>
      <form>
        <Stack direction='column' gap='30px'>
          {formFields.map((field, i) => (
            <FormField w='100%' key={i} {...field} />
          ))}
          <Btn type='submit'>
            <span>Войти</span>
            <Icon as={BsArrowUpRight} color='custom.grayIcon' fontSize='20px' />
          </Btn>
        </Stack>
      </form>
    </Box>
  )
}

export default SignInForm