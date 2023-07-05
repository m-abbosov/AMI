import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LangMenu from '../LangMenu'

const PageHead = ({justifyContent, children}) => {
  return (
    <Flex alignItems={'flex-start'} justifyContent={justifyContent} position='relative' w='full' >
      <Stack direction='row' position='absolute' right='70px' display={['none', 'unset']}>
        <LangMenu />
      </Stack>
      <Text
        mt='-10px'
        fontSize={['42px', '50px']}
        color='custom.black'
        fontWeight='400'
        textTransform={'uppercase'}
      >
        {children}
      </Text>
    </Flex>
  )
}

PageHead.defaultProps={
  justifyContent: 'center'
}

export default PageHead