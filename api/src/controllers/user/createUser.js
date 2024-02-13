const { User } = require('../../db');
const { generateTokenVerifyAccount } = require('../../services/jsonWebToken');
const { sendMail } = require('../../services/nodemailer');

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

    const token = generateTokenVerifyAccount(user);

    const mailOptions = {
        from: process.env.GOOGLE_EMAIL,
        to: email,
        subject: 'Verify Email',
        html: `
        <h2>Bienvenido a Animaladas</h2>

        <p>Para terminar la creacion de tu cuenta y puedas optar por la adopcion de tu
        nuevo mejor amigo.</br>
        Necesitamos que le des click al siguiente link para verificar tu correo:
        http://localhost:3001/user/verifyAccount?token=${token}&userId=${user.id}
        `,
    };

    const emailSend = await sendMail(mailOptions);

    if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return 'Usuario creado, revisar el correo electronico para verificar dicho correo';
};

module.exports = createUser;
