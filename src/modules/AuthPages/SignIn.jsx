import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import PageHead from '@modules/common/PageHead'
import SwitchLink from './components/SwitchLink'
import SignInForm from './components/SignInForm'
import MainSectionLayout from '@modules/common/MainSectionLayout'

const SignIn = () => {
  return (
    <MainSectionLayout title='Вход'>
      <Box mt='50px'>
        <SignInForm />
      </Box>
      <Box textAlign='center' mt='30px' w='full'>
        <SwitchLink label={''} linkLabel='Регистрация' path='/signup' />
      </Box>
    </MainSectionLayout>
  )
}

export default SignIn
