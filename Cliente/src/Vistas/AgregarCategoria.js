import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AgregarCategoria() {
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
  return (
    <div>
      <Formik
        initialValues={valoresInicialesCategoria}
        validationSchema={validacionCategoria}
        onSubmit={onSubmitCategoria}
      >
        <Form className="agregarCategoriaForm">
          <label>Nombre de la Categoria: </label>
          <ErrorMessage name="NombreCategoria" component="span" />
          <Field
            autoComplete="off"
            id="formatoAgregarCategoria"
            name="NombreCategoria"
          />
          <button type="submit">Agregar Categoria</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AgregarCategoria;
