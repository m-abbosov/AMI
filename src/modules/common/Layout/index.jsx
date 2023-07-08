import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import useShowComponent from '../hooks/useShowComponent'


const Layout = ({children}) => {

  return (
    <Flex w='full' direction={['column-reverse', 'row']}>

      <Box
        flex='3'
        bg='custom.gray'
        borderTopRightRadius={['0', '15%']}
        minH={['unset', '100vh']}
      >
        {children}
      </Box>
      <Sidebar />
    </Flex>
  )
}

export default Layout