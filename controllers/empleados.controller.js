const getEmpleados = (req, res, next) => {
    res.send('Obteniendo empleados')
}

const createEmpleados = (req, res, next) => {
    res.send('Creando empleados')
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