require('colors');

const { write, read } = require('./util/file');
const {
    init,
    pause,
    readDescription,
    todosForDelete,
    todosForCheck,
    confirm,
} = require('./libs/inquirer');

const Todos = require('./models/todos');
const { STATUS_TODO } = require('./helpers/constants');


const main = async () => {

    let selectedOption = '';
    const todos = new Todos();
    const todosDB = read();
    if (todosDB) todos.fromArray(todosDB)

    do {
        selectedOption = await init();

        switch (selectedOption) {
            case '1':
                const description = await readDescription();
                todos.addTodo(description);
                break;
            case '2':
                const allTodos = todos.getAll();
                todos.print(allTodos);
                break;
            case '3':
                const todosComplete = todos.getAllByStatus(STATUS_TODO.COMPLETE.id);
                todos.print(todosComplete);
                break;
            case '4':
                const todosPending = todos.getAllByStatus(STATUS_TODO.PENDING.id);
                todos.print(todosPending);
                break;
            case '5':
                const ids = await todosForCheck(todos.getArray);
                todos.toggleStatus(ids);
                console.log("\nTareas actualizadas correctamente".green)
                break;
            case '6':
                const id = await todosForDelete(todos.getArray);
                if (id === 0) break;
                const ok = await confirm();
                if (ok) { todos.deleteTodo(id); console.log("\nTarea eliminada correctamente".green) };
                break;

        }

        write(todos.getArray);
        await pause();

    } while (selectedOption !== '0');

}


main();

