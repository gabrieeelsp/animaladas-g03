const { Router } = require('express');

const { crearPreferencia } = require('../services/mercadopago');

const mercadopagoRouter = Router();

mercadopagoRouter.post('/crear-preferencia', crearPreferencia);

module.exports = mercadopagoRouter;
