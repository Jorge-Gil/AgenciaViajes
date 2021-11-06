const fs = require("fs");

const Fotos_Paquetes = require("../models");
const Imagen = Fotos_Paquetes.images;

const subirImagenes = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`Debe seleccionar una imagen`);
    }

    Imagen.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(__basedir + "/Imagenes/" + req.file.filename),
    }).then((file) => {
      fs.writeFileSync(__basedir + "/Imagenes/" + file.name, file.data);

      return res.send(`La imagen ha sido guardada`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error al momento de subir la imagen: ${error}`);
  }
};

module.exports = {
   subirImagenes,
};
