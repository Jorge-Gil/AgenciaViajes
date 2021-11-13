const express = require("express");
const router = express.Router();
const { Cuentas } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validarToken } = require("../middleware/MiddlewareAutenticacion");

router.get("/", async (req, res) => {
  const listaDeCuentas = await Cuentas.findAll();
  res.json(listaDeCuentas);
});

// //Función para Insertar una cuenta en la base de datos
// // Se hace un post request a la route de la cuenta
// //Debe ser asincrona porque debe esperar a que los datos sean insertados antes de seguir con la request o cualquier otra cosa.
// router.post("/", async (req, res) => {
//   //Se agarran los atributos de la cuenta por el body que se manda en el request
//   const Cuenta = req.body;
//   //Se le pasa un objeto con el mismo formato del modelo .create es una funcion de sequelize para insertar los datos en una tabla
//   await Cuentas.create(Cuenta);
//   // se retornan los mismos datos que se le mandan como respuesta al API request
//   res.json(Cuenta);
// });

// //Función para Insertar una cuenta en la base de datos
// // Se hace un post request a la route de la cuenta
// //Debe ser asincrona porque debe esperar a que los datos sean insertados antes de seguir con la request o cualquier otra cosa.
router.post("/", async (req, res) => {
  //Se crean un objeto con todos los atributos de la tabla y se agarran en el boy que se manda en el request
  const {
    NombreUsuario,
    Contrasenia,
    Nombre1Cuenta,
    Nombre2Cuenta,
    Apellido1Cuenta,
    Apellido2Cuenta,
    Genero,
    Cedula,
    DireccionCuenta,
    TelefonoCuenta,
    CelularCuenta,
  } = req.body;

  // Se le pasa la contraseña que es el atributo que se va a hashear para que se vea como una cadena de numeros y letras aleatorias
  bcrypt.hash(Contrasenia, 10).then((hash) => {
    //Se le pasa un objeto con el mismo formato del modelo .create es una funcion de sequelize para insertar los datos en una tabla
    Cuentas.create({
      NombreUsuario: NombreUsuario,
      Contrasenia: hash,
      Nombre1Cuenta: Nombre1Cuenta,
      Nombre2Cuenta: Nombre2Cuenta,
      Apellido1Cuenta: Apellido1Cuenta,
      Apellido2Cuenta: Apellido2Cuenta,
      Genero: Genero,
      Cedula: Cedula,
      DireccionCuenta: DireccionCuenta,
      TelefonoCuenta: TelefonoCuenta,
      CelularCuenta: CelularCuenta,
    });
    // se retornan los mismos datos que se le mandan como respuesta al API request
    res.json(`Cuenta registrada como ${NombreUsuario}`);
  });
});

router.post("/IniciarSesion", async (req, res) => {
  const { NombreUsuario, Contrasenia } = req.body;

  const Cuenta = await Cuentas.findOne({
    where: { NombreUsuario: NombreUsuario },
  });

  if (!Cuenta) res.json({ error: "El usuario no existe" });

  bcrypt.compare(Contrasenia, Cuenta.Contrasenia).then((igual) => {
    if (!igual) res.json({ error: "Contraseña incorrecta" });

    // se le pasan los datos que se quieren tener seguros y el jwt lo hashea
    const TokenAcceso = sign(
      { NombreUsuario: Cuenta.NombreUsuario, IdCuenta: Cuenta.IdCuenta },
      /*se le pasa una palabra secreta que protege al token*/ "Secreto"
    );

    res.json({
      token: TokenAcceso,
      NombreUsuario: NombreUsuario,
      IdCuenta: Cuenta.IdCuenta,
    });
  });
});

router.get("/Cuenta", validarToken, (req, res) => {
  res.json(req.Cuenta);
});

router.get("/InfoCuenta/:IdCuenta", async (req, res) => {
  const IdCuenta = req.params.IdCuenta;

  const InfoCuenta = await Cuentas.findByPk(IdCuenta, {
    attributes: { exclude: ["Contrasenia"] },
  });

  res.json(InfoCuenta);
});

router.put("/CambiarContrasenia", validarToken, async (req, res) => {
  const { contraseniaVieja, contraseniaNueva } = req.body;
  const Cuenta = await Cuentas.findOne({
    where: { IdCuenta: req.Cuenta.IdCuenta },
  });

  bcrypt.compare(contraseniaVieja, Cuenta.Contrasenia).then(async (igual) => {
    if (!igual) res.json({ error: "Contraseña incorrecta" });

    bcrypt.hash(contraseniaNueva, 10).then((hash) => {
      Cuentas.update(
        { Contrasenia: hash },
        { where: { IdCuenta: req.Cuenta.IdCuenta } }
      );
    });
  });
});

module.exports = router;
