import React from 'react'
import { Avatar, Text, Loader, Stack } from '@mantine/core';
import Logo from '../../../assets/logo.png';

export default () => {
  return (  
    <Stack align='center' style={{height: 800}} spacing={0}>
      <Avatar src={Logo} size={400} padding={0}/>
      <Text>Locating trucks near you <Loader variant='dots' color='black'size='xs'/></Text>
    </Stack>
  )
}
