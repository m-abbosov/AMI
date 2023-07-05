import React from 'react'
import { Box} from '@chakra-ui/react'
import SignUpForm from './components/SignUpForm'
import SwitchLink from './components/SwitchLink'
import MainSectionLayout from '@modules/common/MainSectionLayout'

const SignUp = () => {
  return (
    <MainSectionLayout title='Регистрация' pb='60px'>
      <Box mt={['10px', '50px']} px={['20px', '0']}>
        <SignUpForm />
      </Box>
      <Box textAlign='center' mt='30px' w='full'>
        <SwitchLink
          label={'Я уже зарегистрирован.'}
          linkLabel='Вход'
          path='/signin'
        />
      </Box>
    </MainSectionLayout>
  )
}

export default SignUp