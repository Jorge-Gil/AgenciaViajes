const express = require("express");
const router = express.Router();
const { Hoteles } = require("../models");

router.get("/", async (req, res) => {
  const todosLosHoteles = await Hoteles.findAll();
  res.json(todosLosHoteles);
});

// Se hace un post request a la route de la categoria
//Debe ser asincrona porque debe esperar a que los datos sean insertados antes de seguir con la request o cualquier otra cosa.
router.post("/InsertarHotel", async (req, res) => {
  //Se agarran los atributos de la categoria por el body que se manda en el request
  const Hotel = req.body;
  //Se le pasa un objeto con el mismo formato del modelo .create es una funcion de sequelize para insertar los datos en una tabla
  await Hoteles.create(Hotel);
  // se retornan los mismos datos que se le mandan como respuesta al API request
  res.json(Hotel) + "Hotel Insertado";
});

module.exports = router;
