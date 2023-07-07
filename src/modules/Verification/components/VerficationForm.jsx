import { Box, Flex, Input, Select, Stack } from '@chakra-ui/react'
import Btn from '@modules/common/Btn'
import FormField from '@modules/common/Form/FormField'
import FormSelectField from '@modules/common/Form/FormSelectField'
import React from 'react'

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
    <Box p={['20px 20px', '40px 50px']} w='full' bg='white'>
      <form>
        <Flex
          flexWrap='wrap'
          gap={['15px', '30px']}
          justifyContent='space-between'
          alignItems='flex-start'
          direction={['column', 'row']}
        >
          {formFields.map((field, i) => {
            const w = field.size === 'lg' ? '48%' : '30%'
            return field.type !== 'select' ? (
              <FormField key={i} {...field} w={['100%', w]} />
            ) : (
              <FormSelectField
                key={i}
                {...field}
                  w={[`100%`, `${field.size === 'lg' ? '45%' : '30%'}`]}
              />
            )
          })}
          
          <Input w={['100%', '30%']} type='file' placeholder='file 2' p='30px' />
          <Input w={['100%', '30%']} type='file' placeholder='file 2' p='30px' />
          <Stack direction='column'>
            <Btn>Отправить</Btn>
            <p> Заявка будет рассмотрена в течение 72 часов.</p>
          </Stack>
        </Flex>
      </form>
    </Box>
  )
}

export default VerficationForm
