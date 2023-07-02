import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import SignUpForm from './components/SignUpForm'

const SignUp = () => {
  return (
    <Box textAlign='center' pt='70px'>
      <Text
        fontSize='50px'
        color='custom.black'
        fontWeight='400'
        textTransform={'uppercase'}
      >
        Регистрация
      </Text>
      <SignUpForm/>
    </Box>
  )
}

export default SignUp