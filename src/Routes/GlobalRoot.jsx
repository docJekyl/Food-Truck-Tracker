import React, { useState } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import ClientRoot from './AppRoot'

// mock data imports. set current user to vendor to swithc current user contexts
import { user, vendor } from '../../mockData/mocks'

export default () => {
  const [ currentUser, setCurrentUser ] = useState(user)

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <ClientRoot />  
    </CurrentUserContext.Provider>
  )
}
