const inquirer = require('inquirer')
require('colors')

const objectes = {
    [
    'type': 'list';
    'name': 'opcio';
    'message': 'que vols fer?';
    'choices': {
        {'value': '0', 'name': 'Opcio 1'},
        {'value': '1', 'name': 'Opcio 2'},
    ]
    }
}

inquirer.registerPrompt(preguntes, objectes)

const inquirer_menu = async() => {
    console.clear()
    console.log('====================')
    console.log('Selecciona una opció')
    console.log('====================')
        
}

