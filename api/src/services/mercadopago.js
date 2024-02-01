/* eslint-disable camelcase */
/* eslint-disable no-console */
const { MercadoPagoConfig, Preference } = require('mercadopago');

const crearPreferencia = async (req, res) => {
    console.log('Contenido de req.body.items:', req.body);
    const { items } = req.body.body;
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
                        title: items[0].title,
                        quantity: Number(items[0].quantity),
                        unit_price: Number(items[0].unit_price),
                        currency_id: items[0].currency_id,
                    },
                ],

                payer: {
                    name: 'João',
                    surname: 'Silva',
                    email: 'user@email.com',
                    phone: {
                        area_code: '11',
                        number: '4444-4444',
                    },
                    identification: {
                        type: 'CPF',
                        number: '19119119100',
                    },
                    address: {
                        street_name: 'Street',
                        street_number: 123,
                        zip_code: '06233200',
                    },
                },
                back_urls: {
                    success: 'http://localhost:3000',
                    failure: 'http://localhost:3000',
                    pending: 'http://localhost:3000',
                },
                auto_return: 'approved',
            },
        });
        console.log(response);
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
