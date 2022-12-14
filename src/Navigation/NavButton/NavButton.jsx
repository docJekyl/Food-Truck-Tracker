import { Center, createStyles, Space, Text, useMantineTheme } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default ({icon, label, location, fx}) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  let selected = location === window.location.pathname;

  let submit = () => {
    fx()
    location && navigate(location);
  }

  let buttonStyles = createStyles(() => ({
    wrapper: {
      color: theme.colors.gray[6],
      height: 50,
      backgroundColor: 'transparent'
    },
    wrapperSelected : {
      color: theme.colors.gray[8],
      height: 50,
      backgroundColor: theme.colors.blue[1]
    }
  }));

  const { classes } = buttonStyles();


  return (
    <div 
      className={selected ? classes.wrapperSelected : classes.wrapper}
      onClick={() => submit()}
    >
      <Center inline mt='sm' ml='lg'>
        {icon}
        <Space w='sm'/>
        <Text align='center' weight={600}>{label}</Text>
      </Center>
    </div>
  )
}
