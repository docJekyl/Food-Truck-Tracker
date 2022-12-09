import { Badge, Card, Group, Space, Stack, Switch, Text, useMantineTheme } from '@mantine/core'
import React, { useState } from 'react'
import { Container } from '../../Components/Container'
import RouteCard from '../../Components/RouteCard'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import OpenSign from './OpenSign'

export default () => {
  const { currentUser } = React.useContext(CurrentUserContext)
  const [ availability, setAvailability ] = useState();


  const isVendor =  currentUser.type === 'vendor';

  
  return (
    <Container>
      {isVendor && <OpenSign currentUser={currentUser}/>}
      <Space h='lg'/>

      <RouteCard>
          <Text>Map component</Text>
      </RouteCard>
      <Space h='lg'/>
      <RouteCard>
          <Text>'Wheels of hunger -randomly selects a food truck within a given radius of current location </Text>
      </RouteCard>
    </Container>
  )
}
