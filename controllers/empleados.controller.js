const pool = require('../db')

const getEmpleados = async (req, res, next) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}

const getEmpleado = async (req, res) => {

    // console.log(req.params.id)
    const [rows] = await pool.query('SELECT * from employee WHERE id = ?', [req.params.id])  // <-- [req.params.id] para evitar inyecciones sql
    // console.log(rows)

    if (rows.length <= 0){   // if ( not rows )
        return res.status(400).json({
            message: "El empleado no existe o no se ha encontrado"
        })
    }

    res.json(rows[0])
}

const createEmpleado = async (req, res, next) => {
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

const updateEmpleado = async (req, res, next) => {

    const { id } = req.params 
    const { name, salary } = req.body
    console.log(id, name, salary)

    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    console.log(result)

    if (result.affectedRows === 0) {
        return res.status(400).json({
            message: 'Empleado not found'
        })
    }

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows[0])
}

const deleteEmpleado = async (req, res, next) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    console.log(result)

    if ( result.affectedRows <= 0 ){
        return res.status(400).json({
            message: "El empleado no existe o no se ha encontrado"
        })
    }
    res.sendStatus(204);  // <-- no mandamos nada pero todo va ok
}

module.exports = {
    getEmpleados,
    getEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
}