const path = require("path");

const verImagen = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../Cliente/src/Vistas/Administrador.js`));
};

module.exports = {
  getVerImagen: verImagen
};
