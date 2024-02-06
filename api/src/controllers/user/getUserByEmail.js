const { User } = require('../../db');

const getUserByEmail = async (userEmail) => {
    const user = await User.findOne({
        where: {
            email: userEmail,
        },
    });

    if (user === null) throw Error('Correo no existe');

    return user;
};

module.exports = getUserByEmail;
