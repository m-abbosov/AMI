import { Box, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const SwitchLink = ({label, linkLabel, path}) => {
  return (
    <Box  fontFamily={`'Manrope', 'serif'`}>
      <Text as='span' color='custom.black' fontSize='15px'>
        {label}{'  '}
      </Text>
      <Link href={path} style={{ textDecoration: 'none' }}>
        <Text cursor='pointer' as='span' color='custom.blue' fontWeight='500'>
          {linkLabel}
        </Text>
      </Link>
    </Box>
  )
}

export default SwitchLink