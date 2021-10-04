const inquirer = require("inquirer");
const esc = require("./escriure");

inquirer
  .prompt([
    {
      name: "alumne",
      type: "input",
      message: "Introdueix el nom de l'alumne",
    },
    {
      name: "hores",
      type: "input",
      message: "Introdueix les hores",
    },
  ])
  .then((answer) => {
    let alumne = answer.alumne;
    let hores = answer.hores;
    if (alumne.length > 0 && hores.length > 0) {
      esc.escribirArchivo(alumne, hores);
    } else if (alumne.length == 0) {
      console.log("Error! No has respost el nom del alumne!");
    } else if (hores.length == 0) {
      console.log("Error! No has respost el nombre d'hores");
    }
  });
