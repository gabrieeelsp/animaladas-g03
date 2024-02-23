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

const templateSendMail = async (mail) => {
    const { from, to, subject, title, message } = mail;

    const mailOptions = {
        from,
        to,
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
                ${title}
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
        // attachments: [
        //     {
        //         filename: 'logoanimaladas.png',
        //         path: '../api/src/img/logoanimaladas.png',
        //         cid: 'logoanimaladas',
        //     },
        // ],
    };

    try {
        const send = await transporter.sendMail(mailOptions);
        return send;
    } catch (error) {
        console.log(error);
    }
};

const templateSendMailWithButton = async (mail) => {
    const { from, to, subject, title, message, button } = mail;

    const mailOptions = {
        from,
        to,
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
                ${title}
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

                <div style="width: 100%; text-align: center">
                    <button
                        style="
                            height: auto;
                            width: 150px;
                            padding: 5px;
                            background-color: #ffc107;
                            font-weight: bold;
                        "
                    >
                        <a
                            style="text-decoration: none; color: black; padding: 5px;"
                            href="${button.linkButton}"
                            >${button.textButton}</a
                        >
                    </button>
                </div>


            </div>
        </div>
        `,
        // attachments: [
        //     {
        //         filename: 'logoanimaladas.png',
        //         path: '../api/src/img/logoanimaladas.png',
        //         cid: 'logoanimaladas',
        //     },
        // ],
    };

    try {
        const send = await transporter.sendMail(mailOptions);
        return send;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    transporter,
    sendMail,
    templateSendMailWithButton,
    templateSendMail,
};
