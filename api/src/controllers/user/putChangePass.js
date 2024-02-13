const { User } = require('../../db');

const putChangePass = async (userId, password) => {
    await User.update({ password }, { where: { id: userId } });

    return 'contraseña actualizada';
};

module.exports = putChangePass;
