// Funcions
const {
  menuInquirer,
  novaTarea,
  pausa,
  confirmar,
  seleccionaTarea,
  seleccionaTareas
} = require("./helpers/menu");
const { guardarTareas, llegirTareas } = require("./helpers/gestioDB");

// Delcarem els objectes
const TareaEstat = require("./models/tareaestat");
const Tarea = require("./models/tarea");

const main = async () => {
  let opcio = "";
  const tareas = new TareaEstat();
  const baseDades = llegirTareas();

  if (baseDades) {
    tareas.carregarTareasFromArray(baseDades);
  }

  do {
    opcio = await menuInquirer();
    switch (opcio) {
      case "1":
        const nomTarea = await novaTarea("Nombre:");
        tareas.crearTarea(nomTarea, false);
        break;
      case "2":
        tareas.llistarTareas();
        break;
      case "3":
        tareas.llistarTareas(true);
        break;
      case "4":
        tareas.llistarTareas(false);
        break;
      case "5":
        const tareasSeleccionadas = await seleccionaTareas(tareas.llistatArr); 
        for (let tarea in tareasSeleccionadas['id']){
          tareas.canviarEstat(tareasSeleccionadas['id'][tarea]);
        }
        break;
      case "6":
        const id = await seleccionaTarea(tareas.llistatArr);
        if (id != 0) {
          let si = await confirmar("Estas seguro?");
          if (si) {
            tareas.elimiarTarea(id);
            console.log("Tarea eliminada");
          } else {break;}
        }
      default:
        break;
    }

    guardarTareas(tareas.llistatArr);

    await pausa();
  } while (opcio != 0);
};

main();
