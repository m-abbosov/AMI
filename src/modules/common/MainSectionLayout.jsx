import { Box } from '@chakra-ui/react'
import React from 'react'
import PageHead from './PageHead'

const MainSectionLayout = ({title, children, justifyContent, ...rest}) => {
  return (
    <Box pt={['20px', '70px']} px={['20px', '70px']} {...rest}>
      <PageHead justifyContent={justifyContent}>{title}</PageHead>
      {children}
    </Box>
  )
}

export default MainSectionLayout