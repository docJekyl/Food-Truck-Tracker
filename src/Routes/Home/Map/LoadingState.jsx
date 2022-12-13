import React from 'react'
import { Avatar, Group, Text, Loader, Stack } from '@mantine/core';
import Logo from '../../../assets/logo.png';

export default () => {
  return (
    <Stack align='center' style={{height: 400}} spacing={0}>
      <Avatar src={Logo} size={400} padding={0}/>
      <Text>Loading your map <Loader variant='dots' color='black'size='xs'/></Text>
    </Stack>
  )
}
