const { User } = require('../../db');
const { tokenDecoded } = require('../../services/jsonWebToken');
const getUserById = require('./getUserById');

const verifyUser = async (token, userId) => {
    const decoded = tokenDecoded(token);

    if (decoded.userId) {
        const user = await getUserById(userId);

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
    }
    return 'Ya esta Verificado';
};

module.exports = verifyUser;
