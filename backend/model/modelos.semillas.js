'use strict'

const MONGOOSE = require('mongoose');

let Schema = MONGOOSE.Schema;
let uniqueValidator = require('mongoose-unique-validator');


let semilla = new Schema({
    num_viaje: {
        type: Number,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    procedencia: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    num_costales: {
        type: Number,
        required: true
    },
    kg_promedio: {
        type: Number,
        required: true
    },
    kg_totales: {
        type: Number,
        required: true
    },
    kg_acomulado: {
        type: Number,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    }
});

semilla.plugin(uniqueValidator, { message: 'El {PATH} ya existe' });
module.exports = MONGOOSE.model('semilla', semilla)