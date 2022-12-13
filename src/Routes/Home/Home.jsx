import { SimpleGrid, Space } from '@mantine/core'
import React from 'react'
import { Container } from '../../Components/Container'
import RouteCard from '../../Components/RouteCard'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Map from './Map/Map'
import OpenSign from './OpenSign'
import VendorTable from './VendorTable/VendorTable'

export default () => {
  const { currentUser } = React.useContext(CurrentUserContext)
  const isVendor =  currentUser.type === 'vendor';
  
  return (
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
  )
}
