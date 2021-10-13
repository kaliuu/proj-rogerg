const inq = require("inquirer");
require("colors");

const menuPrincipal = [
  {
    type: "list",
    name: "opcio",
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

const novaTarea = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor introduzca el nombre de la tarea";
        }
        return true;
      },
    },
  ];
  const { nom } = await inq.prompt(question);
  return nom;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inq.prompt(question);
};

const seleccionaTarea = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    return {
      value: tarea.id,
      name: `${tarea.nom}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0. ".green + "Cancel·lar",
  });

  const pregunta = [
    {
      type: "list",
      name: "id",
      message: "Selecciona tarea",
      choices,
    },
  ];

  const { id } = await inq.prompt(pregunta);
  return id;
};

const seleccionaTareas = async (tareas = []) => {
  const choices = tareas.map((tarea) => {
    return {
      value: tarea.id,
      name: `${tarea.nom}`,
    };
  });

  const pregunta = [
    {
      type: "checkbox",
      name: "id",
      message: "Selecciona las tareas",
      choices,
    },
  ];

  const ids = await inq.prompt(pregunta);
  return ids;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inq.prompt(question);
  return ok;
};

module.exports = {
  menuInquirer,
  novaTarea,
  seleccionaTarea,
  seleccionaTareas,
  confirmar,
  pausa,
};
