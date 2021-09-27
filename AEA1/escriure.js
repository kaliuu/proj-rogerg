const fs = require('fs');

function escribirArchivo(nom, variable) {
    fs.writeFile((nom + '' + variable).txt, variable)
}