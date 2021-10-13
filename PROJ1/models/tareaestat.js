const Tarea = require("./tarea");
require("colors");

class TareaEstat {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const tarea = this._llista[key];
      llistat.push(tarea);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearTarea(nom = "", estat) {
    const tarea = new Tarea(nom, estat);
    this._llista[tarea.id] = tarea;
  }

  carregarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._llista[tarea.id] = tarea;
    });
  }

  llistarTareas(condicio) {
    console.log();
    let cont = 1;
    if (condicio == null) {
      this.llistatArr.forEach((tarea) => {
        const { nom, feta } = tarea;
        const estat = feta ? `✔`.green : `✘`.red;
        cont += 1;
        console.log(`${(cont + ".").green} ${estat} ${(nom + "").cyan}`);
      });
    } else {
      this.llistatArr.forEach((tarea) => {
        const { nom, feta } = tarea;
        const estat = feta ? `✔`.green : `✘`.red;
        if (feta == condicio) {
          cont += 1;
          console.log(`${(cont + ".").green} ${estat} ${(nom + "").cyan}`);
        }
      });
    }
  }

  async canviarEstat(id) {
    console.log(id)
    const tarea = this._llista[id];
    console.log(tarea)
    tarea.feta = true;
  }

  async elimiarTarea(id) {
    delete this._llista[id];
  }
}

module.exports = TareaEstat;
