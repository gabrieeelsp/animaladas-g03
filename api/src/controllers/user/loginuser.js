const { User } = require('../../db');
const { generateToken } = require('../../services/jsonWebToken');

const loginUser = async (email, password) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(email)) throw Error('Formato de email incorrecto');

    // si created es true quiere decir que el email no existe dentro de la DB
    const user = await User.findOne({
        where: { email, password },
    });

    if (!user) throw new Error('email o password incorrectas');

    // se crea el token con el cual veran si es user en admin o no.
    const token = generateToken(user);

    const userInfo = {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        imageProfile: user.imageProfile,
        phone: user.phone,
        address: user.address,
        isAdmin: user.isAdmin,
        is_verified: user.is_verified,
        tokenUser: token,
    };

    return userInfo;
};

module.exports = loginUser;
