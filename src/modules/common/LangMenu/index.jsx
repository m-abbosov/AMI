import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const LangMenu = ({...styles}) => {
  return (
    <Menu >
      <MenuButton
        fontWeight={'400'}
        fontSize={['20px', '24px']}
        border='1px solid'
        borderColor='rgba(37, 39, 40, 0.1)'
        bg='transparent'
        rounded='none'
        as={Button}
        rightIcon={<AiFillCaretDown size='10px' />}
        {...styles}
      >
        RU
      </MenuButton>
      <MenuList>
        <MenuItem>RU</MenuItem>
        <MenuItem>UZ</MenuItem>
        <MenuItem>EN</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default LangMenu