const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'listar':
        let list = toDo.getList();
        for (let task of list) {
            console.log('=== Por hacer ==='.green);
            console.log(task.description);
            console.log('Estado: ', task.completed);
            console.log('================='.green);
        }
        break;
    case 'actualizar':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'eliminar':
        let deleted = toDo.deleted(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}