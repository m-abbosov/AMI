import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'
import AndroidIcon from '@icons/AndroidIcon'
import MenuIconMobile from '@icons/MenuIconMobile'
import ArchiveIcon from '@icons/ArchiveIcon'
import GraphIcon from '@icons/GraphIcon'
import LoginIcon from '@icons/LoginIcon'
import ShieldIcon from '@icons/ShieldIcon'
import WalletIcon from '@icons/WalletIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import LangMenu from '@modules/common/LangMenu'

const links = [
  {
    label: 'Кошелек',
    icon: WalletIcon,
    path: '/wallet',
  },
  {
    label: 'Торговый бот',
    icon: AndroidIcon,
    path: '/trading-bot',
  },
  { label: 'Фонд', icon: GraphIcon, path: '/fund' },
  {
    label: 'Верификация',
    icon: ShieldIcon,
    path: '/verification',
  },
  {
    label: 'Новости',
    icon: ArchiveIcon,
    path: '/news',
  },
  {
    label: 'Вход',
    icon: LoginIcon,
    path: '/signin',
  },
]

const Sidebar = ({ flex }) => {
  const langMenuStyle = {
    width: '50px',
    height: '50px',
  }
  const [isActiveMenu, setActiveMenu] = useState(false)
  const { pathname: path } = useRouter()
  return (
    <Box
      position='relative'
      height={['100%', '100vh']}
      flex={flex || 1}
      py={['20px', '0px']}
      minH={['100%', '100vh']}
    >
      <Flex
        minWidth='max-content'
        alignItems='center'
        gap='7'
        justifyContent='center'
      >
        <VStack spacing={0} w='full' py='0px' textAlign='center'>
          <Text
            className='logoText'
            fontSize={['26px', '52px']}
            color='darkGray'
            textTransform={'uppercase'}
            sx={{ mb: ['0', '-20px'] }}
          >
            ami
          </Text>
          <Text
            className='logoText'
            fontSize={['10px', '20px']}
            color='darkGray'
            textTransform={'uppercase'}
            sx={{ padding: 0, margin: 0 }}
          >
            finance
          </Text>
        </VStack>
        <HStack spacing={5} w='full' py='0px' textAlign='center'>
          <LangMenu width='50px' height='50px' display={['block', 'none']} />
          <MenuIconMobile isActiveMenu={isActiveMenu} />
        </HStack>
      </Flex>
      <Grid
        pos={'fixed'}
        width='25%'
        right='0'
        top='23%'
        bottom='0'
        templateColumns='repeat(2, 1fr)'
        display={['none', 'grid']}
      >
        {links.map((MenuLink, i) => (
          <GridItem
            cursor='pointer'
            key={i}
            py='65px'
            border='1px solid'
            borderColor='custom.gray'
            bg={path.match(MenuLink.path) ? 'rgb(248, 249, 249)' : '#fff'}
          >
            <Link href={MenuLink.path}>
              <VStack>
                <MenuLink.icon isActive={path.match(MenuLink.path)} />
                <Text
                  textTransform={'uppercase'}
                  color='custom.black'
                  fontSize='24px'
                >
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
