const { User } = require('../../db');

const items = [
    {
        name: 'Gabriel',
        lastName: 'Batistuta',
        email: 'gb@mail.com',
        password: 'password',
        phone: '12345',
        address: 'calle falsa 123',
        is_verified: true,
    },
    {
        name: 'Omar',
        lastName: 'Palma',
        email: 'op@mail.com',
        password: 'password',
        phone: '12345',
        address: 'calle falsa 123',
        is_verified: true,
    },
    {
        name: 'Claudio',
        lastName: 'Caniggia',
        email: 'cc@mail.com',
        password: 'password',
        phone: '12345',
        address: 'calle falsa 123',
        is_verified: true,
    },
    {
        name: 'Hernan',
        lastName: 'Crespo',
        email: 'hc@mail.com',
        password: 'password',
        phone: '12345',
        address: 'calle falsa 123',
        is_verified: true,
    },
    {
        name: 'Lionel',
        lastName: 'Messi',
        email: 'lm@mail.com',
        password: 'password',
        phone: '12345',
        address: 'calle falsa 123',
        is_verified: true,
    },
];

module.exports = async () => {
    await User.destroy({
        where: {},
        force: true,
    });

    await User.bulkCreate(items);
};
