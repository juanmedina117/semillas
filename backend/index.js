'use strict'


const MONGOOSE = require('mongoose');
const APP = require('./app');
require('./globales');


MONGOOSE.connect('mongodb://localhost:27017/semillas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("Conexión a la base de datos exitosa!!!!")
    APP.listen(process.env.PORT, () => {
        console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
    })
}).catch(err => console.log(err));