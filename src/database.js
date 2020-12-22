//AQUI VAMOS A INICIAR LA CONEXION CON LA BBDD, EN ESTE CASO CON MONGO DB
//Requerimos al modulo previamente instalado en node llamado Mongoose que es el que conecta con Mongodb
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/notes-db-app';

//Aqui requerimos conexion con nuestra bbdd NOTES DB APP
mongoose.connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });

mongoose.connection.on('open', _=> {
    console.log('Database conected on', uri);
});

mongoose.connection.on('error', err => {
    console.log(err);
});
