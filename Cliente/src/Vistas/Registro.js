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
    NombreUsuario: Yup.string()
      .min(3, "El nombre de usuario debe contener como mínimo 3 caracteres")
      .max(20, "El nombre de usuario debe contener como máximo 3 caracteres")
      .required("Nombre de usuario es un campo requerido"),
    Contrasenia: Yup.string()
      .min(3, "La contraseña debe tener como mínimo 3 caracteres")
      .max(20, "La contraseña debe tener como máximo 20 caracteres")
      .required("Contraseña es un campo requerido"),
    Nombre1Cuenta: Yup.string()
      .min(3, "El primer nombre debe tener como mínimo 3 caracteres")
      .max(20, "El primer nombre debe tener como máximo 20 caracteres")
      .required("Primer nombre es un campo requerido"),
    Nombre2Cuenta: Yup.string()
      .min(3, "El segundo nombre debe tener como mínimo 3 caracteres")
      .max(20, "El segundo nombre debe tener como máximo 20 caracteres")
      .notRequired(),
    Apellido1Cuenta: Yup.string()
      .min(3, "El primer apellido debe tener como mínimo 3 caracteres")
      .max(20, "El primer apellido debe tener como máximo 20 caracteres")
      .required("Primer apellido es un campo requerido"),
    Apellido2Cuenta: Yup.string()
      .min(3, "El segundo apellido debe tener como mínimo 3 caracteres")
      .max(20, "El segundo apellido debe tener como máximo 20 caracteres")
      .notRequired(),
    Genero: Yup.string()
      .min(3, "El Género debe tener como mínimo 3 caracteres")
      .max(15, "El Género debe tener como máximo 15 caracteres")
      .required("Genero es un campo requerido"),
    Cedula: Yup.string()
      .min(3, "La cédula debe tener como mínimo 3 caracteres")
      .max(20, "La cédula debe tener como máximo 20 caracteres")
      .required("Cédula es un campo requerido"),
    DireccionCuenta: Yup.string()
      .min(3, "La dirección debe tener como mínimo 3 caracteres")
      .max(40, "La cédula debe tener como máximo 40 caracteres")
      .required("Dirección es un campo requerido"),
    TelefonoCuenta: Yup.string()
      .min(3, "El número de teléfono debe tener como mínimo 3 caracteres")
      .max(12, "El número de teléfono debe tener como máximo 12 caracteres")
      .required("Número de teléfono es un campo requerido"),
    CelularCuenta: Yup.string()
      .min(3, "El número de celular debe tener como mínimo 3 caracteres")
      .max(10, "El número de teléfono debe tener como máximo 10 caracteres")
      .required("Número de celular es un campo requerido"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/Cuentas", data).then(() => {
      console.log(data);
      alert("Cuenta registrada Correctamente");
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
              placeholder="Ingrese su Género..."
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
              placeholder="Ingrese su Cédula..."
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
