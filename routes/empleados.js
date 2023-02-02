const express = require('express');
const router = express.Router();
const pool = require('../db')


/* GET home page. */
router.get('/empleados', function(req, res, next) {
    res.send('Obteniendo empleados');
});
  
router.post('/empleados', function(req, res, next) {
    res.send('Creando empleados');
});

router.put('/empleados', function(req, res, next) {
    res.send('Actualizando empleados');
});

router.delete('/empleados', function(req, res, next) {
    res.send('Eliminando empleados');
});

module.exports = router;
