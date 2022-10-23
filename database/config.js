const mongoose = require('mongoose')
require('dotenv').config();

//Funcion de crear la conexion, el asyn convierte el codigo que esta dentro de la funcion en una promesa
const dbConnection = async () => {
    
    try{
        await mongoose.connect(process.env.DB_CNN);
        
        console.log('DB Online')
    }catch(e){
        console.log(e);
        throw new Error('Error a la hora de iniciar la conexion a la BD')
    }

}

module.exports = {
    dbConnection
}