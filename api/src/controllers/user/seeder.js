const { User, Review } = require('../../db');

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

const reviews = [
    {
        user_name: 'Gabriel',
        user_lastName: 'Batistuta',
        user_img:
            'https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039507/Proyecto_animaladas/default/Foto_Perfil__kaihwx.jpg',
        score: 4,
        comment: '¡Excelente producto!',
        userId: 1,
    },
    {
        user_name: 'Omar',
        user_lastName: 'Palma',
        user_img:
            'https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039507/Proyecto_animaladas/default/foto_perfil_2_cqrzyj.jpg',
        score: 5,
        comment: 'Muy buen servicio al cliente.',
        userId: 2,
    },
    {
        user_name: 'Claudio',
        user_lastName: 'Caniggia',
        user_img:
            'https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039506/Proyecto_animaladas/default/fotoperfil4_ksiccw.jpg',
        score: 3,
        comment: 'Podrían mejorar la entrega.',
        userId: 3,
    },
    {
        user_name: 'Hernan',
        user_lastName: 'Crespo',
        user_img:
            'https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039506/Proyecto_animaladas/default/fotoperfil6_h5vs4g.webp',
        score: 2,
        comment: 'No quedé satisfecho con el producto.',
        userId: 4,
    },
];

module.exports = async () => {
    await User.destroy({
        where: {},
        force: true,
    });

    await User.bulkCreate(items);
    await Review.bulkCreate(reviews);
};
