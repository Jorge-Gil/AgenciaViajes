import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AgregarCategoria from "./AgregarCategoria";

function Administrador() {
  let history = useHistory();

  const pushAgregarPaquete = () => {
    history.push("/agregarPaquete");
  };

  const pushAgregarHotel = () => {
    history.push("/agregarHotel");
  };
  const pushAgregarCategoria = () => {
    history.push("/agregarCategoria");
  };

  const [mostrarPaquete, setMostarPaquete] = useState(false);
  const [mostrarModificarPaquete, setMostarModificarPaquete] = useState(false);
  const [mostrarHotel, setMostrarHotel] = useState(false);
  const [mostrarModificarHotel, setMostrarModificarHotel] = useState(false);
  const [mostrarCategoria, setMostrarCategoria] = useState(false);

  const [categoria, setCategoria] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  const insertarPaquete = (data) => {
    axios
      .post("http://localhost:3001/Paquetes/InsertarPaquete", data)
      .then(() => {
        console.log(data);
        alert("Paquete añadido con éxito :D");
      });
  };

  // const insertarCategoria = () => {
  //   axios
  //     .post("http://localhost:3001/Categorias/InsertarCategoria", {nombreCategoria: nuevaCategoria})
  //     .then((response) => {
  //       if (response.data.error) {
  //         console.log(response.data.error);
  //       } else {
  //         const categoriaParaAgregar = {
  //           NombreCategoria: nuevaCategoria,
  //         };
  //         setCategoria([...categoria,categoriaParaAgregar]);
  //         setNuevaCategoria("");
  //       }
  //     });
  // };

  const insertarCategoria = (data) => {
    axios
      .post("http://localhost:3001/Categorias/InsertarCategoria", data)
      .then(() => {
        console.log(data);
        alert("Categoria añadida Correctamente");
      });
  };

  const valoresInicialesCategoria = {
    NombreCategoria: "",
  };

  const validacionCategoria = Yup.object().shape({
    NombreCategoria: Yup.string()
      .min(
        3,
        "El nombre de la categoría debe contener como mínimo 3 caracteres"
      )
      .max(
        20,
        "El nombre de la categoría debe contener como máximo 20 caracteres"
      )
      .required("Nombre de la categoría es un campo requerido"),
  });

  const onSubmitCategoria = (data) => {
    axios
      .post("http://localhost:3001/Categorias/InsertarCategoria", data)
      .then(() => {
        console.log(data);
        alert("Categoria agregada exitosamente");
      });
  };

  const valoresInicialesHotel = {
    NombreHotel: "",
    PrecioPorNoche: "",
    DireccionHotel: "",
  };

  const validacionHotel = Yup.object().shape({
    NombreHotel: Yup.string()
      .min(3, "El nombre del Hotel debe contener como mínimo 3 caracteres")
      .max(30, "El nombre del hotel debe contener como máximo 20 caracteres")
      .required("Nombre del hotel es un campo requerido"),
    PrecioPorNoche: Yup.number()
      .min(1, "El precio por noche debe ser mayor a 0")
      .max(1000000, "El precio por noche debe ser menor a 1000000")
      .required("Precio por noche es un campo requerido"),
      DireccionHotel:Yup.string()
      .min(3, "La dirección del Hotel debe contener como mínimo 3 caracteres")
      .max(30, "La dirección del hotel debe contener como máximo 30 caracteres")
      .required("La dirección del hotel es un campo requerido"),
  });

  const onSubmitHotel = (data) => {
    axios
      .post("http://localhost:3001/Hoteles/InsertarHotel", data)
      .then(() => {
        console.log(data);
        alert("Hotel agregado exitosamente");
      });
  };

  return (
    <div className="funcionesAdmin">
      <h1>Funciones del administrador:</h1>

      <Router>
        <div className="botonesAdmin">
          <button onClick={pushAgregarCategoria}> IR Agregar Categoria</button>
          <Switch>
            <Route
              path="/agregarCategoria"
              exact
              component={AgregarCategoria}
            />
          </Switch>
        </div>
      </Router>

      <div className="agregarCategoria">
        <button
          id="toggleAgregarCategoria"
          onClick={() => {
            setMostrarCategoria(!mostrarCategoria);
          }}
        >
          Agregar Categoria
        </button>

        {mostrarCategoria ? (
          <>
            <Formik
              initialValues={valoresInicialesCategoria}
              validationSchema={validacionCategoria}
              onSubmit={onSubmitCategoria}
            >
              <Form className="agregarCategoriaForm">
                <div className="contenedorAgregarCategoria">
                  <label>Nombre de la Categoria: </label>
                  <ErrorMessage name="NombreCategoria" component="span" />
                  <Field
                    autoComplete="off"
                    id="formatoAgregarCategoria"
                    name="NombreCategoria"
                  />

                  <button type="submit">Agregar Categoria</button>
                </div>
              </Form>
            </Formik>
          </>
        ) : null}
      </div>

      <div className="agregarHotel">
        <button
          id="toggleAgregarHotel"
          onClick={() => {
            setMostrarHotel(!mostrarHotel);
          }}
        >
          Agregar hoteles
        </button>

        {mostrarHotel ? (
          <>
           <Formik
              initialValues={valoresInicialesHotel}
              validationSchema={validacionHotel}
              onSubmit={onSubmitHotel}
            >
              <Form className="agregarCategoriaForm">
                <div className="contenedorAgregarCategoria">
                  <label>Nombre del hotel: </label>
                  <ErrorMessage name="NombreHotel" component="span" />
                  <Field
                    autoComplete="off"
                    id="formatoAgregarHotel"
                    name="NombreHotel"
                  />

                  <label>Precio por noche: </label>
                  <ErrorMessage name="PrecioPorNoche" component="span" />
                  <Field
                    autoComplete="off"
                    id="formatoAgregarHotel"
                    name="PrecioPorNoche"
                  />

                  <label>Dirección del hotel: </label>
                  <ErrorMessage name="DireccionHotel" component="span" />
                  <Field
                    autoComplete="off"
                    id="formatoAgregarHotel"
                    name="DireccionHotel"
                  />

                  <button type="submit">Agregar Hotel</button>
                </div>
              </Form>
            </Formik>
          </>
        ) : null}
      </div>
      <div className="agregarPaquete">
        <button
          id="toggleAgregarPaquete"
          onClick={() => {
            setMostarPaquete(!mostrarPaquete);
          }}
        >
          Agregar paquetes turísticos
        </button>
        {mostrarPaquete ? (
          <>
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
              <label>Imagen Paquete: </label>
              <input type="file" name="file" accept="image/*" />
              <input type="submit" value="Subir imagen" />
              <button id="botonAgregarPaquete" onClick={insertarPaquete}>
                Agregar Paquete
              </button>
            </div>
          </>
        ) : null}
      </div>
      <div className="modificarPaqute">
        <button
          id="toggleModificarPaquete"
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

      <div className="modificarHotel">
        <button
          id="toggleModificarHotel"
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
    </div>
  );
}

export default Administrador;
