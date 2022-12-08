import { AppShell } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx'

export default () => {

  return (
    <AppShell
      padding={0}
      
      header={<Header/>}
    >
      <Outlet />
    </AppShell>
  )
}
