const express = require("express");
const app = express();
const cors = require("cors");

//para poder retornar Json como respuesta de los post requests
app.use(express.json());
app.use(cors());

const db = require("./models");





//Routers
const cuentasRouter = require('./Controller/CuentasRoute')
app.use("/Cuentas", cuentasRouter);
const paquetesRouter = require('./Controller/PaquetesRoute')
app.use("/Paquetes", paquetesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Servidor escuchando el puerto 3001");
  });
}).catch((err) => {
  console.log(err);
});
