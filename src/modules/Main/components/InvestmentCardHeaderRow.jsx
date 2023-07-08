import { Box, Stack, Text } from '@chakra-ui/react'
import CardTitle from './CardTitle'
import InfoIcon from '@icons/InfoIcon'

const InvestmentCardHeaderRow = ({title}) => {
  return (
    <Stack direction='row' spacing='9px'>
      <CardTitle>{title}</CardTitle>
      <Box
        p='5px 8px'
        bg='transparent'
        border='1px solid rgba(37, 39, 40, 0.10)'
        borderRadius='4px'
        fontFamily={'Manrope'}
        fontSize={'12px'}
        cursor='pointer'
      >
        Валютный
      </Box>
      <Stack
        direction='row'
        spacing={2}
        alignItems={'center'}
        p='5px 8px'
        bg='custom.gray'
        borderRadius='4px'
        fontSize={'12px'}
        cursor='pointer'
      >
        <Text fontFamily={'Manrope'}>Условия вклада</Text>
        <InfoIcon />
      </Stack>
    </Stack>
  )
}

export default InvestmentCardHeaderRow
/**
 * border-radius: 4px;
border: 1px solid rgba(37, 39, 40, 0.10);
 */
