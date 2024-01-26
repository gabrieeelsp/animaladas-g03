const { Router } = require('express');
const userRouter = require('./userRouter');

const router = Router();

// Configuración de las rutas
/** Aplicación de controller/logica para esta ruta */

router.use('/user', userRouter);

module.exports = router;
