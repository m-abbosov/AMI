import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Layout = ({children}) => {
  return (
    <Flex w='full' minH='100vh'>
      <Box
        flex='2'
        bg='gray'
        borderTopRightRadius={'15%'}
        // border='1px solid green'
        minH='100vh'
      >
        {children}
      </Box>
      <Box bg='inherit' flex='1' minH='100vh'></Box>
    </Flex>
  )
}

export default Layout