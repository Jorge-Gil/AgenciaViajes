import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registro() {
  const valoresIniciales = {
    NombreUsuario: "",
    Contrasenia: "",
    Nombre1Cuenta: "",
    Nombre2Cuenta: "",
    Apellido1Cuenta: "",
    Apellido2Cuenta: "",
    Genero: "",
    Cedula: "",
    DireccionCuenta: "",
    TelefonoCuenta: "",
    CelularCuenta: "",
  };

  const validacion = Yup.object().shape({
    NombreUsuario: Yup.string().min(3).max(20).required(),
    Contrasenia: Yup.string().min(3).max(20).required(),
    Nombre1Cuenta: Yup.string().min(3).max(20).required(),
    Nombre2Cuenta: Yup.string().min(3).max(20).notRequired(),
    Apellido1Cuenta: Yup.string().min(3).max(20).required(),
    Apellido2Cuenta: Yup.string().min(3).max(20).notRequired(),
    Genero: Yup.string().min(3).max(15).required(),
    Cedula: Yup.string().min(3).max(20).required(),
    DireccionCuenta: Yup.string().min(3).max(40).required(),
    TelefonoCuenta: Yup.string().min(3).max(12).required(),
    CelularCuenta: Yup.string().min(3).max(10).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/Cuentas", data).then(() => {
      console.log(data);
      alert("Registrado Correctamente");
    });
  };

  // const opciones = (valores) => {
  //   const { Generos } = valores;
  // };
  return (
    <div className="Registro">
      <Formik
        initialValues={valoresIniciales}
        validationSchema={validacion}
        onSubmit={onSubmit}
      >
        <Form className="contenedorRegistro">
          <div className="izquierdaRegistro">
            <label> Nombre de Usuario</label>
            <ErrorMessage name="NombreUsuario" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="NombreUsuario"
              placeholder="Ej. SoyMuyCool69..."
            />
            <label> Contraseña</label>
            <ErrorMessage name="Contrasenia" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="Contrasenia"
              placeholder="Ingrese su contraseña..."
            />

            <label> Primer nombre</label>
            <ErrorMessage name="Nombre1Cuenta" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="Nombre1Cuenta"
              placeholder="Ingrese su Primer nombre..."
            />

            <label> Segundo nombre</label>
            <ErrorMessage name="Nombre2Cuenta" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="Nombre2Cuenta"
              placeholder="Ingrese su Segundo nombre..."
            />

            <label> Primer apellido</label>
            <ErrorMessage name="Apellido1Cuenta" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="Apellido1Cuenta"
              placeholder="Ingrese su Primer apellido..."
            />

            <label> Segundo apellido</label>
            <ErrorMessage name="Apellido2Cuenta" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="Apellido2Cuenta"
              placeholder="Ingrese su Segundo apellido..."
            />
          </div>
          <div className="derechaRegistro">
            <label> Genero</label>
            <ErrorMessage name="Genero" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="Genero"
              placeholder="Ingrese su Genero..."
            />
            {/* <select
              name="Genero"
              // value={opciones.Genero}
              id="formatoRegistro"
              style={{ display: "block" }}
            >
              <option value="" label="Seleccione su genero..." />
              <option value="Hombre" label="Hombre" />
              <option value="Mujer" label="Mujer" />
              <option value="Otro" label="Otro" />
            </select> */}

            <label> Cedula</label>
            <ErrorMessage name="Cedula" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="Cedula"
              placeholder="Ingrese su Cedula..."
            />

            <label> Dirección </label>
            <ErrorMessage name="DireccionCuenta" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="DireccionCuenta"
              placeholder="Ingrese su Dirección..."
            />

            <label> Número de Teléfono </label>
            <ErrorMessage name="TelefonoCuenta" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="TelefonoCuenta"
              placeholder="Ingrese su Teléfono..."
            />

            <label> Número de Celular </label>
            <ErrorMessage name="CelularCuenta" component="span" />
            <Field
              autoComplete="off"
              id="formatoRegistro"
              name="CelularCuenta"
              placeholder="Ingrese su Número de Celular..."
            />
          </div>
          <div className="botonRegistro">
            <button type="submit"> Registrarse</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Registro;
