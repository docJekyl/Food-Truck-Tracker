import React, { useState } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import ClientRoot from './AppRoot'

// mock data imports. set current user to vendor to swithc current user contexts
import { user, vendors } from '../../mockData/mocks'

export default () => {
  const [ currentUser, setCurrentUser ] = useState(user)

  // Teporary dev fx for easily toggling between user types
  const toggleUser = () => {
    if(currentUser.type === 'user') { setCurrentUser(vendors[0])}
    if(currentUser.type === 'vendor') { setCurrentUser(user)}
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser, toggleUser}}>
      <ClientRoot />  
    </CurrentUserContext.Provider>
  )
}
