import React from 'react'
import { activeIconColor, defaultIconColor } from '.'

const WalletIcon = ({isActive}) => {
  const iconColor = isActive ? activeIconColor : defaultIconColor
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.15'>
        <path
          d='M20.97 16.08C20.73 18.75 18.8 20.5 16 20.5H7C4.24 20.5 2 18.26 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.51 16.75 3.55C19.14 3.83 20.76 5.5 20.97 7.92C21 8.21 20.76 8.45 20.47 8.45H18.92C17.96 8.45 17.07 8.82 16.43 9.48C15.67 10.22 15.29 11.26 15.38 12.3C15.54 14.12 17.14 15.55 19.04 15.55H20.47C20.76 15.55 21 15.79 20.97 16.08Z'
          fill={iconColor}
        />
        <path
          d='M22.0002 10.97V13.03C22.0002 13.58 21.5602 14.03 21.0002 14.05H19.0402C17.9602 14.05 16.9702 13.26 16.8802 12.18C16.8202 11.55 17.0602 10.96 17.4802 10.55C17.8502 10.17 18.3602 9.94995 18.9202 9.94995H21.0002C21.5602 9.96995 22.0002 10.42 22.0002 10.97Z'
          fill={iconColor}
        />
      </g>
    </svg>
  )
}

export default WalletIcon