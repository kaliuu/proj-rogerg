const fs = require("fs");

// Declaro el fitxer
const fitxer = "./db/tareas.json";

// Dos formes d'interactuar amb JSON:
//  - Stringify passa strings de JS a JSON
//  - Parse passa strings JSON a 


const guardarTarea = (data) => {
  fs.write(fitxer, JSON.stringify(data));
};

const llegirTareas = () => {
  if (!fs.existsSync(fitxer)) {
    return null;
  }

  const info = fs.readSync(fitxer, { encoding: 'utf-8' });
  const data = JSON.parse(fitxer)
};


module.exports = {
  guardarTarea,
  llegirTareas,
};
