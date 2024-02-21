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
                Recuperacion de contraseña
                </h2>

                <p
                    style="
                        text-align: center;
                        color: white;
                        text-decoration: none;
                    "
                >
                Para recuperar tu cuenta y restaurar tu contraseña dale click
                al siguiente boton
                </p>

                <div style="width: 100%; text-align: center">
                    <button
                        style="
                            height: 45px;
                            width: 180px;
                            padding: 5px;
                            background-color: #ffc107;
                            font-weight: bold;
                        "
                    >
                        <a
                            style="text-decoration: none; color: black"
                            href="${process.env.URL_BACK}/user/verifyToken?token=${token}&userId=${user.id}"
                            >Recuperar contraseña</a
                        >
                    </button>
                </div>


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

    const mailSend = await sendMail(mailOptions);

    if (!mailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return `Mail enviado a ${email}`;
};

module.exports = mailRecoveryPassword;
