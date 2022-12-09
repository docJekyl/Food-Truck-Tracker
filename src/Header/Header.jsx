import { Avatar, Group, Header, Image } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default () => {
  const navigate = useNavigate();

  return (
    <Header 
      px={20}
      height={90}
      style={{backgroundColor: '#f7f7f7'}}
    >
      <Group position='apart'>
        <Avatar src={Logo} size={88} onClick={() => navigate('/')}/>
        <Avatar size={60}/>
      </Group>
    </Header>
  )
}
