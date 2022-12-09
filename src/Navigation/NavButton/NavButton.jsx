import { Center, createStyles, Text, useMantineTheme } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default ({label, location}) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  let selected = location === window.location.pathname;

  let submit = () => {
    navigate(location);
  }

  let buttonStyles = createStyles(() => ({
    wrapper: {
      height: 50,
      backgroundColor: 'transparent'
    },
    wrapperSelected : {
      height: 50,
      backgroundColor: theme.colors.blue[5]
    }
  }));

  const { classes } = buttonStyles();


  return (
    <div 
      className={selected ? classes.wrapperSelected : classes.wrapper}
      onClick={() => submit()}
    >
      <Center inline>
        <Text align='center'>{label}</Text>
      </Center>
    </div>
  )
}
