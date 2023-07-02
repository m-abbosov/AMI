import React from 'react'
import { activeIconColor, defaultIconColor } from '.'

/**
 * @status default || active
 */
const AndroidIcon = ({isActive}) => {
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
          d='M11 18V21C11 21.55 10.55 22 10 22C9.45 22 9 21.55 9 21V18H11Z'
          fill={iconColor}
        />
        <path
          d='M15 18V21C15 21.55 14.55 22 14 22C13.45 22 13 21.55 13 21V18H15Z'
          fill={iconColor}
        />
        <path
          d='M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z'
          fill={iconColor}
        />
        <path
          d='M5 11V15C5 15.55 4.55 16 4 16C3.45 16 3 15.55 3 15V11C3 10.45 3.45 10 4 10C4.55 10 5 10.45 5 11Z'
          fill={iconColor}
        />
        <path
          d='M21 11V15C21 15.55 20.55 16 20 16C19.45 16 19 15.55 19 15V11C19 10.45 19.45 10 20 10C20.55 10 21 10.45 21 11Z'
          fill={iconColor}
        />
        <path
          d='M9.59998 7.60001H14.4C15.28 7.60001 16 6.88 16 6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6C8 6.88 8.71998 7.60001 9.59998 7.60001Z'
          fill={iconColor}
        />
      </g>
    </svg>
  )
}

export default AndroidIcon