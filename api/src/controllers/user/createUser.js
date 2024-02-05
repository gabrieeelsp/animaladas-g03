const { User } = require('../../db');

const createUser = async (
    name,
    lastName,
    email,
    password,
    phone,
    address,
    imageProfile,
) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(email)) throw Error('Formato de email incorrecto');

    const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
            name,
            lastName,
            password,
            phone,
            address,
            imageProfile,
        },
    });

    // si created es false quiere decir que el correo ya esta siendo utilizado.
    if (!created) throw Error('Ese correo ya fue utilizado');

    return user;
};

module.exports = createUser;
