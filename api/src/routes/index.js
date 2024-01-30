const { Router } = require('express');
const userRouter = require('./userRouter');
const animalRouter = require('./animalRouter');
const initRouter = require('./initRouter');

const router = Router();

// Configuración de las rutas
/** Aplicación de controller/logica para esta ruta */

router.use('/user', userRouter);
router.use('/animal', animalRouter);
router.use('/init', initRouter);

module.exports = router;
