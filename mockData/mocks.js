import burger from '../src/assets/burger.jpeg'

export const user = {
  id: 1,
  name: 'Eric Hyde',
  email: 'eh@test.com',
  phone: 123-456-7890,
  type: 'user',
  lon: -97.6743115,
  lat: 35.6573186,
  created_at: '2022-12-08T22:47:38Z'
}

export const vendors = [
  {
    id: 1,
    name: `Fire Burgers`,
    email: 'Fire@burger.com',
    phone: '999-999-9999',
    type: 'vendor',
    created_at: '2022-12-08T22:47:38Z',
    truck: {
      id:1,
      unitNumber: 1,
      brandName: `Fire Burger`,
      logo: burger,
      url: 'http://curbsideburgers.com/',
      lon: -97.6743115,
      lat: 35.6572186,
      status: 'open'
    }
  },
  {
    id: 2,
    name: `Lava Pocket Express`,
    email: 'lava@pizzaPockets.com',
    phone: '888-888-8888',
    type: 'vendor',
    created_at: '2022-11-08T22:47:38Z',
    truck: {
      id:2,
      unitNumber: 1,
      brandName: `Lava Pocket Express`,
      logo: burger,
      url: 'http://curbsideburgers.com/',
      lon: -97.6741115,
      lat: 35.6571186,
      status: 'open'
    }
  },
]