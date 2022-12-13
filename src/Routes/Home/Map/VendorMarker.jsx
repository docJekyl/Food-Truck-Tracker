import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { FaDotCircle } from 'react-icons/fa';

import VendorInfoModal from './VendorInfoModal';

export default ({v}) => {
  const [ modalOpened, setModalOpened ] = useState(false);


  return (
    <Marker
      latitude={v.truck.lat}
      longitude={v.truck.lon}
      onClick={() => setModalOpened(true)}
    >
      <FaDotCircle size={20} color='blue'/>
      <VendorInfoModal v={v} opened={modalOpened} close={setModalOpened}/>
    </Marker>
  )
}
