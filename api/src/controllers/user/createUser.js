const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { generateTokenVerifyAccount } = require('../../services/jsonWebToken');
const { templateSendMailWithButton } = require('../../services/nodemailer');

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
            name,
            lastName,
            password: hashedPassword,
            phone,
            address,
            imageProfile,
        },
    });

    // si created es false quiere decir que el correo ya esta siendo utilizado.
    if (!created) throw Error('Ese correo ya fue utilizado');

    const token = generateTokenVerifyAccount(user);

    const mail = {
        from: process.env.GOOGLE_EMAIL,
        to: email,
        subject: 'Verify Email',
        title: 'Bienvenido a Animaladas',
        message:
            'Para terminar la creacion de tu cuenta y puedas optar por la adopcion de tu nuevo mejor amigo dale click al siguiente boton',
        button: {
            textButton: 'Verifica tu cuenta',
            linkButton: `${process.env.URL_BACK}/user/verifyAccount?token=${token}&userId=${user.id}`,
        },
    };

    const emailSend = await templateSendMailWithButton(mail);

    if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return 'Usuario creado, revisar el correo electronico para verificar dicho correo';
};

module.exports = createUser;
