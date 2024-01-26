const { Router } = require('express');
const userRouter = require('./userRouter');

const router = Router();

//Configuración de las rutas
                      /**Aplicación de controller/logica para esta ruta */
router.get('/animals', (req, res) => {
    res.send('Lista de animales');
})

router.use("/user", userRouter);


module.exports = router;