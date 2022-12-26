import React, { useState } from 'react'
import { SimpleGrid, Space } from '@mantine/core'

import { Container } from '../../Components/Container'
import RouteCard from '../../Components/RouteCard'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Map from './Map/Map'
import OpenSign from './OpenSign'
import VendorTable from './VendorTable/VendorTable'
import { VendorContext } from '../../contexts/VendorContext'

import { vendors } from '../../../mockData/mocks'

export default () => {
  const { currentUser } = React.useContext(CurrentUserContext)
  const [ selectedVendor, setSelectedVendor ] = useState(null)
  const isVendor =  currentUser.type === 'vendor';
  

  // add vendor search context to allow map selection to propigate up to vendor table. 
  return (
    <VendorContext.Provider value={{vendors, selectedVendor, setSelectedVendor}}>
      <Container>
        {isVendor && <OpenSign currentUser={currentUser}/>}
        <Space h='lg'/>

        <RouteCard style={{backgroundColor: '#f8f7f7'}}>
          <SimpleGrid cols={2}>
            <VendorTable/>
            <Map/>
          </SimpleGrid>
        </RouteCard>
      </Container>
    </VendorContext.Provider>
  )
}
