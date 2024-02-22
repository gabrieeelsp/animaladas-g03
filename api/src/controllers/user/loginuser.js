const { User } = require('../../db');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../../services/jsonWebToken');

const loginUser = async (email, password) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(email)) throw Error('Formato de email incorrecto');

    const user = await User.findOne({
        where: { email },
    });

    if (!user) throw new Error('Email o Password incorrecto');

    if (!bcrypt.compareSync(password, user.password)) {
        throw new Error('Email o Password incorrecto.');
    }

    //const comparePassword = await bcrypt.compare(password, user.password);
    //if (!comparePassword) throw new Error('Password incorrecta');
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
