const { generateTokenRecoveryPass } = require('../../services/jsonWebToken');
const { sendMail } = require('../../services/nodemailer');
const getUserByEmail = require('./getUserByEmail');

const mailRecoveryPassword = async (email) => {
    console.log('valor de email en back', email);
    const user = await getUserByEmail(email);

    const token = generateTokenRecoveryPass(user);

    const mailOptions = {
        from: process.env.GOOGLE_EMAIL,
        to: email,
        subject: 'Revover Password',
        html: `
        <h2>Recuperacion de contraseña</h2>

        <p>Para recuperar tu cuenta y restaurar tu contraseña dale click,</br>
        al siguiente link:
    
        http://localhost:3001/user/verifyToken?token=${token}&userId=${user.id}
        `,
    };

    const mailSend = await sendMail(mailOptions);

    if (!mailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return `Mail enviado a ${email}`;
};

module.exports = mailRecoveryPassword;
