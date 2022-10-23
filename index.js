// IMPORTACIONES EN EXPRESS
require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config')


//Crear el servidor de express http, inicializa la app de express
const app = express()

//Configurar cors, cada ves que alguien haga una peticion pasa por aqui y se el activa el cors
app.use(cors());

//Base de datos
dbConnection();

//Va a leer el archivo .env y va a mostrar todas las variables globales
//console.log(process.env)

//Rutas
app.get('/', (request, response) => {
    
    response
    .status(200)
    .json({
        ok: true,
        message: 'Hola mundo desde node'
    });

});

//Para levantar el servidor, e indicar el port, ademas de un callback que se va a ejecutar cuando se levante el servidor
app.listen( process.env.PORT , () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})
