const express = require("express");
const router = express.Router();
const { Habitaciones ,Hoteles, Tipos_Habitaciones } = require("../models");

router.get("/", async (req, res) => {
  const todasLasHabitaciones = await Habitaciones.findAll({ include: [Hoteles,Tipos_Habitaciones]});
  res.json(todasLasHabitaciones);
});

router.get("/HabitacionesPorIdHotel/:IdHotelf", async (req, res) => {
  const IdHotel= req.params.IdHotelf;
  const todasLasHabitacionesPorIdHotel = await Habitaciones.findAll({where:{ IdHotelf :IdHotel}, include: [Hoteles,Tipos_Habitaciones]});
  res.json(todasLasHabitacionesPorIdHotel);
});

module.exports = router;
