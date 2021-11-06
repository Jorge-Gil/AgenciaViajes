const express = require("express");
const router = express.Router();
const { Fotos_Paquetes } = require("../models");
const verImagenController = require("./verImagenController");
const SubirImagenController = require("./SubirImagenController");
const SubirImagen = require("../middleware/SubirImagen");

router.get("/", async (req, res) => {
  const todosLasFotosPaquetes = await Fotos_Paquetes.findAll();
  res.json(todosLasFotosPaquetes);
});

// Se hace un post request a la route de la cuenta
//Debe ser asincrona porque debe esperar a que los datos sean insertados antes de seguir con la request o cualquier otra cosa.
router.post("/", async (req, res) => {
  //Se agarran los atributos de la cuenta por el body que se manda en el request
  const Fotos_Paquetes = req.body;
  //Se le pasa un objeto con el mismo formato del modelo .create es una funcion de sequelize para insertar los datos en una tabla
  await Fotos_Paquetes.create(Fotos_Paquetes);
  // se retornan los mismos datos que se le mandan como respuesta al API request
  res.json(Fotos_Paquetes);
});

// //route for Home page
// router.get('/', (req, res) => {
//   res.sendFile(__dirname + '/Administrador');
// });

router.get("/", verImagenController.getVerImagen);

router.post("/subirImagen", SubirImagen.single("file"), SubirImagenController.subirImagenes);

module.exports = router;
