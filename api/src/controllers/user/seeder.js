const { User } = require('../../db');

const items = [
    {
        name: 'Gabriel',
        lastName: 'Batistuta',
        email: 'gb@mail.com',
        password: 'password',
        phone: '12345',
        address: 'calle falsa 123',
    },
    {
        name: 'Omar',
        lastName: 'Palma',
        email: 'op@mail.com',
        password: 'password',
        phone: '12345',
        address: 'calle falsa 123',
    },
];

module.exports = async () => {
    await User.truncate();

    await User.bulkCreate(items);
};
