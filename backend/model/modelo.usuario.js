'use strict'

const MONGOOSE = require('mongoose');
const VALIDATOR = require('mongoose-unique-validator');

let Schema = MONGOOSE.Schema;

let usuario = new Schema({
    nombres: {
        type: String,
        required: true
    },
    ap_paterno: {
        type: String,
        required: true
    },
    ap_materno: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    calle: {
        type: String,
        required: true
    },
    uto: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    profesion: {
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    }
});

usuario.plugin(VALIDATOR, { message: 'El {PATH} ya existe' });

module.exports = MONGOOSE.model('usuario', usuario);