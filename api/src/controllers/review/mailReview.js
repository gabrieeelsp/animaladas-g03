const { templateSendMail } = require('../../services/nodemailer');

const mailReview = async (message, userEmail) => {
    const mail = {
        from: process.env.GOOGLE_EMAIL,
        to: userEmail,
        subject: 'Informe de tu review',
        title: 'Informe de tu review',
        message,
    };

    const emailSend = await templateSendMail(mail);

    if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return 'Mensaje enviado';
};

module.exports = mailReview;
