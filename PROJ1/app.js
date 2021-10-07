require("colors");
const { menuInquirer } = require("./helpers/menu");

const main = async () => {
  opcio = await menuInquirer();

  switch (opcio) {
    case "1":
      console.log("Opcio 1");
      break;
    case "2":
      console.log("Opcio 2");
      break;
    default:
      break;
  }
};


main();
