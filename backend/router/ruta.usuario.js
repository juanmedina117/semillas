'use strict'

const CONTROLADOR_USUARIO = require('../controller/controlador.usuario');
const EXPRESS = require('express');

let router = EXPRESS.Router();


router.post('/crearUsuario', CONTROLADOR_USUARIO.crearUsuario);



module.exports = router;