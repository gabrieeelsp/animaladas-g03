const passport = require('passport');
const { Router } = require('express');
const userRouter = require('./userRouter');
const animalRouter = require('./animalRouter');
const initRouter = require('./initRouter');
const donationRouter = require('./donationRouter');
const adoptionRouter = require('./adoptionRouter');
const mercadopagoRouter = require('./mercadopagoRouter');
const reviews = require('./reviewRouter');
const contactRouter = require('./contactRouter');
require('../services/google');

const router = Router();

// Configuración de las rutas
/** Aplicación de controller/logica para esta ruta */

router.use('/user', userRouter);
router.use('/animal', animalRouter);
router.use('/init', initRouter);
router.use('/donations', donationRouter);
router.use('/adoptions', adoptionRouter);
router.use('/mercadopago', mercadopagoRouter);
router.use('/review', reviews);
router.use('/contact', contactRouter);

router.use(
    '/user/auth',
    passport.authenticate('auth-google', {
        scope: ['profile', 'email'],
        session: false,
    }),
    userRouter,
);

module.exports = router;
