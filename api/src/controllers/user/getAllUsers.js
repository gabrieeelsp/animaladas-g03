const { User, Animal } = require('../../db');

const getAllUsers = async () => {
    const users = await User.findAll({
        include: [
            {
                model: Animal,
                through: 'User_Animals',
            },
        ],
    });
    return users;
};

module.exports = getAllUsers;
