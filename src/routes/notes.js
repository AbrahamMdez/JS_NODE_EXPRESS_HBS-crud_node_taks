const express = require('express');
const router = express.Router();

//Aqui vamos a crear rutas para las notas que recibiremos de la bbdd.
router.get('/notes', (req, res) => {
    res.send('Notes from database');
});

module.exports = router;





