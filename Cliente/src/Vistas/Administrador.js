import React from "react";
import { useHistory } from "react-router-dom";

function Administrador() {
  let history = useHistory();

  const pushAgregarPaquete = () => {
    history.push("/agregarPaquete");
  };

  const pushAgregarHotel = () => {
    history.push("/agregarHotel");
  };

  return (
    <div>
      <h1>Funciones del administrador:</h1>
      <button id="agregarPaquete" onClick={pushAgregarPaquete}>
        Agregar o modificar paquetes turísticos
      </button>

      <button id="agregarHotel" onClick={pushAgregarHotel}>
        Agregar o modificar hoteles
      </button>
    </div>
  );
}

export default Administrador;
