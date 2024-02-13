const { User } = require('../../db');

const getUserById = async (userId) => {
    const user = await User.findByPk(userId);

    if (!user) throw new Error('Id de usuario no existente');

    return user;
};

module.exports = getUserById;
