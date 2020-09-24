const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

// node app crear -d "Pasear al perro"
// node app listar
// node app actualizar -d "Pasear al perro" -c true

let command = argv._[0];

switch (command) {
    case 'crear':
        // console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':

        let listado = porHacer.getListado();
        console.log('========Por Hacer============='.green);
        for (let tarea of listado) {
            console.log(`${tarea.description} Estado:  ${ tarea.completado }`);
        }
        console.log('============================='.green);

        // console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        // console.log('Actualizar por hacer');
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        // console.log('Actualizar por hacer');
        let borra = porHacer.borrar(argv.description);
        console.log(borra);
        break;

    default:
        console.log('Comando no es reconocido');
}