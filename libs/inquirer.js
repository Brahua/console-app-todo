const inquirer = require('inquirer');
const { QUESTIONS } = require('../helpers/constants');
require('colors');


const init = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white);
    console.log('==========================\n'.green);

    const { option } = await inquirer.prompt(QUESTIONS.INIT);
    return option;
}

const pause = async () => {
    console.log('\n');
    await inquirer.prompt(QUESTIONS.PAUSE);
}

const readDescription = async () => {
    const { description } = await inquirer.prompt(QUESTIONS.ENTER_DESCRIPTION);
    return description;
}

const todosForDelete = async (todos = []) => {
    const choices = todos.map((todo, i) => {
        const idx = `${i + 1}`.green
        return {
            value: todo.id,
            name: `${idx} ${todo.description}`
        }
    })

    choices.unshift({
        value: 0,
        name: "0".green + " Cancelar"
    })

    QUESTIONS.TODO_OPTIONS_DELETE[0].choices = choices;

    const { id } = await inquirer.prompt(QUESTIONS.TODO_OPTIONS_DELETE);
    return id;
}

const todosForCheck = async (todos = []) => {
    const choices = todos.map((todo, i) => {
        const idx = `${i + 1}`.green
        return {
            value: todo.id,
            name: `${idx} ${todo.description}`,
            checked: !!todo.dateFinished,
        }
    })

    QUESTIONS.TODO_OPTIONS_CHECK[0].choices = choices;

    const { ids } = await inquirer.prompt(QUESTIONS.TODO_OPTIONS_CHECK);
    return ids;
}

const confirm = async () => {
    const { ok } = await inquirer.prompt(QUESTIONS.CONFIRM);
    return ok;
}

module.exports = {
    init,
    pause,
    readDescription,
    todosForDelete,
    todosForCheck,
    confirm
}