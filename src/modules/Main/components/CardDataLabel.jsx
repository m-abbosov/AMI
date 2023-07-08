import { Text } from '@chakra-ui/react'
import React from 'react'

const CardDataLabel = ({children}) => {
  return (
    <Text
      as='span'
      color='custom.black'
      fontWeight='400'
      lineHeight='24px'
      fontSize='13px'
      fontFamily={`Manrope`}
    >
      {children}
    </Text>
  )
}

export default CardDataLabel