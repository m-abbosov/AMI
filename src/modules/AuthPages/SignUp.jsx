import React from 'react'
import { Box} from '@chakra-ui/react'
import SignUpForm from './components/SignUpForm'
import PageHead from '@modules/common/PageHead'
import SwitchLink from './components/SwitchLink'

const SignUp = () => {
  return (
    <Box pt='70px'>
      <PageHead>Регистрация</PageHead>
      <Box mt='50px'>
        <SignUpForm />
      </Box>
      <Box textAlign='center' mt='30px' w='full'>
        <SwitchLink
          label={'Я уже зарегистрирован.'}
          linkLabel='Вход'
          path='/signin'
        />
      </Box>
    </Box>
  )
}

export default SignUp