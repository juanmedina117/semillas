'use strict'

const MODELO_PDF = require('../model/modelo.salidaPdf');

const PDF = {

    generarPDF: (req, res) => {
        let body = req.body;

        let salidaPDF = new MODELO_PDF({

            especie: body.especie,
            material: body.material,
            clave: body.clave,
            fecha: body.fecha,
            kg_danadados: body.kg_danadados,
            kg_buenos: body.kg_buenos,
            tipo_secado: body.tipo_secado,
            tipo_seleccion: body.tipo_seleccion,
            semillas_brutas: body.semillas_brutas,
            semillas_utilizadas: body.semillas_utilizadas,
            humedad: body.humedad,
            pureza: body.pureza,
            viabilidad: body.viabilidad,
            germinacion: body.germinacion,
            fecha_analisis: body.fecha_analisis,
            almacenamiento: body.almacenamiento,
            observaciones: body.observaciones

        });

        salidaPDF.save((err, salidaGenerada) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: err
                })
            } else if (!salidaGenerada) {
                return res.status(404).send({
                    status: 404,
                    mensaje: "No se encontro el dato a guardar"
                });
            } else {
                return res.status(200).send({
                    status: 200,
                    salidaGenerada
                })
            }
        })
    }
}

module.exports = PDF;