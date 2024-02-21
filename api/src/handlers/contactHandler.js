const { sendMail } = require('../services/nodemailer');

const postContact = async (req, res) => {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.GOOGLE_EMAIL,
        subject,
        html: `
        <div style="width: 100%; background-color: #343a40">
            <div style="padding: 20px 10px">
                <!-- image -->
                <div style="padding: 10px 0px; width: 100%; text-align: center">
                    <img
                        src="cid:logoanimaladas"
                        alt=""
                        style="width: 100px"
                    />
                </div>
                <hr />

                <!-- tittle -->

                <h2
                    style="
                        text-align: center;
                        color: white;
                        text-decoration: none;
                    "
                >
                    Mensaje de contacto de: ${email}
                </h2>

                <p
                    style="
                        text-align: center;
                        color: white;
                        text-decoration: none;
                    "
                >
                ${message}
                </p>
            </div>
        </div>
        `,
        attachments: [
            {
                filename: 'logoanimaladas.png',
                path: '../api/src/img/logoanimaladas.png',
                cid: 'logoanimaladas',
            },
        ],
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
