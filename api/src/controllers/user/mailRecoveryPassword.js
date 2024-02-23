const { generateTokenRecoveryPass } = require('../../services/jsonWebToken');
const { templateSendMailWithButton } = require('../../services/nodemailer');
const getUserByEmail = require('./getUserByEmail');

const mailRecoveryPassword = async (email) => {
    const user = await getUserByEmail(email);

    const token = generateTokenRecoveryPass(user);

    const mail = {
        from: process.env.GOOGLE_EMAIL,
        to: email,
        subject: 'Revover Password',
        title: 'Recuperacion de contraseña',
        message:
            'Para recuperar tu cuenta y restaurar tu contraseña dale click al siguiente boton',
        button: {
            textButton: 'Recuperar contraseña',
            linkButton: `${process.env.URL_BACK}/user/verifyToken?token=${token}&userId=${user.id}`,
        },
    };

    const mailSend = await templateSendMailWithButton(mail);

    if (!mailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return `Mail enviado a ${email}`;
};

module.exports = mailRecoveryPassword;
