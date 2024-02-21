const { templateSendMail } = require('../../services/nodemailer');
const getUserById = require('../user/getUserById');

const mailAdoption = async (id, messageMail) => {
    const user = await getUserById(id);

    const mail = {
        from: process.env.GOOGLE_EMAIL,
        to: user.email,
        subject: 'Informe de adopcion',
        title: 'Informe de adopcion',
        message: `Hola ${user.name}, ${messageMail}`,
    };

    const emailSend = await templateSendMail(mail);

    if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return 'Mensaje enviado';
};

module.exports = mailAdoption;
