const { Router } = require('express');

const router = Router();

//Configuración de las rutas
                      /**Aplicación de controller/logica para esta ruta */
router.get('/animals', (req, res) => {
    res.send('Lista de animales');
})


module.exports = router;