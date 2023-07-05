import React from 'react'
import { Box} from '@chakra-ui/react'
import SwitchLink from './components/SwitchLink'
import SignInForm from './components/SignInForm'
import MainSectionLayout from '@modules/common/MainSectionLayout'

const SignIn = () => {
  return (
    <MainSectionLayout title='Вход'>
      <Box mt={['10px', '50px']} px={['20px', '0']}>
        <SignInForm />
      </Box>
      <Box textAlign='center' mt='30px' w='full'>
        <SwitchLink label={''} linkLabel='Регистрация' path='/signup' />
      </Box>
    </MainSectionLayout>
  )
}

export default SignIn
