//Aqui requerimos a express para poder usar las rutas
const express = require('express');
//Aqui usamos una funcion llamada router que nos ayudara a hacer los procesos y almacenamos en una constante
//para facilitar el trabajo
const router = express.Router();

//Aquí creamos la petición
router.get('/', (req, res) => {
    res.send('Index');
});

//Aquí exportamos el modulo
module.exports = router;
