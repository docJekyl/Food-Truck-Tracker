import { Stack } from '@mantine/core'
import React from 'react'
import Modal from '../../../Components/Modal'

export default ({v, opened, close}) => {
  return (
    <Modal
      overlayOpacity={0.15}
      overlayBlur={2}
      radius='lg'
      opened={opened}
      onClose={() => close(false)}
    >
      <Stack>
        {v.name}
      </Stack>
    </Modal>
  )
}
