const express = require("express");
const app = express();
const cors = require("cors");

//para poder retornar Json como respuesta de los post requests
app.use(express.json());

const db = require("./models");

app.use(express.json());
app.use(cors());


//Routers
const cuentasRouter = require('./Controller/CuentasRoute')
app.use("/CuentasRoute", cuentasRouter);
const paquetesRouter = require('./Controller/PaquetesRoute')
app.use("/PaquetesRoute", paquetesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Servidor escuchando el puerto 3001");
  });
}).catch((err) => {
  console.log(err);
});
