const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  feta = false;
  nom = "";
  constructor(nom, estat) {
    this.id = uuidv4();
    this.nom = nom;
    this.feta = estat;
  }
}

module.exports = Tarea;
