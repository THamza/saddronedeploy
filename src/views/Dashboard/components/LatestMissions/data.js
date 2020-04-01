import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    controller: {
      name: 'Kevin Smith'
    },
    createdAt: 1555016400000,
    status: 'pending',
    icon: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    controller: {
      name: 'Billy Boop'
    },
    createdAt: 1555016400000,
    status: 'completed',
    icon: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    controller: {
      name: 'Billy Boop'
    },
    createdAt: 1554930000000,
    status: 'cancelled',
    icon: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    controller: {
      name: 'Oscar Cameleon'
    },
    createdAt: 1554757200000,
    status: 'postponed',
    icon: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    controller: {
      name: 'Billy Boop'
    },
    createdAt: 1554670800000,
    status: 'completed',
    icon: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    controller: {
      name: 'Oscar Cameleon'
    },
    createdAt: 1554670800000,
    status: 'completed',
    icon: 'delivered'
  }
];
