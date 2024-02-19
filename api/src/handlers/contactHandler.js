const { sendMail } = require('../services/nodemailer');

const postContact = async (req, res) => {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.GOOGLE_EMAIL,
        subject,
        html: `
        <h2>Mensaje de contacto de: ${email}</h2>

        <p>${message}</p>
        `,
    };

    try {
        await sendMail(mailOptions);
        res.status(200).json('Mensaje Enviado');
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
};

module.exports = {
    postContact,
};
