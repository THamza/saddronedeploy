import uuid from 'uuid/v1';
import ksImg from '../../assets/images/avatars/avatar_11.png';
export default [
  {
    id: uuid(),
    name: 'Kevin Smith',
    address: {
      country: 'Morocco',
      state: 'Meknes-Tafilalet',
      city: 'Ifrane',
      street: '2849 Fulton Street'
    },
    email: 'ekaterina.tankova@devias.io',
    phone: '304-428-3097',
    avatarUrl: {ksImg},
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Oscard Cameleon',
    address: {
      country: 'China',
      state: 'Pekin',
      city: 'Beijing',
      street: '1865  Pleasant Hill Road'
    },
    email: 'o.cameleon@gmail.com',
    avatarUrl: '/images/avatars/avatar_4.png',
    phone: '712-351-5711',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Billy Boop',
    address: {
      country: 'Morocco',
      state: 'Tangier-Azila',
      city: 'Tangier',
      street: '4894  Lakeland Park Drive'
    },
    email: 'b.boop@gmail.com',
    phone: '770-635-2682',
    avatarUrl: '/images/avatars/avatar_2.png',
    createdAt: 1555016400000
  }
];
