import { Box, Text } from '@chakra-ui/react'
import MainSectionLayout from '@modules/common/MainSectionLayout'
import React from 'react'
import VerficationForm, {VerfificationForm} from './components/VerficationForm'

const Verficiation = () => {
  return (
    <MainSectionLayout justifyContent={'flex-start'} title='Верификация' pb='70px'>
      <Text fontFamily={`'Manrope', 'serif'`} fontSize='13px' maxW='760px'>
        ВНИМАНИЕ! Все поля обязательны к заполнению так, как написаны в
        документе с учетом знаков препинания и сокращений. При отсутствии
        каких-либо данных в соответствующем поле ставьте прочерк (знак минус)
      </Text>
      <Box mt='30px'>
        <VerficationForm/>
      </Box>
    </MainSectionLayout>
  )
}

export default Verficiation