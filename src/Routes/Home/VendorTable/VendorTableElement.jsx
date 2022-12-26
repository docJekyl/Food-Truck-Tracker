import { Avatar, Divider, Group, Space, Stack, Text, useMantineTheme } from '@mantine/core'
import React from 'react'

export default ({vendor}) => {
  const theme = useMantineTheme();
  // console.log(vendor);


  let title = (text) => <Text weight={600} size='xl' color={theme.colors.gray[7]}>{text}</Text>
  let text = (text) => <Text inline size='sm'>{text}</Text>
  let link = (link) => <Text variant='link' onClick={() => window.open(link)}> {link}</Text>

  return (
    <div>
      <Group  position='apart' px={20} pb={10}>
        <Stack spacing={0}>
          {title(vendor.name)}
          <Space h={6}/>
          {text(`Ph: ${vendor.phone}`)}
          {link(`${vendor.truck.url}`)}

        </Stack>
        <Stack>
          <Avatar src={vendor.truck.logo}/>
        </Stack>
      </Group>
      <Divider />
    </div>
  )
}
