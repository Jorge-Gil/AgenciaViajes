const express = require("express");
const router = express.Router();
const { Habitaciones ,Hoteles, Tipos_Habitaciones } = require("../models");

router.get("/", async (req, res) => {
  const todasLasHabitaciones = await Habitaciones.findAll({ include: [Hoteles,Tipos_Habitaciones]});
  res.json(todasLasHabitaciones);
});



module.exports = router;
