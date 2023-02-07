const express = require('express');
const router = express.Router();
const pool = require('../db')
const {getEmpleados, getEmpleado, createEmpleado, updateEmpleado, deleteEmpleado} = require('../controllers/empleados.controller')


/* GET home page. */
// router.get('/empleados', function(req, res, next) {
//     res.send('Obteniendo empleados');
// });


// para dejarlo mas limpio y ordenado, se crea el archivo empleados.controller, se hace el require y se llama aqui
router.get('/empleados', getEmpleados);
  
router.get('/empleados/:id', getEmpleado);

router.post('/empleados', createEmpleado);

// router.put('/empleados/:id', updateEmpleado)
router.patch('/empleados/:id', updateEmpleado)  // <-- parecido al put pero puede actualizar datos individuales

router.delete('/empleados/:id', deleteEmpleado)

module.exports = router;
