import { Box, Checkbox, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { MdAlternateEmail } from 'react-icons/md'
import { FiPhoneCall, FiKey, FiUsers } from 'react-icons/fi'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'
import React from 'react'
import Btn from '@modules/common/Btn'
import FormField from '@modules/common/Form/FormField'

const formFields = [
  {
    label: 'E-mail',
    placeholder: 'Введите ваш e-mail',
    type: 'email',
    icon: MdAlternateEmail,
  },
  {
    label: 'Номер телефона',
    placeholder: 'Введите ваш телефон',
    type: 'phone',
    icon: FiPhoneCall,
  },
  {
    label: 'Пароль',
    placeholder: 'Введите ваш пароль',
    type: 'password',
    icon: FiKey,
  },
  {
    label: 'Повторите пароль',
    placeholder: 'Повторите ваш пароль',
    type: 'password',
    icon: FiKey,
  },
  {
    label: 'Реферал',
    placeholder: 'Введите ID пришласившего',
    type: 'number',
    icon: FiUsers,
  },
  {
    label: 'Страна',
    placeholder: 'Выберите страну',
    type: 'text',
    icon: AiFillCaretDown,
  },
]

const checkBoxes = ['Terms of use', 'Cookie policy']

const SignUpForm = () => {
  return (
    <Box p={['20px', '40px']} bg='white' maxWidth='770px' margin='0 auto'>
      <form>
        <Flex flexWrap={'wrap'} gap={['10px', '30px']} justifyContent={'center'}>
          {formFields.map((field, i) => (
            <FormField w={['100%', '45%']} key={i} {...field} />
          ))}
          <Box width={['100%', '45%']}>
            <Btn type='submit'>
              <span>Зарегистрироваться</span>
              <Icon
                as={BsArrowUpRight}
                color='custom.grayIcon'
                fontSize='20px'
              />
            </Btn>
          </Box>
          <Box width={['100%', '45%']}>
            <Stack direction='row' gap='20px' alignItems='center' height='full'>
              {checkBoxes.map((checkbox, i) => (
                <Checkbox key={i}>
                  <Text
                    fontSize='13px'
                    lineHeight={'24px'}
                    color='custom.blue'
                    as='span'
                  >
                    {checkbox}
                  </Text>
                </Checkbox>
              ))}
            </Stack>
          </Box>
        </Flex>
      </form>
    </Box>
  )
}

export default SignUpForm
