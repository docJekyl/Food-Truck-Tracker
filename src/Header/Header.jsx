import { Avatar, Header, Image } from '@mantine/core'
import React from 'react'
import Logo from '../assets/logo.png'

export default () => {
  return (
    <Header 
      height={90}
      style={{backgroundColor: '#f7f7f7'}}
    >
      <Avatar
        ml={20}
        src={Logo}
        size={88}
      />
    </Header>
  )
}
