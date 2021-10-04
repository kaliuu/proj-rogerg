const fs = require("fs");

function escribirArchivo(nom, variable) {
  fs.writeFile((nom + ".txt"), variable, function (err) {
    if (err) return (err);
    console.log("Guradat correctament!");
  });
}

module.exports = {
  escribirArchivo,
};
