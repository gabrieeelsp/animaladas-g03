const { Router } = require('express');

const { crearPreferencia, crearOrden } = require('../services/mercadopago');

const mercadopagoRouter = Router();

mercadopagoRouter.post('/crear-preferencia', crearPreferencia);
mercadopagoRouter.post('/pago-aprobado', crearOrden);

module.exports = mercadopagoRouter;
