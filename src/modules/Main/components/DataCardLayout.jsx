import { Box } from '@chakra-ui/react'
import React from 'react'
import CardTitle from './CardTitle'

const DataCardLayout = ({children, title, ...styles}) => {
  return (
    <Box p='32px 40px' bg='white' {...styles}>
      <CardTitle>{title || ''}</CardTitle>
      {children}
    </Box>
  )
}

export default DataCardLayout