'use strict'

const MODELO_USUARIO = require('../model/modelo.usuario');


let contoladorUsuario = {
    crearUsuario: (req, res) => {
        let body = req.body;

        let usuario = new MODELO_USUARIO({

            nombres: body.nombres,
            ap_paterno: body.ap_paterno,
            ap_materno: body.ap_materno,
            domicilio: body.domicilio,
            calle: body.calle,
            uto: body.uto,
            area: body.area,
            correo: body.correo,
            profesion: body.profesion,
            observaciones: body.observaciones,
            usuario: body.usuario,
            password: body.password
        });

        usuario.save((err, usuarioCreado) => {
            if (err) {
                return res.status(200).send({
                    status: 500,
                    message: err
                })
            } else if (!usuarioCreado) {
                return res.status(404).send({
                    status: 404,
                    mensaje: "El usuario no fue creado"
                })
            } else {
                return res.status(200).send({
                    status: 200,
                    usuarioCreado
                })
            }
        })

    }

}

module.exports = contoladorUsuario;