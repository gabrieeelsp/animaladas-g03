const { User } = require('../../db');
const bcrypt = require('bcryptjs');

const putChangePass = async (userId, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.update({ password: hashedPassword }, { where: { id: userId } });

    return 'contraseña actualizada';
};

module.exports = putChangePass;
