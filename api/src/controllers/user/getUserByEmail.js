const { User, Animal } = require('../../db');

const getUserByEmail = async (userEmail) => {
    const user = await User.findOne({
        where: {
            email: userEmail,
        },
        include: [
            {
                model: Animal,
                through: 'User_Animals',
            },
        ],
    });

    if (user === null) throw Error('Correo no existe');

    return user;
};

module.exports = getUserByEmail;
