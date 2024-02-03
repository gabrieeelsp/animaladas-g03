/* eslint-disable camelcase */
/* eslint-disable no-console */
const { MercadoPagoConfig, Preference } = require('mercadopago');
require('dotenv').config();

const crearPreferencia = async (req, res) => {
    try {
        const { ACCESS_TOKEN } = process.env;
        const client = new MercadoPagoConfig({
            accessToken: ACCESS_TOKEN,
        });

        const preference = new Preference(client);

        const response = await preference.create({
            body: {
                items: [
                    {
                        title: req.body.title,
                        quantity: req.body.quantity,
                        unit_price: req.body.unit_price,
                        id: req.body.id,
                        total_amount: req.body.total_amount,
                    },
                ],

                payer: {
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    client_id: req.body.client_id,
                },
                back_urls: {
                    success: 'https://www.success.com',
                    failure: 'https://www.failure.com',
                    pending: 'https://www.pending.com',
                },
                auto_return: 'approved',
            },
        });
        const responseData = {
            id: response.id,
            total_amount: response.total_amount,
            name: response.payer.name,
            surname: response.payer.surname,
            identification: response.payer.identification,
            email: response.payer.email,
            client_id: response.client_id,
        };

        res.json({ responseData });
        console.log(req.body.quantity);
    } catch (error) {
        console.error(error);
        if (
            error.response &&
            error.response.body &&
            error.response.body.message
        ) {
            res.status(500).json({
                error: 'Error en el servidor',
                mercadoPagoMessage: error.response.body.message,
            });
        } else {
            res.status(500).json({ error: 'Error en el servidor' });
        }
    }
};

// eslint-disable-next-line consistent-return
function verificarFirma(req, res, next) {
    const { SECRET_KEY } = process.env;
    const secret = SECRET_KEY;

    const signatureHeader = req.get('x-signature');
    if (!signatureHeader) {
        return res.status(400).json({ error: 'Firma ausente en la cabecera' });
    }

    const [timestamp, signature] = signatureHeader.split(',');

    const signatureData = {
        timestamp: timestamp.split('=')[1],
        signature: signature.split('=')[1],
    };

    const template = `post;${req.protocol}://${req.get('host')}${req.path};data.id=${req.body.id};type=${req.query.topic};user-agent:mercadopago webhook v1.0;${signatureData.timestamp};action:${req.body.action};api_version:${req.body.api_version};date_created:${req.body.date_created};id:${req.body.id};live_mode:${req.body.live_mode};type:${req.body.type};user_id:${req.body.user_id}`;

    const calculatedSignature = crypto
        .createHmac('sha256', secret)
        .update(template)
        .digest('hex');

    if (signatureData.signature !== calculatedSignature) {
        return res.status(400).json({ error: 'Firma inválida' });
    }

    next();
}

module.exports = {
    crearPreferencia,
    verificarFirma,
};
