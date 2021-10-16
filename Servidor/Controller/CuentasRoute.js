const express = require("express");
const router = express.Router();
const { Cuentas } = require("../models");

router.get("/", async (req, res) => {
  const listaDeCuentas = await Cuentas.findAll();
  res.json(listaDeCuentas);
});

//Función para Insertar una cuenta en la base de datos
// Se hace un post request a la route de la cuenta
//Debe ser asincrona porque debe esperar a que los datos sean insertados antes de seguir con la request o cualquier otra cosa.
router.post("/", async (req, res) => {
  //Se agarran los atributos de la cuenta por el body que se manda en el request
  const Cuenta = req.body;
  //Se le pasa un objeto con el mismo formato del modelo .create es una funcion de sequelize para insertar los datos en una tabla
  await Cuentas.create(Cuenta);
  // se retornan los mismos datos que se le mandan como respuesta al API request
  res.json(Cuenta);
});

module.exports = router;
