import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import DollarIcon from '@icons/DollarIcon'
import MoneySendIcon from '@icons/MoneySendIcon'
import ReceiptIcon from '@icons/ReceiptIcon'
import MainSectionLayout from '@modules/common/MainSectionLayout'
import React from 'react'
import DataCard from './components/DataCard'
import ChartIcon from '@icons/ChartIcon'
import AndroidIcon from '@icons/AndroidIcon'
import WalletIcon from '@icons/WalletIcon'
import DataCardLayout from './components/DataCardLayout'
import Btn from '@modules/common/Btn'
import DataRow from './components/DataRow'
import InvestmentCard from './components/InvestmentCard'
import CardTitle from './components/CardTitle'
import { BsCircleFill } from 'react-icons/bs'

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
    <MainSectionLayout title='Главная' justifyContent={'flex-start'} pb='50px'>
      <Stack pt='40px' direction='column' spacing={'30px'}>
        <Flex gap='30px'>
          <Box flex='1'>
            <DataCard title='Фонд' data={fundData} />
          </Box>
          <Box flex='1'>
            <DataCard title='Торговый бот' data={tradeBotData} />
          </Box>
        </Flex>
        <Flex gap='30px'>
          <DataCardLayout flex='1' title='Баланс USDT'>
            <Stack direction='column' pt='16px'>
              <DataRow icon={WalletIcon} color='custom.black'>
                100 000,00 SDT
              </DataRow>
              <Stack direction='row'>
                <Text fontFamily={'Manrope'} as='span' fontSize='12px'>
                  Доступно к выводу:
                </Text>
                <Text
                  as='span'
                  fontFamily={'Manrope'}
                  fontSize='12px'
                  fontWeight='400'
                  color='custom.green'
                >
                  1000 USDT
                </Text>
              </Stack>
              <Stack pt='15px' direction='row' gap='30px'>
                <Btn justifyContent='center' p='30.5px 48px'>
                  Пополнение
                </Btn>
                <Btn
                  bg='white'
                  border='1px solid rgba(37, 39, 40, 0.10);'
                  justifyContent='center'
                  p='30.5px 48px'
                >
                  Вывод средств
                </Btn>
              </Stack>
            </Stack>
          </DataCardLayout>
          <DataCardLayout flex='1' title='Комиссионная задолженность'>
            <DataRow icon={WalletIcon} color='#EA1212' pt='16px'>
              $956,57
            </DataRow>
            <Btn
              bg='white'
              mt='38px'
              justifyContent='space-between'
              border='1px solid rgba(37, 39, 40, 0.10)'
            >
              <Text
                color='#252728'
                fontFamily={`Ristretto Pro`}
                textTransform={'uppercase'}
                fontWeight='400'
                fontSize='24px'
                p='30.5 28px'
                letterSpacing={'0.72px'}
              >
                Оплатить
              </Text>
              <Icon as={MoneySendIcon} />
            </Btn>
          </DataCardLayout>
        </Flex>
        <InvestmentCard />
        <Box bg='white' p='30px 40px'>
          <Flex w='full'>
            <Box flex='3'>
              <CardTitle>Название бота</CardTitle>
              <Stack
                pt='5px'
                color='custom.green'
                direction='row'
                alignItems={'center'}
              >
                <Icon as={BsCircleFill} fontSize='5px' />
                <Text fontFamily='Manrope' fontSize='13px' fontWeight='700' lineHeight='24px'>Активен</Text>
              </Stack>
            </Box>
            <Box flex='1'>
              <Btn
                border='1px solid rgba(37, 39, 40, 0.15);'
                bg='white'
                justifyContent='center'
                textTransform='uppercase'
              >
                отчетность
              </Btn>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </MainSectionLayout>
  )
}

export default Main