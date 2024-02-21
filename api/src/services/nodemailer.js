const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD_APP,
    },
});

transporter
    .verify()
    .then()
    .catch((error) => console.log(error));

const sendMail = async (mailOptions) => {
    try {
        const send = await transporter.sendMail(mailOptions);
        return send;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { transporter, sendMail };
