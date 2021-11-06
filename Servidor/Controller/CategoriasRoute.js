const express = require("express");
const router = express.Router();
const { Categorias } = require("../models");

router.get("/", async (req, res) => {
  const todasLasCategorias = await Categorias.findAll();
  res.json(todasLasCategorias);
});

// Se hace un post request a la route de la categoria
//Debe ser asincrona porque debe esperar a que los datos sean insertados antes de seguir con la request o cualquier otra cosa.
router.post("/InsertarCategoria", async (req, res) => {
  //Se agarran los atributos de la categoria por el body que se manda en el request
  const Categoria = req.body;
  //Se le pasa un objeto con el mismo formato del modelo .create es una funcion de sequelize para insertar los datos en una tabla
  await Categorias.create(Categoria);
  // se retornan los mismos datos que se le mandan como respuesta al API request
  res.json(Categoria) + "Categoria Insertada";
});

module.exports = router;
