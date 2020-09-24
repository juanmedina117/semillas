'use strict'

const MONGOOSE = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = MONGOOSE.Schema;

let modeloSalida = new Schema({
    fecha_salida: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    tipo_material: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    cantidad_salida: {
        type: Number,
        required: true
    },
    motivo_solicitud: {
        type: String,
        required: true
    },
    personal_dirigido: {
        type: String,
        required: true
    },
    destino_semilla: {
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    }
});

modeloSalida.plugin(uniqueValidator, { message: 'El {PATH} ya existe' })

module.exports = MONGOOSE.model("salida", modeloSalida);