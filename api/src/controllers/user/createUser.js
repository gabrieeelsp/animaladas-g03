const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { generateTokenVerifyAccount } = require('../../services/jsonWebToken');
const { sendMail } = require('../../services/nodemailer');

const createUser = async (
    name,
    lastName,
    email,
    password,
    phone,
    address,
    imageProfile,
) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(email)) throw Error('Formato de email incorrecto');

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
            name,
            lastName,
            password: hashedPassword,
            phone,
            address,
            imageProfile,
        },
    });

    // si created es false quiere decir que el correo ya esta siendo utilizado.
    if (!created) throw Error('Ese correo ya fue utilizado');

    const token = generateTokenVerifyAccount(user);

    const mailOptions = {
        from: process.env.GOOGLE_EMAIL,
        to: email,
        subject: 'Verify Email',
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
                Bienvenido a Animaladas
                </h2>

                <p
                    style="
                        text-align: center;
                        color: white;
                        text-decoration: none;
                    "
                >
                Para terminar la creacion de tu cuenta y puedas optar por la adopcion de tu
                 nuevo mejor amigo dale click al siguiente boton
                </p>

                <div style="width: 100%; text-align: center">
                    <button
                        style="
                            height: 40px;
                            width: 150px;
                            padding: 5px;
                            background-color: #ffc107;
                            font-weight: bold;
                        "
                    >
                        <a
                            style="text-decoration: none; color: black"
                            href="${process.env.URL_FRONT}/user/verifyAccount?token=${token}&userId=${user.id}"
                            >Verifica tu cuenta</a
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

    const emailSend = await sendMail(mailOptions);

    if (!emailSend.messageId) {
        return 'Ocurrio un error al intentar enviar el mail';
    }

    return 'Usuario creado, revisar el correo electronico para verificar dicho correo';
};

module.exports = createUser;
