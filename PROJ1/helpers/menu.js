const inq = require("inquirer");
const colors = require("colors");

const menuPrincipal = [
  {
    type: "list",
    name: "menuPrincipal",
    message: "Selecciona una opció:",
    choices: [
      {
        value: "1",
        name: `${"1 ".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2 ".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3 ".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4 ".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5 ".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6 ".green} Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0 ".green} Salir`,
      },
    ],
  },
];

const menuInquirer = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Selecciona una opció    ");
  console.log("===========================".green);
  const { opcio } = await inq.prompt(menuPrincipal);

  return opcio;
};

module.exports = {
  menuInquirer,
  menuPrincipal,
};
