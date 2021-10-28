import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Administrador() {
  let history = useHistory();

  const pushAgregarPaquete = () => {
    history.push("/agregarPaquete");
  };

  const pushAgregarHotel = () => {
    history.push("/agregarHotel");
  };

  const [mostrarPaquete, setMostarPaquete] = useState(false);
  const [mostrarModificarPaquete, setMostarModificarPaquete] = useState(false);
  const [mostrarHotel, setMostrarHotel] = useState(false);
  const [mostrarModificarHotel, setMostrarModificarHotel] = useState(false);
  const [mostrarCategoria, setMostrarCategoria] = useState(false);

  return (
    <div>
      <h1>Funciones del administrador:</h1>
      <div className="agregarPaquete">
        <button
          id="agregarPaquete"
          onClick={() => {
            setMostarPaquete(!mostrarPaquete);
          }}
        >
          Agregar paquetes turísticos
        </button>
        {mostrarPaquete ? (
          <>
            <label>Nombre del Paquete: </label>
            <input type="text" />
            <label>Descripcion del Paquete: </label>
            <input type="text" />
            <label>Precio del Paquete: </label>
            <input type="text" />
            <label>Fecha de inicio del Paquete: </label>
            <input type="text" placeholder="YYYY-MM-DD hh:mm:ss" />
            <label>Fecha de fin del Paquete: </label>
            <input type="text" placeholder="YYYY-MM-DD hh:mm:ss" />
          </>
        ) : null}
      </div>

      <div className="modificarPaqute">
        <button
          id="modificarPaquete"
          onClick={() => {
            setMostarModificarPaquete(!mostrarModificarPaquete);
          }}
        >
          Modificar paquetes turísticos
        </button>
        {mostrarModificarPaquete ? (
          <>
            <h2>adasdad</h2>
            <h2>cosas de paquetes para modificar asdas</h2>
            <h2>cosas de paquetes para modificar 2a asdada</h2>
          </>
        ) : null}
      </div>

      <div className="agregarHotel">
        <button
          id="agregarHotel"
          onClick={() => {
            setMostrarHotel(!mostrarHotel);
          }}
        >
          Agregar hoteles
        </button>

        {mostrarHotel ? (
          <>
            <h2>adasdad</h2>
            <h2>cosas de los hoteles asdas</h2>
            <h2>cosas de los hoteles 2a asdada</h2>
          </>
        ) : null}
      </div>

      <div className="modificarHotel">
        <button
          id="modificarHotel"
          onClick={() => {
            setMostrarModificarHotel(!mostrarModificarHotel);
          }}
        >
           Modificar hoteles
        </button>

        {mostrarModificarHotel ? (
          <>
            <h2>adasdad</h2>
            <h2>cosas de los hoteles a modificar asdas</h2>
            <h2>cosas de los hoteles a modificar 2a asdada</h2>
          </>
        ) : null}
      </div>

      <div className="agregarCategoria">
        <button
          id="agregarCategoria"
          onClick={() => {
            setMostrarCategoria(!mostrarCategoria);
          }}
        >
          Agregar o modificar categorias
        </button>
        {mostrarCategoria ? (
          <>
            <h2>adasdad</h2>
            <h2>cosas de las categorias asdas</h2>
            <h2>cosas de las categorias 2a asdada</h2>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Administrador;
