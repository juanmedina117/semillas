'use strict'

const EXPRESS = require('express');
const APP = EXPRESS();
let cors = require('cors');
const BODYPARSER = require('body-parser')
let rutaUsuario = require('./router/ruta.usuario');
let rutaSemilla = require('./router/ruta.semillas');
let rutaPdf = require('./router/ruta.salidaPDF')
let rutalogin = require('./router/ruta.login')

APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

//CORS
APP.use(cors());

// RUTAS
APP.use('/', rutaUsuario);
APP.use('/', rutaSemilla);
APP.use('/', rutaPdf);
APP.use('/', rutalogin);

module.exports = APP;