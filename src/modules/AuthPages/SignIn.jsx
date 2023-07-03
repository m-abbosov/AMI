import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import PageHead from '@modules/common/PageHead'
import SwitchLink from './components/SwitchLink'
import SignInForm from './components/SignInForm'

const SignIn = () => {
  return (
    <Box pt='70px'>
      <PageHead>Вход</PageHead>
      <Box mt='50px'>
        <SignInForm/>
      </Box>
      <Box textAlign='center' mt='30px' w='full'>
        <SwitchLink
          label={''}
          linkLabel='Регистрация'
          path='/signup'
        />
      </Box>
    </Box>
  )
}

export default SignIn
