/* eslint-disable camelcase */
/* eslint-disable no-console */
const { MercadoPagoConfig, Preference } = require('mercadopago');
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');
const mailDoption = require('../controllers/donation/mailDotanito');

const crearOrden = async (req, res) => {
    try {
        const url = 'https://api.mercadopago.com/merchant_orders';
        const { ACCESS_TOKEN } = process.env;
        const accessToken = ACCESS_TOKEN;

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        };

        const { preferenceId } = req.body;
        const orderData = {
            external_reference: 'default',
            items: [
                {
                    currency_id: 'ARS',
                    title: 'donación',
                    quantity: 1,
                    unit_price: 100,
                },
            ],
            payer: {
                nickname: 'USER',
            },
            site_id: 'MLA',
            preference_id: preferenceId,
        };
        const response = await axios.post(url, orderData, { headers });
        const totalAmount = response.data.total_amount;
        const { status } = response.data;

        res.status(200).json({
            message: 'Orden creada exitosamente',
            totalAmount,
            status,
        });
    } catch (error) {
        console.error('Error al crear la orden:', error.response);
    }
};
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
                    success: `${process.env.URL_FRONT}/donar/pago-aprobado`,
                    failure: `${process.env.URL_FRONT}/donar`,
                    pending: `${process.env.URL_FRONT}/`,
                },
                auto_return: 'all',
                external_reference: 'default',
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

        const message = `Hola ${responseData.name}, Le informamos que su pago fue aprobado y
         de parte de la fundacion le queremos agradecerle por su gran colaboracion..`;

        await mailDoption(message, responseData.email);
        res.json({ responseData });
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

module.exports = {
    crearPreferencia,
    crearOrden,
};
