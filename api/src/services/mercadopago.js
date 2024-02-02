/* eslint-disable camelcase */
/* eslint-disable no-console */
const { MercadoPagoConfig, Preference } = require('mercadopago');

const crearPreferencia = async (req, res) => {
    try {
        const client = new MercadoPagoConfig({
            accessToken:
                'TEST-3430732621014049-013115-5b0563bd4865c7b19fd74b5312e6e171-723277092',
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

module.exports = {
    crearPreferencia,
};
