import React, { useState } from "react";
import axios from "axios";

function InicioSesion() {
  //Tiene el valor para el nombre de usuario que se escribe en el input
  const [NombreUsuario, setNombreUsuario] = useState("");
  const [Contrasenia, setContrasenia] = useState("");

  const IniciarSesion = () => {
    // ya que no hay ningun dato aqui de la base de datos hay que crearlo y se le pasa al post request, esos datos son los mismos del state de arriba
    const data = { NombreUsuario: NombreUsuario, Contrasenia: Contrasenia };
    axios
      .post("http://localhost:3001/Cuentas/IniciarSesion", data)
      .then((respuesta) => {
        // si hay algun error con el inicio de sesion se le alerta al usuario
        if (respuesta.data.error) {
          alert(respuesta.data.error);
        }

        // si el usuario se logea correctamente se guarda el token de acceso en el local Storage del navegador
        else {
          localStorage.setItem("TokenAcceso", respuesta.data);
          alert(`Sesión iniciada como ${NombreUsuario}`);
        }
      });
  };

  // en onChange={(event) => {setNombreUsuario(event.target.value)}} y el de la contraseña se cambia el state a lo que haya escrito en el input en ese momento
  return (
    <div className="ContenedorInicioSesion">
      <label>Nombre de Usuario:</label>
      <input
        type="text"
        onChange={(event) => {
          setNombreUsuario(event.target.value);
        }}
      />
      <label> Contraseña:</label>
      <input
        type="password"
        onChange={(event) => {
          setContrasenia(event.target.value);
        }}
      />
      <button onClick={IniciarSesion}>Iniciar Sesión</button>
    </div>
  );
}

export default InicioSesion;
