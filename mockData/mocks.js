import burger from '../src/assets/burger.jpeg'

export const user = {
  id: 1,
  name: 'Eric Hyde',
  email: 'eh@test.com',
  phone: 123-456-7890,
  type: 'user',
  lon: -72.664658,
  lat: 42.328674,
  created_at: '2022-12-08T22:47:38Z'
}

export const vendor = {
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
    lon: -72.6646558,
    lat: 42.3286474,
    status: 'open'
  }
}


