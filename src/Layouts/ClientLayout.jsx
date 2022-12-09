import { AppShell } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import { Navigation } from '../Navigation/Navigation.jsx'

export default () => {

  return (
    <AppShell
      padding={0}
      navbar={<Navigation />}
      header={<Header/>}
    >
      <Outlet />
    </AppShell>
  )
}
