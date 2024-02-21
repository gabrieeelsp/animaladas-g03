const { templateSendMail } = require('../services/nodemailer');

const postContact = async (req, res) => {
    const { email, subject, message } = req.body;

    const mail = {
        from: email,
        to: process.env.GOOGLE_EMAIL,
        subject,
        title: `Mensaje de contacto de: ${email}`,
        message,
    };

    try {
        await templateSendMail(mail);
        res.status(200).json('Mensaje Enviado');
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
};

module.exports = {
    postContact,
};
