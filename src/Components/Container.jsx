import React from 'react';
import { Container as MContainer } from '@mantine/core';

export const Container = ({children, ...rest}) => {
  return (
    <MContainer 
      size={1400}
      pt={20}
      {...rest}
    >
      {children}
    </MContainer>

  )
}
