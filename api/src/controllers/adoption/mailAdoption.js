const { templateSendMail } = require('../../services/nodemailer');

const mailAdoption = async (message, userEmail) => {
    const mail = {
        from: process.env.GOOGLE_EMAIL,
        to: userEmail,
        subject: 'Informe de adopcion',
        title: 'Informe de adopcion',
        message,
    };

    const emailSend = await templateSendMail(mail);

    if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return 'Mensaje enviado';
};

module.exports = mailAdoption;
