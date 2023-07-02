import React from 'react'
import { activeIconColor, defaultIconColor } from '.'

const GraphIcon = ({isActive}) => {
  const iconColor = isActive ? activeIconColor : defaultIconColor
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.6702 6.95003C21.0302 4.78003 19.2202 2.97003 17.0502 2.33003C15.4002 1.85003 14.2602 1.89003 13.4702 2.48003C12.5202 3.19003 12.4102 4.47003 12.4102 5.38003V7.87003C12.4102 10.33 13.5302 11.58 15.7302 11.58H18.6002C19.5002 11.58 20.7902 11.47 21.5002 10.52C22.1102 9.74003 22.1602 8.60003 21.6702 6.95003Z'
        fill={iconColor}
        fillOpacity='0.15'
      />
      <path
        d='M18.9099 13.36C18.6499 13.06 18.2699 12.89 17.8799 12.89H14.2999C12.5399 12.89 11.1099 11.46 11.1099 9.70003V6.12003C11.1099 5.73003 10.9399 5.35003 10.6399 5.09003C10.3499 4.83003 9.9499 4.71003 9.5699 4.76003C7.2199 5.06003 5.0599 6.35003 3.6499 8.29003C2.2299 10.24 1.7099 12.62 2.1599 15C2.8099 18.44 5.5599 21.19 9.0099 21.84C9.5599 21.95 10.1099 22 10.6599 22C12.4699 22 14.2199 21.44 15.7099 20.35C17.6499 18.94 18.9399 16.78 19.2399 14.43C19.2899 14.04 19.1699 13.65 18.9099 13.36Z'
        fill={iconColor}
        fillOpacity='0.15'
      />
    </svg>
  )
}

export default GraphIcon