import { Avatar, Badge, Group, Stack, Switch, Text } from '@mantine/core'
import { useToggle } from '@mantine/hooks';
import React from 'react'
import RouteCard from '../../Components/RouteCard'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default ({currentUser}) => {
  const [ availability, toggle ] = useToggle([false, true]);

  let sign = (status, color) => (
    <Badge 
      variant='filled'
      color={color}
      radius='sm'
      size='xl'
      fullWidth={true}
    >
      {status}
    </Badge>
  )

  let logoColor = availability ? 'grayscale(0%)' : 'grayscale(100%)';

  const openText = "You are visible on the FTT Map!";
  const closedText = "You are NOT currently visible on the map";

  return (
    <div style={{width: 300}}>
      <RouteCard>
        <Group position='center' spacing={availability ? 10 : 0}>
          <Avatar src={currentUser.truck.logo} size='xl' style={{filter: logoColor}}/>
          <Stack align='center' >
            <Switch onClick={()=> toggle()} size='md' color="teal"
            />
            { availability ? sign('OPEN!!', 'teal') : sign('CLOSED', 'red')}
          </Stack>
        </Group>
        <Text align='center' mt={20} weight={600} size='xs' fs='italic'>{availability ? openText : closedText}</Text>
      </RouteCard>
    </div>
  )
}
