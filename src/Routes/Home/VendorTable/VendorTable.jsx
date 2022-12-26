import { Group, Stack, Text } from '@mantine/core'
import React from 'react'

import { VendorContext } from '../../../contexts/VendorContext'
import VendorTableElement from './VendorTableElement'

export default () => {
  const { vendors, selectedVendor, setSelectedVendor } = React.useContext(VendorContext)
  

  return (
    <Stack>
      {vendors.map((v) => (<VendorTableElement vendor={v} key={v.id}/>))}
    </Stack>
  )
}
