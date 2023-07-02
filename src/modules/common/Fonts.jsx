import { Global } from '@emotion/react'
import React from 'react'

const Fonts = () => {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'Ristretto Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./ristretto.otf');
      }
      `}
    />
  )
}

export default Fonts