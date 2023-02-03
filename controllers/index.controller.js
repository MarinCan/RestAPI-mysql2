const express = require('express');
const router = express.Router();
const pool = require('../db')
// const employeesRoutes = require('./empleados')


const index = (req, res, next) => {
    res.send('Home');
};

const ping = async (req, res, next) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    // res.send('pong');
    res.json(result[0]) 
    // Recuerda: para acceder al valor de "1+1", se hace una lista del result ([result]) y se accede al elemento 0
}

module.exports = {index ,ping}