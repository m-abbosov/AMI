import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const LangMenu = ({...styles}) => {
  return (
    <Menu {...styles}>
      <MenuButton
        fontWeight={'400'}
        fontSize='24px'
        border='1px solid #ccc'
        rounded='none'
        as={Button}
        rightIcon={<AiFillCaretDown size='10px' />}
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