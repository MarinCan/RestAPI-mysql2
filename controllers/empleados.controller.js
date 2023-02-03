const pool = require('../db')

const getEmpleados = async (req, res, next) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}

const createEmpleados = async (req, res, next) => {
    const {name, salary} = req.body 
    // console.log(req.body)
    // console.log(name, salary)

    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])

    // res.send({rows})
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

const updateEmpleados = (req, res, next) => {
    res.send('Actualizando empleados')
}

const deleteEmpleados = (req, res, next) => {
    res.send('Eliminando empleados');
}

module.exports = {
    getEmpleados,
    createEmpleados,
    updateEmpleados,
    deleteEmpleados
}