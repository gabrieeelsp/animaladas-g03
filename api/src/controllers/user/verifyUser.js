const { User } = require('../../db');
const getUserByEmail = require('./getUserByEmail');

const verifyUser = async (userEmail) => {
    const user = await getUserByEmail(userEmail);

    if (user.is_verified === false) {
        User.update(
            { is_verified: true },
            {
                where: {
                    id: user.id,
                },
            },
        );

        return 'Verificado';
    }

    return 'Ya esta Verificado';
};

module.exports = verifyUser;
