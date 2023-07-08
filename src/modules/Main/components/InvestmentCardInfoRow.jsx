import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import DataRow from './DataRow'
import CardDataLabel from './CardDataLabel'
import PercentageIcon from '@icons/PercentageIcon'
import DollarIcon from '@icons/DollarIcon'

const columns = [
  { label: 'Ожидаемая доходность', icon: PercentageIcon },
  { label: 'Время до окончания вклада', icon: DollarIcon },
  { label: 'Сумма денег во вкладе', icon: PercentageIcon },
]

const InvestmentCardInfoRow = ({colData}) => {
  return (
    <Stack direction='row' pt='13px' spacing={'25px'}>
      {columns.map((col, i) => (
        <Box key={i}>
          <CardDataLabel>{col.label}:</CardDataLabel>
          <DataRow
            color={'custom.black'}
            icon={col.icon}
          >
            {colData[i]}
          </DataRow>
        </Box>
      ))}
    </Stack>
  )
}

export default InvestmentCardInfoRow