const { STATUS_TODO } = require("../helpers/constants");
const Todo = require("./todo");


class Todos {
    _todos = {}

    constructor() {
        this._todos = {};
    }

    get getArray() {
        const todos = [];
        Object.keys(this._todos).forEach(id => todos.push(this._todos[id]));
        return todos;
    }

    addTodo(description = "") {
        const todo = new Todo(description);
        this._todos[todo.id] = todo;
    }

    fromArray(todos = []) {
        todos.forEach((todo) => {
            this._todos[todo.id] = todo;
        })
    }

    print(todos = []) {
        console.log();
        todos.forEach((todo, i) => {
            const idx = `${i + 1}`.green;
            const { detail } = todo;
            console.log(`${idx} ${detail}`);
        });
    }

    getAll() {
        return this.getArray.map((todo) => {
            const { description, dateFinished } = todo;
            const status = (dateFinished)
                ? STATUS_TODO.COMPLETE
                : STATUS_TODO.PENDING;
            let detail = `${description} :: ${status.description}`
            detail = dateFinished ? `${detail} :: ${dateFinished}` : detail;
            return { detail, status };
        });
    }

    getAllByStatus(statusId) {
        return this.getAll().filter(({ status }) => status.id === statusId);
    }

    deleteTodo(id = "") {
        if (this._todos[id]) delete this._todos[id];
    }

    toggleStatus(ids = []) {

        ids.forEach(id => {
            const todo = this._todos[id];
            if (!todo.dateFinished) todo.dateFinished = new Date().toISOString();
        })

        this.getArray.forEach(todo => {
            if (!ids.includes(todo.id)) {
                this._todos[todo.id].dateFinished = null;
            }
        })
    }
}

module.exports = Todos;