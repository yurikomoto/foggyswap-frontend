import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <defs>
        <image
          width="64"
          height="64"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <use id="Background" href="#img1" x="0" y="0" />
    </Svg>
  )
}

export default Icon
