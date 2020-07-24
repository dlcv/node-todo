const description = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripción del to-do por hacer'
    }
};

const completed = {
    completed: {
        default: true,
        alias: 'c',
        desc: 'Estado del to-do'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un nuevo to-do', description)
    .command('listar', 'Lista de to-do')
    .command('actualizar', 'Actualiza el estado completado de un to-do', { description, completed })
    .command('eliminar', 'Elimina un to-do según su descripción', description)
    .help()
    .argv;

module.exports = {
    argv
}