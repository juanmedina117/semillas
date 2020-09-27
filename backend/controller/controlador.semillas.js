'use strict'

const MODELO_SEMILLA = require('../model/modelos.semillas');
const MODELO_SALIDA = require('../model/modelo.salidaSemilla');
const SEMILLAS = {
    guardarSemilla: (req, res) => {
        let body = req.body;

        let semilla = new MODELO_SEMILLA({
            num_viaje: body.num_viaje,
            fecha: body.fecha,
            clave: body.clave,
            especie: body.especie,
            categoria: body.categoria,
            procedencia: body.procedencia,
            material: body.material,
            num_costales: body.num_costales,
            kg_promedio: body.kg_promedio,
            kg_totales: body.kg_totales,
            kg_acomulado: body.kg_acomulado,
            observaciones: body.observaciones
        });

        semilla.save((err, semillaCreada) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: err
                });
            } else if (!semillaCreada) {
                return res.status(404).send({
                    status: 404,
                    mensaje: "Error al crear la semilla, no se enviaron los datos del formulario"
                });
            } else {
                return res.status(200).send({
                    status: 200,
                    semillaCreada
                })
            }
        })
    },
    editarSemilla: (req, res) => {
        let paramId = req.params.id;
        let datos = req.body;

        MODELO_SEMILLA.findByIdAndUpdate(paramId, datos, { new: true }, (err, semillaActualizada) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: err
                });
            } else if (!semillaActualizada) {
                return res.status(404).send({
                    status: 404,
                    mensaje: "No se encontro la semilla que se desa actualizar"
                });
            } else {
                return res.status(200).send({
                    status: 200,
                    semillaActualizada
                })
            }
        })

    },
    eliminarSemilla: (req, res) => {
        let idParam = req.params.id;
        MODELO_SEMILLA.findOneAndDelete(idParam, (err, semillaEliminada) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: err
                });
            } else if (!semillaEliminada) {
                return res.status(404).send({
                    status: 404,
                    message: "No se encontro la semilla a eliminar"
                });
            } else {
                return res.status(200).send({
                    status: 200,
                    semillaEliminada
                });
            }
        });
    },
    salidaSemillas: (req, res) => {

        let body = req.body;

        let salida = new MODELO_SALIDA({

            fecha_salida: body.fecha_salida,
            clave: body.clave,
            tipo_material: body.tipo_material,
            especie: body.especie,
            cantidad_salida: body.cantidad_salida,
            motivo_solicitud: body.motivo_solicitud,
            personal_dirigido: body.personal_dirigido,
            destino_semilla: body.destino_semilla,
            observaciones: body.observaciones

        });

        salida.save((err, salidaRegistrada) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: err
                });
            } else if (!salidaRegistrada) {
                return res.status(404).send({
                    status: 404,
                    mesnaje: "No se pudo registrar la salida formulario vacio"
                });
            } else {
                return res.status(200).send({
                    status: 200,
                    salidaRegistrada
                })
            }
        });


    },
    verSemillas: (req, res) => {

        MODELO_SEMILLA.find({}).exec((err, datosSemillas) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    message: err
                })
            } else if (!datosSemillas) {
                return res.status(404).send({
                    status: 404,
                    mensaje: "No se eoncontraron registos de semillas"
                })
            } else {
                return res.status(200).send({
                    status: 200,
                    datosSemillas
                })
            }
        })
    },
    buscarSemilla: (req, res) => {

        let claveParams = req.params.id;

        MODELO_SEMILLA.findById(claveParams, (err, dato) => {
            if (err) {
                console.log(err);
            } else {
                return res.status(200).send({
                    dato
                })
            }
        })
    }
}
module.exports = SEMILLAS;