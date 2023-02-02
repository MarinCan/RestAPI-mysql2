const express = require('express');
const router = express.Router();
const pool = require('../db')
const employeesRoutes = require('./empleados')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Home');
});

router.get('/ping', async function(req, res, next) {
  const [result] = await pool.query('SELECT 1 + 1 AS result')
  // res.send('pong');
  res.json(result[0]) 
  // Recuerda: para acceder al valor de "1+1", se hace una lista del result ([result]) y se accede al elemento 0
});

router.use(employeesRoutes)

module.exports = router;
