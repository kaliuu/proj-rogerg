const fs = require("fs");

// Declaro el fitxer
const fitxer = "./db/tareas.json";

// Dos formes d'interactuar amb JSON:
//  - Stringify passa strings de JS a JSON
//  - Parse passa strings JSON a JS


const guardarTareas = (data) => {
  fs.writeFileSync(fitxer, JSON.stringify(data));
};

const llegirTareas = () => {
  if (!fs.existsSync(fitxer)) {
    return null;
  }

  const info = fs.readFileSync(fitxer, { encoding: 'utf-8' });
  const data = JSON.parse(info);

  console.log(data)
  return data;
};


module.exports = {
  guardarTareas,
  llegirTareas,
};
