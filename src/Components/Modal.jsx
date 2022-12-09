import { Modal as MModal } from '@mantine/core'
import React from 'react'

export default ({children, ...rest}) => {

  return (
    <MModal
      centered
      withCloseButton={false}
      overlayOpacity={0.35}
      overlayBlur={3}
      radius='lg'
      {...rest}
    >
      {children}
    </MModal>
  )
}
