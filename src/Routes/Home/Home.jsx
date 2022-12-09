import { Stack, Text } from '@mantine/core'
import React from 'react'
import { Container } from '../../Components/Container'
import RouteCard from '../../Components/RouteCard'

export default () => {
  return (
    <Container>
      <RouteCard>
        <Stack>
          <Text>Map component</Text>
          <Text>'Wheels of hunger -randomly selects a food truck within a given radius of current location </Text>
        </Stack>
      </RouteCard>
    </Container>
  )
}
