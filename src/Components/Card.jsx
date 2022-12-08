import React from 'react'
import { Card as MCard} from '@mantine/core'

export const Card = ({children}) => {
  return (
    <MCard
      withBorder
      shadow='md'
    >
      {children}
    </MCard>
  )
}
