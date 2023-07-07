import { Box, Flex, Grid, GridItem, Icon, Text, VStack, HStack, Button } from '@chakra-ui/react'
import AndroidIcon from '@icons/AndroidIcon'
import MenuIconMobile from '@icons/MenuIconMobile'
import ArchiveIcon from '@icons/ArchiveIcon'
import GraphIcon from '@icons/GraphIcon'
import LoginIcon from '@icons/LoginIcon'
import ShieldIcon from '@icons/ShieldIcon'
import WalletIcon from '@icons/WalletIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import useShowComponent from '../hooks/useShowComponent'
import { lock, unlock } from "tua-body-scroll-lock"



import LangMenu from '@modules/common/LangMenu'

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


  const [isActiveMenu, setActiveMenu] = useShowComponent()

  const divRef = useRef(null)  //to select specific element for scroll locking

  isActiveMenu ? lock(divRef.current) : unlock(divRef.current)
   /* Scroll locking while mobile menu icon is active */

  const { pathname: path } = useRouter()
  return (
    <Box position={['relative']} height={['100%', '100vh']} flex={flex || 1} py={['20px', '0px']} minH={['100%', '100vh']} display='flex' justifyContent='center' >
      <Flex minWidth={['100%', 'max-content']} alignItems={['center', 'start']} gap='7' justifyContent={['space-between', 'center']} >
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
        <HStack spacing={5} w='full' py='0px' textAlign='center' >
          <LangMenu width='50px' height='50px' display={['block', 'none']} />
          <Button onClick={() => setActiveMenu(!isActiveMenu)} display={['contents', 'none']}>
          <MenuIconMobile isActiveMenu={isActiveMenu} />
          </Button>
        </HStack>



      </Flex>
      <Grid
        position='absolute'
        top={['83%', '23%']}
        height={['100vh', '60vh']}
        bottom='0'
        left='0'
        w={['100%', 'full']}
        templateColumns='repeat(2, 1fr)'
        display={[`${isActiveMenu ? 'grid' : 'none'}`, 'grid']}
        ref={divRef}
      >
        {links.map((MenuLink, i) => (
          <GridItem
            cursor='pointer'
            key={i}
            py='65px'
            border='1px solid'
            borderColor='custom.gray'
            bgColor='white'
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
