const { templateSendMail } = require('../../services/nodemailer');
const findOneById = require('./findOneById');

const mailAdoption = async (id, messageMail) => {
    const data = await findOneById(id);

    const userEmail = data.user.dataValues.email;
    const userName = data.user.dataValues.name;

    const mail = {
        from: process.env.GOOGLE_EMAIL,
        to: userEmail,
        subject: 'Informe de adopcion',
        title: 'Informe de adopcion',
        message: `Hola ${userName}, ${messageMail}`,
    };

    const emailSend = await templateSendMail(mail);

    if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return 'Mensaje enviado';
};

module.exports = mailAdoption;
