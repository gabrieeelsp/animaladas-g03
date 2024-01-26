const { Router } = require('express');
const userRouter = require('./userRouter');
const animalRouter = require('./animalRouter');

const router = Router();

// Configuración de las rutas
/** Aplicación de controller/logica para esta ruta */

router.use('/user', userRouter);
router.use('/animal', animalRouter);

module.exports = router;
