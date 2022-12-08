import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import ClientLayout from '../Layouts/ClientLayout'

export default () => {
  return (
    <Routes>
      <Route path='/' element={<ClientLayout />}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}
