import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import PageHead from '@modules/common/PageHead'
import SwitchLink from './components/SwitchLink'
import SignInForm from './components/SignInForm'

const SignIn = () => {
  return (
    <Box pt={['20px', '70px']}>
      <PageHead>Вход</PageHead>
      <Box mt={['10px', '50px']} px={['20px', '0']}>
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
