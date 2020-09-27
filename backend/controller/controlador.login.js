'use strict'

const MODELO_USUARIO = require('../model/modelo.usuario');
const jwt = require('jsonwebtoken');
require('../globales');
let login = {
    loginUsuario: (req, res) => {
        let body = req.body;

        MODELO_USUARIO.findOne({ correo: body.correo }, (err, usuario) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: err
                });
            } else if (!usuario) {
                return res.status(404).send({
                    status: 404,
                    mensaje: "El usuario no existe"
                });
            } else if (body.password != usuario.password) {
                return res.status(404).send({
                    status: 404,
                    mensaje: "Contraseña Incorrecta"
                });
            } else {

                // GEneracion del token
                let token = jwt.sign({
                    usuario
                }, process.env.SECRET, { expiresIn: process.env.CADUCIDAD });

                res.status(200).send({
                    status: 200,
                    usuario,
                    token
                });
            }
        })


    }
}

module.exports = login;