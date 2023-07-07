import { Box, Divider, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import DollarIcon from '@icons/DollarIcon'
import MoneySendIcon from '@icons/MoneySendIcon'
import ReceiptIcon from '@icons/ReceiptIcon'
import React from 'react'
import BoxTitle from './BoxTitle'


const DataBox = ({title, data}) => {
  return (
    <Box p='32px 40px' bg='white' flex='1'>
      <BoxTitle>{title}</BoxTitle>
      <Stack pt='16px' direction='column'>
        <Box>
          {data.map((currData, i) => (
            <React.Fragment key={i}>
              <Box>
                <Text
                  as='span'
                  color='custom.black'
                  fontWeight='400'
                  lineHeight='24px'
                  fontSiz='13px'
                  fontFamily={`Manrope`}
                >
                  {currData.label}:
                </Text>
                <Flex alignItems='center' gap='8px'>
                  <Icon as={currData.icon} size='24px' />
                  <Text
                    color={
                      currData.color === 'green' ? 'custom.green' : 'black'
                    }
                    fontFamily={`Manrope`}
                    fontWeight='600'
                    fontSize='24px'
                  >
                    {currData.value}
                  </Text>
                </Flex>
              </Box>
              {i !== data.length - 1 && (
                <Box py='20px'>
                  <Divider borderColor='#e9e9e9' />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Stack>
    </Box>
  )
}

export default DataBox