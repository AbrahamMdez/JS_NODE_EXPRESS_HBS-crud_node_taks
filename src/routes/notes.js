const express = require('express');
const router = express.Router();

//Aqui vamos a crear rutas para las notas que recibiremos de la bbdd.
router.get('/notes', (req, res) => {
    res.send('Notes from database');
});

router.post('/notes/new-notes', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

//Aqui creamos una ruta que es donde vamos a renderizar archivo.hbs new-notes.
router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});


module.exports = router;





