const express = require('express');
const router = express.Router();

//Aqui creamos una ruta que es donde vamos a renderizar archivo.hbs new-notes.
router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-notes', (req, res) => {
    const { title, textarea } = req.body;
    const errors = [];  
    if (!title) {   
        errors.push({text: 'Inserte un titulo'});
    }
    if (!textarea) {
        errors.push({text: 'Inserte un texto'});
    } 
    if (errors.lenght > 0 ) {
        res.render('/notes/new-notes', {
            errors,
            title,
            textarea
        });
    } else {
        res.send('ok');
    };
});

//Aqui vamos a crear rutas para las notas que recibiremos de la bbdd.
router.get('/notes', (req, res) => {
    res.send('Notes from database');
});

module.exports = router;





