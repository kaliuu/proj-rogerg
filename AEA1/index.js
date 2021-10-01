const escriure = require('./escriure');

let nom = process.argv[2];
let hores = process.argv[3];

escriure.escribirArchivo(nom, hores)
