import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function AgregarPaqueteVista() {
  const [listaDeHoteles, setListaDeHoteles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Hoteles/").then((respuesta) => {
      console.log(respuesta.data);
      setListaDeHoteles(respuesta.data);
    });
  }, []);

  const insertarPaquete = (data) => {
    axios
      .post("http://localhost:3001/Paquetes/InsertarPaquete", {
        // NombrePaquete: NombrePaquete,
        // PrecioPaquete: PrecioPaquete,
        // FechaInicio: FechaInicio,
        // FechaFin: FechaFin,
        // Hoteles: Hoteles,
      })
      .then(() => {
        console.log(data);
        alert("Paquete añadido con éxito :D");
      });
  };

  return (
    <div className="funcionesAdmin">
      <div className="agregarPaquete">
        Agregar paquetes turísticos
        <div className="contenedorAgregarPaquete">
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

          <select>
           {/* for (let i = 0; i < listaDeHoteles.length; i++) {
              <option value={listaDeHoteles[i].idHotel}>{listaDeHoteles.nombreHotel}</option>

           } */}


              {listaDeHoteles.map((value, key) => {
                return (<option value={value.idHotel}>{value.NombreHotel}</option>)
                
               
              })}
           
          </select>

          {/* <select>
            <option value="">Seleccione un hotel</option>
            <option value={"uwu"}>asd</option>
          </select> */}

          <input type="file" name="file" accept="image/*" />
          <input type="submit" value="Subir imagen" />
          <button id="botonAgregarPaquete" onClick={insertarPaquete}>
            Agregar Paquete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgregarPaqueteVista;
