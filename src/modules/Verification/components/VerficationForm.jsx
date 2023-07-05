import { Box, Text, Flex, Icon, Input, Select, Stack } from '@chakra-ui/react'
import Btn from '@modules/common/Btn'
import FormField from '@modules/common/Form/FormField'
import FormFileField from '@modules/common/Form/FormFileField'
import FormSelectField from '@modules/common/Form/FormSelectField'
import React from 'react'
import {AiFillClockCircle} from 'react-icons/ai'

const formFields = [
  {
    label: 'Страна',
    placeholder: 'Выберите страну',
    type: 'select',
    options: ['USA', 'Russia', 'Uzbekistan'],
    size: 'lg',
  },
  {
    label: 'Тип документа',
    placeholder: 'Выберите тип документа',
    type: 'select',
    options: ['.docx', '.pdf', '.csv'],
    size: 'lg',
  },
  {
    label: 'Имя',
    placeholder: 'Введите ваше имя',
    type: 'text',
    size: 'sm',
  },
  {
    label: 'Фамилия',
    placeholder: 'Введите ваше фамилию',
    type: 'text',
    size: 'sm',
  },
  {
    label: 'Отчество',
    placeholder: 'Введите вашео отчество',
    type: 'text',
    size: 'sm',
  },
  {
    label: 'Пол',
    placeholder: 'Выберите пол',
    type: 'select',
    options: ['мужчина', 'женщина'],
    size: 'sm',
  },
  {
    label: 'Дата Рождения',
    placeholder: 'Выберите дату рождения',
    type: 'date',
    size: 'sm',
  },
  {
    label: 'Серия паспорта',
    placeholder: 'Введите серию паспорта',
    type: 'text',
    size: 'sm',
  },
  {
    label: 'Номер паспорта',
    placeholder: 'Введите номер паспорта',
    type: 'number',
    size: 'sm',
  },
  {
    label: 'Дата выдачи',
    placeholder: 'Выберите дату выдачи',
    type: 'date',
    size: 'sm',
  },
  {
    label: 'Код подразделения',
    placeholder: 'Введите код подразделения',
    type: 'number',
    size: 'sm',
  },
  {
    label: 'Кем выдан',
    placeholder: 'Укажите кем выдан паспорт',
    type: 'text',
    size: 'lg',
  },
  {
    label: 'Адрес прописки',
    placeholder: 'Укажите адрес прописки',
    type: 'text',
    size: 'lg',
  },
]

const VerficationForm = () => {
  return (
    <Box p='40px 50px' w='full' bg='white'>
      <form>
        <Flex
          flexWrap='wrap'
          gap='30px'
          justifyContent='space-between'
          alignItems='flex-start'
        >
          {formFields.map((field, i) => {
            const w = field.size === 'lg' ? '48%' : '30%'
            return field.type !== 'select' ? (
              <FormField key={i} {...field} w={w} />
            ) : (
              <FormSelectField
                key={i}
                {...field}
                w={field.size === 'lg' ? '45%' : '30%'}
              />
            )
          })}
          <FormFileField w='30%' label='Прикрепите фото вашего паспорта' />
          <FormFileField w='30%' label='Прикрепите фото с паспортом' />
          <Stack direction='column' w='30%' pt='32px'>
            <Btn>Отправить</Btn>
            <Stack direction='row' alignItems='flex-start'>
              <Icon as={AiFillClockCircle} fill='rgba(41, 45, 50, 0.2)' />
              <Text
                // bg='yellow'
                mt='-3px'
                fontSize='13px'
                as='span'
                fontFamily={'Manrope'}
                color='#252728;'
              >
                Заявка будет рассмотрена в течение 72 часов.
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </form>
    </Box>
  )
}

export default VerficationForm
