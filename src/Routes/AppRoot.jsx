import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import ClientLayout from '../Layouts/ClientLayout'
import Favorites from './Favorites/Favorites'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

export default () => {

  return (
    <Routes>
      <Route path='/' element={<ClientLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Route>
    </Routes>
  )
}