import { Button, Divider, Input, Navbar, Stack } from '@mantine/core'
import React, { useState } from 'react'
import Modal from '../Components/Modal'
import NavButton from './NavButton/NavButton'
import { FaHome, FaHeart } from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi'

import { user } from '../../mockData/mocks'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

export const Navigation = () => {
  const { toggleUser } = React.useContext(CurrentUserContext)
  const [ searchModal, setSearchModal ] = useState(false)

  return (
    <Navbar 
      style={{backgroundColor: '#f7f7f7'}}
      width={{ sm: 200, lg: 250 }}  
    >
      <Navbar.Section p='md'>
        <div onClick={() => setSearchModal(true)}>
          <Input placeholder='Search' icon={<HiOutlineSearch size={20}/>}/>
        </div>
      </Navbar.Section>
      <Navbar.Section p={0} grow>
        <Stack spacing={0}>
          <Divider />
          <NavButton label={'Map'} icon={<FaHome size={20} />} fx={() => console.log('Navigate to Map')} location={'/'}/>
          <NavButton label={'Favorites'} icon={<FaHeart size={20} />} fx={() => console.log('Naviugate to fave')} location={'/favorites'}/>
        </Stack>
      </Navbar.Section>
      <Navbar.Section p='md'>
        {/* temporary button for toggling between user types during development */}
        <Button onClick={() => toggleUser()} variant='light'>Toggle user type: </Button>
      </Navbar.Section>
      
      <Modal
        opened={searchModal}
        onClose={() => setSearchModal()}
      >
        Search comming soon!! Search for food trucks near you
      </Modal>
    </Navbar>
  )
}
