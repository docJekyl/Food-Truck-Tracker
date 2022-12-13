import React, { useEffect, useState } from 'react'
import { Group } from '@mantine/core';
import Map from 'react-map-gl';
// import { getLocation } from '../../../utils/geolocation';

let accessToken = 'pk.eyJ1IjoiamF2YW11bmNoIiwiYSI6ImNsYmxhM3FwODA1aWwzb213dmdja2d1MXQifQ.rYGbR8B7ei1iGQt0RfMxGw';

export default () => {
  const [ location, setLocation ] = useState(false)

  const getLocation = async () => {

    var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;
      console.log(pos)
      // setLocation(crd)
      console.log('test')
      return crd
    }

    function errors(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }


    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition((success));
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }

  useEffect(() => {
    getLocation()
  })

// while loading, render food truck logo with animations?
// once loaded, show map with current location
// fetch nearby food trucks
// render trucks on map


// create a status bar across the top of the app to show progress of getting all data. 



  return (
    <Group position='center'>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 16
        }}
        style={{width: 600, height: 400}}
        mapStyle={`mapbox://styles/mapbox/streets-v9`}
        mapboxAccessToken={accessToken}      
      />
    </Group>
  );
}

