import React from 'react'
import { Box, Divider, Flex } from '@chakra-ui/react'
import DataCardLayout from './DataCardLayout'
import InvestmentCardHeaderRow from './InvestmentCardHeaderRow'
import InvestmentCardInfoRow from './InvestmentCardInfoRow'
import PercentageIcon from '@icons/PercentageIcon'
import DollarIcon from '@icons/DollarIcon'
import Btn from '@modules/common/Btn'

const data = [
  ['4%', '5 месяцев', '$120 000'],
  ['10%', '14 дней', '$25 000'],
  ['15%', '2 месяца', '$21 500'],
]

const InvestmentCard = () => {
  return (
    <DataCardLayout>
      {data.map((currCol, i) => (
        <React.Fragment>
          <Flex>
            <Box flex='3'>
              <Box key={i} bg={'transparent'}>
                <InvestmentCardHeaderRow title='Название вклада' />
                <InvestmentCardInfoRow colData={currCol} />
              </Box>
            </Box>
            <Flex flex='1' alignItems='center'>
              <Btn
                border='1px solid rgba(37, 39, 40, 0.15);'
                bg='white'
                justifyContent='center'
              >
                ЗАКРЫТЬ ВКЛАД
              </Btn>
            </Flex>
          </Flex>
          {i !== data.length - 1 && (
            <Box py='20px'>
              <Divider borderColor='#e9e9e9' />
            </Box>
          )}
        </React.Fragment>
      ))}
    </DataCardLayout>
  )
}

export default InvestmentCard
