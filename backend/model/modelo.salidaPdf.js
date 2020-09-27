'use strict'

const MONGOOSE = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = MONGOOSE.Schema

let pdf = new Schema({

    especie: {
        type: String
    },
    material: {
        type: String
    },
    clave: {
        type: Number
    },
    fecha: {
        type: String
    },
    kg_danadados: {
        type: Number
    },
    kg_buenos: {
        type: Number
    },
    tipo_secado: {
        type: String
    },
    tipo_seleccion: {
        type: String
    },
    semillas_brutas: {
        type: Number
    },
    semillas_utilizadas: {
        type: Number
    },
    humedad: {
        type: Number
    },
    pureza: {
        type: Number
    },
    viabilidad: {
        type: Number
    },
    germinacion: {
        type: Number
    },
    fecha_analisis: {
        type: String
    },
    almacenamiento: {
        type: String
    },
    observaciones: {
        type: String
    }
});

pdf.plugin(uniqueValidator, { message: 'El {PATH} ya existe' })

module.exports = MONGOOSE.model("salidaPDF", pdf);