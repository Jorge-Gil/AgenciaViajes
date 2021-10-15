const express = require("express");
const router = express.Router();
const { Paquetes_Turisticos } = require("../models");

router.get("/", async (req, res) => {
  const todosLosPaquetes = await Paquetes_Turisticos.findAll();
  res.json(todosLosPaquetes);
});

// Se hace un post request a la route de la cuenta
//Debe ser asincrona porque debe esperar a que los datos sean insertados antes de seguir con la request o cualquier otra cosa.
router.post("/", async (req, res) => {
  //Se agarran los atributos de la cuenta por el body que se manda en el request
  const Paquete_Turistico = req.body;
  //Se le pasa un objeto con el mismo formato del modelo .create es una funcion de sequelize para insertar los datos en una tabla
  await Paquetes_Turisticos.create(Paquete_Turistico);
  // se retornan los mismos datos que se le mandan como respuesta al API request
  res.json(Paquete_Turistico);
});

module.exports = router;
