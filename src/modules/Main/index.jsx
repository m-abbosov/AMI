import { Box, Divider, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import DollarIcon from '@icons/DollarIcon'
import MoneySendIcon from '@icons/MoneySendIcon'
import ReceiptIcon from '@icons/ReceiptIcon'
import MainSectionLayout from '@modules/common/MainSectionLayout'
import React from 'react'
import DataBox from './components/DataBox'
import ChartIcon from '@icons/ChartIcon'
import AndroidIcon from '@icons/AndroidIcon'
import BoxTitle from './components/BoxTitle'
import WalletIcon from '@icons/WalletIcon'

const fundData = [
  {
    label: 'Вложено',
    value: '100 000,00 USDT',
    icon: ReceiptIcon,
    color: 'black',
  },
  {
    label: 'Общая прибыль:',
    value: '10 000,00 USDT (+10%)',
    icon: DollarIcon,
    color: 'green',
  },
  {
    label: 'Доступно для вывода:',
    value: '72 690,00 USDТ',
    icon: MoneySendIcon,
    color: 'black',
  },
]
const tradeBotData = [
  {
    label: 'Активных торговых ботов:',
    value: '12',
    icon: AndroidIcon,
    color: 'black',
  },
  {
    label: 'Общий доход ботов',
    value: '5 821,50 USDТ',
    icon: DollarIcon,
    color: 'green',
  },
  {
    label: 'Лучшая сделка за день',
    value: '975,20 USDТ (18%)',
    icon: ChartIcon,
    color: 'green',
  },
]

const Main = () => {
  return (
    <MainSectionLayout title='Главная' justifyContent={'flex-start'}>
      <Stack pt='40px' direction='column' spacing={'30px'}>
        <Flex gap='30px'>
          <Box flex='1'>
            <DataBox title='Фонд' data={fundData} />
          </Box>
          <Box bg='white' flex='1' height='300px'>
            <DataBox title='Торговый бот' data={tradeBotData} />
          </Box>
        </Flex>
        <Flex gap='30px'>
          <Box p='32px 40px' bg='white'>
            <BoxTitle>Баланс USDT</BoxTitle>
            <Stack direction='column' pt='16px'>
              <Stack direction='row'>
                <Icon size='24px' as={WalletIcon} />
                <Text>100 000,00 SDT</Text>
              </Stack>
              <Stack direction='row'>
                <Text fontFamily={'Manrope'} as='span' fontSize='12px'>
                  Доступно к выводу:
                </Text>
                <Text
                  as='span'
                  fontFamily={'Manrope'}
                  fontSize='12px'
                  color='custom.green'
                >
                  1000 USDT
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </MainSectionLayout>
  )
}

export default Main
/**
color: #252728;
font-family: Manrope;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 24px;
 */