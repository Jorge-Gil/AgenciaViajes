// se obtiene el token que se manda del frontend, se valida con la función verify de JWT, si lo es se continua con el request y se agrega a lo que retorna para la base de datos,
// si no lo es se manda un error diciendo que el usuario no está autenticado
// req para obtener algo del request, res para mandar una respuesta y next se llama cuando se quiere que el request siga adelante. Esta función corre antes de algún request del backend

const { verify } = require("jsonwebtoken");

const validarToken = (req, res, next) => {
  //se pasa por los headers que son un objeto que existe en el request
  const TokenAcceso = req.header("TokenAcceso");

  if (!TokenAcceso)
    return res.json({ error: "El usuario no ha iniciado sesión" });

  try {
    // Se verifica el token que llega del request y se compara con el secreto con el que se creo el token
    const TokenValido = verify(TokenAcceso, "Secreto");

    if (TokenValido) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validarToken };
