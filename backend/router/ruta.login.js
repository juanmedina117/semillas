'use strict'

const EXPRESS = require('express');
let router = EXPRESS.Router();
let rutaLogin = require('../controller/controlador.login');

router.post('/login', rutaLogin.loginUsuario);

module.exports = router;