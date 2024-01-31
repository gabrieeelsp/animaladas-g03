const { User } = require('../../db');

const loginUser = async (email, password) => {
    console.log("ingreso al controller loginuser");
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(email)) throw Error('Formato de email incorrecto');

    // si created es true quiere decir que el email no existe dentro de la DB
    const user = await User.findOne({ where: { email, password } });

    //if (!created) throw Error('Ese correo ya fue utilizado');
    console.log('usuario encontrado', user);
    return user;

    // se crea el user, pero le falta agregar el jwt y enviarlo al correo del usuaeio
};

module.exports = loginUser;
