'use strict'
const jwt = require('jsonwebtoken');
require('../globales')

let verificarToken = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                status: 401,
                err
            })
        } else {
            req.usuario = decoded.usuario;
            next();
        }
    })


}

module.exports = {
    verificarToken
};