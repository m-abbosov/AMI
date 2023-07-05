import React from 'react'


const MenuIconMobile = ({ isActiveMenu, display }) => {
  const menuIcon =
    isActiveMenu ?

      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.1" x="0.5" y="0.5" width="49" height="49" stroke="#252728" />
        <rect opacity="0.5" x="16.7071" y="16.3536" width="23.5" height="0.5" transform="rotate(45 16.7071 16.3536)" stroke="#252728" stroke-width="0.5" />
        <rect opacity="0.5" y="0.353553" width="23.5" height="0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 32.7206 16.1036)" stroke="#252728" stroke-width="0.5" />
      </svg>

      :

      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.1" x="0.5" y="0.5" width="49" height="49" stroke="#252728" />
        <rect opacity="0.5" x="13.25" y="17.25" width="23.5" height="0.5" stroke="#252728" stroke-width="0.5" />
        <rect opacity="0.5" x="13.25" y="31.25" width="23.5" height="0.5" stroke="#252728" stroke-width="0.5" />
        <rect opacity="0.5" x="13.25" y="24.25" width="16.5" height="0.5" stroke="#252728" stroke-width="0.5" />
      </svg>


  return menuIcon


}

export default MenuIconMobile