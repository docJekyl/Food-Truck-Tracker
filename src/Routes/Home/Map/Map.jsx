import React, { useEffect, useState } from 'react'
import { Group } from '@mantine/core';
import Map, { Marker } from 'react-map-gl';
import { getLocation } from '../../../utils/geolocation';
import LoadingState from './LoadingState';
import { FaDotCircle } from 'react-icons/fa'

import { vendors } from '../../../../mockData/mocks'
import VendorInfoModal from './VendorInfoModal';
import VendorMarker from './VendorMarker';

let accessToken = 'pk.eyJ1IjoiamF2YW11bmNoIiwiYSI6ImNsYmxhM3FwODA1aWwzb213dmdja2d1MXQifQ.rYGbR8B7ei1iGQt0RfMxGw';

console.log(vendors)

export default () => {
  const [ location, setLocation ] = useState(null)

  useEffect(() => {
    getLocation(setLocation)
  }, [])

// fetch nearby food trucks
// render trucks on map
if(location === null) { return (<LoadingState />) }

  return (
    <Group position='center'>
      <Map
        initialViewState={{
          longitude: location.longitude,
          latitude: location.latitude,
          zoom: 16
        }}
        style={{width: 600, height: 400}}
        mapStyle={`mapbox://styles/mapbox/streets-v9`}
        mapboxAccessToken={accessToken}
      >
        <Marker
          longitude={location.longitude}
          latitude={location.latitude}
        >
          <FaDotCircle size={20} color='red'/>
        </Marker>

        {vendors.map((v) => <VendorMarker v={v} key={v.id} />)}
      </Map>
    </Group>
  );
}

