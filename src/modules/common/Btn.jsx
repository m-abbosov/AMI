import { Button } from '@chakra-ui/react'
import React from 'react'

const Btn = ({children, ...rest}) => {
  return (
    <Button
      w='full'
      bg='custom.yellow'
      textTransform={'uppercase'}
      color='custom.black'
      fontWeight='400'
      fontSize='24px'
      height='78px'
      alignItems='center'
      justifyContent='space-between'
      rounded='none'
      {...rest}
    >
      {children}
    </Button>
  )
}

export default Btn