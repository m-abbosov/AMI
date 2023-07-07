import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LangMenu from '../LangMenu'
import NotificationsBell from '../NotificationsBell'
import { useRouter } from 'next/router'

const PageHead = ({justifyContent, children}) => {
  const {pathname:path} = useRouter()
  const isTheMainPage = !!path.match(/main/)
  return (
    <Flex
      alignItems={'flex-start'}
      justifyContent={justifyContent}
      position='relative'
      w='full'
    >
      <Stack
        direction='row'
        position='absolute'
        right='0'
        display={['none', 'flex']}
      >
        {isTheMainPage && <NotificationsBell />}
        <LangMenu height='50px' width='60px' />
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