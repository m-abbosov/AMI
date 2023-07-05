import { Box, Flex, Grid, GridItem, Icon, Text, VStack } from '@chakra-ui/react'
import AndroidIcon from '@icons/AndroidIcon'
import ArchiveIcon from '@icons/ArchiveIcon'
import GraphIcon from '@icons/GraphIcon'
import LoginIcon from '@icons/LoginIcon'
import ShieldIcon from '@icons/ShieldIcon'
import WalletIcon from '@icons/WalletIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const links = [
  {
    label: 'Кошелек',
    icon: WalletIcon,
    pathToMatch: '/wallet',
    absolutePath: '/wallet',
  },
  {
    label: 'Торговый бот',
    icon: AndroidIcon,
    pathToMatch: '/trading-bot',
    absolutePath: '/trading-bot',
  },
  { label: 'Фонд', icon: GraphIcon, pathToMatch: '/fund', absolutePath: '/fund' },
  {
    label: 'Верификация',
    icon: ShieldIcon,
    pathToMatch: '/verification',
    absolutePath: '/verification',
  },
  { label: 'Новости', icon: ArchiveIcon, pathToMatch: '/news', absolutePath: '/news' },
  {
    label: 'Вход',
    icon: LoginIcon,
    pathToMatch: /signup|signin/,
    absolutePath: '/signin',
  },
]

const Sidebar = ({ flex }) => {
  const { pathname: path } = useRouter()
  return (
    <Box position='relative' height='100vh' flex={flex || 1} minH='100vh'>
      <VStack spacing={0} w='full' py='50px' textAlign='center'>
        <Text
          className='logoText'
          fontSize='52px'
          color='darkGray'
          textTransform={'uppercase'}
          sx={{ mb: '-20px' }}
        >
          ami
        </Text>
        <Text
          className='logoText'
          fontSize='20px'
          color='darkGray'
          textTransform={'uppercase'}
          sx={{ padding: 0, margin: 0 }}
        >
          finance
        </Text>
      </VStack>
      <Grid
        position='absolute'
        top='23%'
        bottom='0'
        left='0'
        w='full'
        templateColumns='repeat(2, 1fr)'
      >
        {links.map((MenuLink, i) => (
          <GridItem
            cursor='pointer'
            key={i}
            py='65px'
            border='1px solid'
            borderColor='custom.gray'
          >
            <Link href={MenuLink.absolutePath}>
              <VStack>
                <MenuLink.icon isActive={path.match(MenuLink.absolutePath)} />
                <Text textTransform={'uppercase'} color='custom.black' fontSize='24px'>
                  {MenuLink.label}
                </Text>
              </VStack>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default Sidebar
