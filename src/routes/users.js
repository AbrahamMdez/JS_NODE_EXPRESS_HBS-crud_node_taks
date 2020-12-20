const express = require('express');
const router = express.Router();

//En este archivo Usser, vamos a crear dos rutas, una para registrarse y otra para autenticarse.
//Al ser rutas para usuarios, le vamos a poner que vaya a usuarios primero y despues a registrarse o 
//autenticarse. 
router.get('/user/signin', (req, res) => {
    res.render('users/signin');
});

router.get('/user/signup', (req, res) => {
    res.render('users/signup');
});

module.exports = router;