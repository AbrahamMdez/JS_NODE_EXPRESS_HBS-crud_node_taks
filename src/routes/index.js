//Aqui requerimos a express para poder usar las rutas
const express = require('express');
//Aqui usamos una funcion llamada router que nos ayudara a hacer los procesos y almacenamos en una constante
//para facilitar el trabajo
const router = express.Router();

//Aquí creamos la petición
router.get('/', (req, res) => {
    //Aqui lo que estamos diciendo es que renderice el archivo INDES.HBS, cuando hablamos de handlebars
    //lo que decimos es que renderice esos archivos, no es necesario poner extenxion .hbs
    res.render('index');
});

router.get('/about', (req, res) => {
    //Aqui lo que estamos diciendo es que renderice el archivo ABOUT.HBS, cuando hablamos de handlebars
    //lo que decimos es que renderice esos archivos, no es necesario poner extenxion .hbs
    res.render('about');
})

//Aquí exportamos el modulo
module.exports = router;
