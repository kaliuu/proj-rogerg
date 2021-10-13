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
        name: `${"1 ".green} Nova reserva`,
      },
      {
        value: "2",
        name: `${"2 ".green} Mostrar sala`,
      },
      {
        value: "3",
        name: `${"3 ".green} Mostrar recaudació`,
      },
      {
        value: "4",
        name: `${"4 ".green} Eliminar reserva`,
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
  console.log("======== CINE MAX =========".green);
  console.log("   Selecciona una opció    ");
  console.log("===========================".green);
  const { opcio } = await inq.prompt(menuPrincipal);

  return opcio;
};

const novaReserva = async (message) => {
  const question = [
    {
      type: "number",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0 || typeof value != "number") {
          return "No es un nom valid";
        }
        return true;
      },
    },
  ];
  const butaca = await inq.prompt(question);
  return butaca;
};

const mostrarSala = async (message) => {
  
}

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
  novaReserva,
  mostrarSala,
  confirmar,
  pausa,
};
