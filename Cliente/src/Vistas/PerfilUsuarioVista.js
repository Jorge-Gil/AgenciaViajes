import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Autorizacion } from "../Autorizacion";

function PerfilUsuarioVista() {
  let { IdCuenta } = useParams();
  const [NombreUsuario, setNombreUsuario] = useState("");
  const { estadoAutorizacion } = useContext(Autorizacion);

  const [mostrarCambiarContrasenia, setMostarCambiarContrasenia] =
    useState(false);

  const [contraseniaVieja, setContraseniaVieja] = useState("");
  const [contraseniaNueva, setContraseniaNueva] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Cuentas/InfoCuenta/${IdCuenta}`)
      .then((respuesta) => {
        setNombreUsuario(respuesta.data.NombreUsuario);
      });
  }, []);

  const cambiarContrasenia = () => {
    axios
      .put(
        "http://localhost:3001/Cuentas/CambiarContrasenia",
        {
          contraseniaVieja: contraseniaVieja,
          contraseniaNueva: contraseniaNueva,
        },
        {
          headers: {
            TokenAcceso: localStorage.getItem("TokenAcceso"),
          },
        }
      )
      .then((respuesta) => {
        if (respuesta.data.error) {
          alert(respuesta.data.error);
        }
        else{
        alert("Contraseña cambiada con exito");}
      });
  };

  return (
    <div>
      <div>{NombreUsuario}</div>
      {estadoAutorizacion.NombreUsuario === NombreUsuario && (
        <div>
          <button
            id="toggleCambiarContrasenia"
            onClick={() => {
              setMostarCambiarContrasenia(!mostrarCambiarContrasenia);
            }}
          >
            Cambiar Contraseña
          </button>
          <div>
            {mostrarCambiarContrasenia ? (
              <>
                <label>Contraseña Actual: </label>
                <input
                  type="text"
                  placeholder="Contraseña Actual"
                  onChange={(event) => {
                    setContraseniaVieja(event.target.value);
                  }}
                />
                <label>Nueva Contraseña: </label>
                <input type="text" placeholder="Nueva Contraseña"  onChange={(event) => {
                    setContraseniaNueva(event.target.value);
                  }}/>

                  <button onClick={cambiarContrasenia}>Guardar cambios</button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default PerfilUsuarioVista;
