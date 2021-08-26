const { v4: uudiv4 } = require('uuid');

class Todo {
    id = "";
    description = "";
    dateFinished = null;

    constructor(description) {
        this.id = uudiv4();
        this.description = description;
        this.dateFinished = null;
    }
}

module.exports = Todo;