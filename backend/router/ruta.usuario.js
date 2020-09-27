'use strict'

const CONTROLADOR_USUARIO = require('../controller/controlador.usuario');
const EXPRESS = require('express');
let { verificarToken } = require('../middlewares/autenticacion');


let router = EXPRESS.Router();


router.post('/crearUsuario', CONTROLADOR_USUARIO.crearUsuario);



module.exports = router;