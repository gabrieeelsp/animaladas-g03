const { User } = require('../../db');

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

module.exports = getAllUsers;
