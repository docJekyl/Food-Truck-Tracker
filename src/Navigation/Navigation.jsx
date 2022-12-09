import { Divider, Input, Navbar, Stack } from '@mantine/core'
import React, { useState } from 'react'
import Modal from '../Components/Modal'
import NavButton from './NavButton/NavButton'
import { FaSearchLocation, FaHome, FaHeart } from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi'

export const Navigation = () => {
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
      <Stack spacing={0}>

        <Divider />
        <NavButton label={'Home'} icon={<FaHome size={20} />} fx={() => console.log('home button pressed')} location={'/'}/>
        <NavButton label={'Favorites'} icon={<FaHeart size={20} />} fx={() => console.log('home button pressed')} location={'/favorites'}/>
      </Stack>
      <Modal
      opened={searchModal}
      onClose={() => setSearchModal(false)}
    >
      Search comming soon!! Search for food trucks near you
    </Modal>
    </Navbar>
  )
}
