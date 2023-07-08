import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'

const DataRow = ({children, icon, color, ...styles}) => {
  return (
    <Flex alignItems='center' gap='8px' {...styles}>
      <Icon as={icon} size='24px' />
      <Text
        color={color === 'green' ? 'custom.green' : color}
        fontFamily={`Manrope`}
        fontWeight='600'
        fontSize='24px'
      >
        {children}
      </Text>
    </Flex>
  )
}

export default DataRow