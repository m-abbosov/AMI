import { Box, Circle, Icon } from '@chakra-ui/react'
import NotificationsIcon from '@icons/NotificationsIcon'
import React from 'react'

const NotificationsBell = () => {
  return (
    <Box
      pos='relative'
      height={'50px'}
      w='50px'
      border='1px solid'
      borderColor='rgba(37, 39, 40, 0.1)'
      display='flex'
      justifyContent='center'
      alignItems={'center'}
      bg={'transparent'}
      cursor='pointer'
      _hover={{ bg: '#ebedf0' }}
      _active={{
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
    >
      <Circle
        pos='absolute'
        top='20%'
        left='50%'
        bg='yellow'
        size='12px'
        fontSize='8px'
        display='flex'
        border='2px solid #eff2f3'
        alignItems='center'
        justifyContent='center'
      >
        <strong>1</strong>
      </Circle>
      <Icon height='22px' w='22px' as={NotificationsIcon} />
    </Box>
  )
}

export default NotificationsBell