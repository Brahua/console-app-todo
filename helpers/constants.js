const QUESTIONS = {
    INIT: [
        {
            type: 'list',
            name: 'option',
            message: '¿Qué desea hacer?',
            choices: [
                {
                    value: '1',
                    name: `${'1.'.green} Crear tarea`
                },
                {
                    value: '2',
                    name: `${'2.'.green} Listar tareas`
                },
                {
                    value: '3',
                    name: `${'3.'.green} Listar tareas completadas`
                },
                {
                    value: '4',
                    name: `${'4.'.green} Listar tareas pendientes`
                },
                {
                    value: '5',
                    name: `${'5.'.green} Completar tarea(s)`
                },
                {
                    value: '6',
                    name: `${'6.'.green} Borrar tarea`
                },
                {
                    value: '0',
                    name: `${'0.'.green} Salir`
                },

            ]
        }
    ],
    PAUSE: [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ],
    ENTER_DESCRIPTION: [
        {
            type: 'input',
            name: 'description',
            message: 'Descripción: ',
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor, ingrese un valor'
                }
                return true;
            }
        }
    ],
    TODO_OPTIONS_DELETE: [
        {
            type: "list",
            name: "id",
            message: "Borrar",
            choices: [],
        }
    ],
    TODO_OPTIONS_CHECK: [
        {
            type: "checkbox",
            name: "ids",
            message: "Seleccione",
            choices: [],
        }
    ],
    CONFIRM: [
        {
            type: "confirm",
            name: "ok",
            message: "¿Estás seguro de realizar esta acción?"
        }
    ]
}

const STATUS_TODO = {
    COMPLETE: { id: 1, description: 'Completada'.green },
    PENDING: { id: 0, description: 'Pendiente'.red },
}

module.exports = { QUESTIONS, STATUS_TODO };