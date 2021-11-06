const express = require("express");
const router = express.Router();
const { Tipos_Habitaciones } = require("../models");

router.get("/", async (req, res) => {
  const todosLosTiposHabitaciones = await Tipos_Habitaciones.findAll();
  res.json(todosLosTiposHabitaciones);
});


module.exports = router;
