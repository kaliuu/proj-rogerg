// Funcions
const {
  menuInquirer,
  novaReserva,
  mostrarSala,
  pausa,
  confirmar,
} = require("./helpers/menu");
const { guardarTareas, llegirTareas } = require("./helpers/gestioDB");

const main = async () => {
  let opcio = "";
  const baseDades = llegirTareas();

  if (baseDades) {
    tareas.carregarTareasFromArray(baseDades);
  }

  do {
    opcio = await menuInquirer();
        
    await pausa();
  } while (opcio != 0);
};

main();
