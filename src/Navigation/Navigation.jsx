import { Divider, Navbar, Stack } from '@mantine/core'
import React from 'react'
import NavButton from './NavButton/NavButton'

export const Navigation = () => {
  return (
    <Navbar 
      style={{backgroundColor: '#f7f7f7'}}
      width={{ sm: 200, lg: 250 }}  
    >
      <Stack spacing={0}>
        <NavButton label={'Search'} fx={() => console.log('home button pressed')} location={'/search'}/>
        <Divider />
        <NavButton label={'Home'} fx={() => console.log('home button pressed')} location={'/'}/>
        <NavButton label={'Favorites'} fx={() => console.log('home button pressed')} location={'/favorites'}/>
      </Stack>
    </Navbar>
  )
}
