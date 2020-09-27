'use strict'

const EXPRESS = require('express');
let router = EXPRESS.Router();
let controladorSalida = require('../controller/controlador.salidaPdf');
let { verificarToken } = require('../middlewares/autenticacion');

router.post('/generarPDF', controladorSalida.generarPDF);

module.exports = router;