'use strict'

const EXPRESS = require('express');
let router = EXPRESS.Router();
let controladorSemilla = require('../controller/controlador.semillas');

router.post('/crearSemilla', controladorSemilla.guardarSemilla);
router.put('/editarSemilla/:id', controladorSemilla.editarSemilla);
router.delete('/eliminarSemilla/:id', controladorSemilla.eliminarSemilla);
router.post('/registrarSalida', controladorSemilla.salidaSemillas);
router.get('/verSemillas', controladorSemilla.verSemillas);
router.get('/buscarSemilla/:id', controladorSemilla.buscarSemilla);
module.exports = router;