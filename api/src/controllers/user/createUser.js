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

    // si created es true quiere decir que el email no existe dentro de la DB
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

    if (!created) throw Error('Ese correo ya fue utilizado');

    return user;

    // se crea el user, pero le falta agregar el jwt y enviarlo al correo del usuaeio
};

module.exports = createUser;
