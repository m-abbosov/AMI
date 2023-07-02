import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'


const Layout = ({children}) => {
  return (
    <Flex w='full' minH='100vh'>
      <Box
        flex='3'
        bg='custom.gray'
        borderTopRightRadius={'15%'}
        minH='100vh'
      >
        {children}
      </Box>
      <Sidebar/>
    </Flex>
  )
}

export default Layout