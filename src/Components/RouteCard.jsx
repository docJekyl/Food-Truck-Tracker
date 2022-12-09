import React from 'react'
import { Card as MCard } from '@mantine/core'

export default ({children, title, ...rest}) => {
  
  // standardize card content

  return (
    <MCard
      radius='lg'
      withBorder
      shadow='md'
      {...rest}
    >
      {children}
    </MCard>
  )
}
