const express = require('express');
const router = express.Router();
const pool = require('../db')
const {getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados} = require('../controllers/empleados.controller')


/* GET home page. */
// router.get('/empleados', function(req, res, next) {
//     res.send('Obteniendo empleados');
// });


// para dejarlo mas limpio y ordenado, se crea el archivo empleados.controller, se hace el require y se llama aqui
router.get('/empleados', getEmpleados);
  
router.post('/empleados', createEmpleados);

router.put('/empleados', updateEmpleados)

router.delete('/empleados', deleteEmpleados)

module.exports = router;
