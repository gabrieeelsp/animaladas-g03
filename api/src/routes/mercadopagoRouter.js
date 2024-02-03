const { Router } = require('express');

const { crearPreferencia, verificarFirma } = require('../services/mercadopago');

const mercadopagoRouter = Router();

mercadopagoRouter.post('/crear-preferencia', crearPreferencia);
mercadopagoRouter.post('/mercadopago-notificaciones', verificarFirma);

module.exports = mercadopagoRouter;
