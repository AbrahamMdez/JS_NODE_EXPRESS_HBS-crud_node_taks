const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

//Aqui creamos una ruta que es donde vamos a renderizar archivo.hbs new-notes.
router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-notes', async (req, res) => {
    const { title, description } = req.body;
    console.log({ title, description });
    const errors = [];  
    if (!title) {   
        errors.push({text: 'Inserte un titulo'});
    }
    if (!description) {
        errors.push({text: 'Inserte un texto'});
    }
    if (errors.length > 0 ) {
        res.render('/notes/new-notes', {
            errors,
            title,
            description
        })
    } else {
        const newNote = new Note ({ title, description });
        await newNote.save();
        res.redirect('/notes');
    }
});

//Aqui vamos a crear rutas para las notas que recibiremos de la bbdd.
router.get('/notes', async (req, res) => {
    //Hay que recordar usar .lean() para evitar errores con handlebars al renderizar o usar destructores
    const notes = await Note.find().lean();
    res.render('notes/all-notes', { notes });
});

module.exports = router;





