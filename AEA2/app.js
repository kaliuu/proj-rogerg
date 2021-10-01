#!/usr/bin/env node
var es = require('./escriure')

var { argv } = require("yargs")
  .scriptName("app.js")
  .usage("Us: $0 -n NOM -h HORES")
  .example(
    "$0 Marc 20",
    "Guarda al arxiu Marc.txt el numero 20")
  .option('n', {
    alias: "nom",
    describe: "El nom de l'alumne",
    demandOption: "El nom del alumne es necessari.",
    type: "string",
    nargs: 1
  })
  .option("h", {
    alias: "hores",
    describe: "Les hores del alumne",
    demandOption: "Es necessari especificar les hores",
    type: "string",
    nargs: 1
  });


const { nom, hores } = argv;
if(typeof nom == 'string' && typeof hores == 'string'){
   es.escribirArchivo(nom, hores);
}
