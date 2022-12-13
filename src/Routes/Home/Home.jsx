import { Space } from '@mantine/core'
import React from 'react'
import { Container } from '../../Components/Container'
import RouteCard from '../../Components/RouteCard'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Map from './Map/Map'
import OpenSign from './OpenSign'

export default () => {
  const { currentUser } = React.useContext(CurrentUserContext)
  const isVendor =  currentUser.type === 'vendor';
  
  return (
    <Container>
      {isVendor && <OpenSign currentUser={currentUser}/>}
      <Space h='lg'/>

      <RouteCard style={{backgroundColor: '#f8f7f7'}}>
          <Map />
      </RouteCard>
      {/* <Space h='lg'/>
      <RouteCard>
          <Text>'Wheels of hunger -randomly selects a food truck within a given radius of current location </Text>
      </RouteCard> */}
    </Container>
  )
}
