const description = {
    demand: true,
    alias: 'd',
    desc: 'Descrión de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    //.command('listar', 'Lista la información de la BD')
    .command('crear', 'Crear un elemento por hacer', {
        description
    })
    .command('borrar', 'Borra un elemento por hacer', {
        description
    })
    .command('actualizar', 'Marcar un elemento como completado', {
        description,
        complete
    })
    .help()
    .argv; // cuando no lleva ./ significa que es un paquete

module.exports = {
    argv
}