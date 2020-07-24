const fs = require('fs');

let listToDo = [];

const load = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const save = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo guardar', err);
    })
}

const create = (description) => {
    load();
    let task = {
        description,
        completed: false
    };
    listToDo.push(task);
    save();
    return task;
}

const getList = () => {
    load();
    return listToDo;
}

const update = (description, completed = true) => {
    load();
    let index = listToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listToDo[index].completed = completed;
        save();
        return true;
    } else {
        return false;
    }
}

const deleted = (description) => {
    load();
    let newList = listToDo.filter(task => task.description !== description);
    if (listToDo.length === newList.length) {
        return false;
    } else {
        listToDo = newList;
        save();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    deleted
}