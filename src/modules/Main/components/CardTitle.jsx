import { Text } from '@chakra-ui/react'
import React from 'react'

const BoxTitle = ({children}) => {
  return (
    <Text
      color='black'
      fontSize='15px'
      fontWeight='600'
      lineHeight='24px'
      fontFamily={`Manrope`}
      as='h3'
    >
      {children}
    </Text>
  )
}

export default BoxTitle