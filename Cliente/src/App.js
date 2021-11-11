import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Vistas/Home";
import Registro from "./Vistas/Registro";
import IniciarSesion from "./Vistas/IniciarSesion";
import HomeIcon from "@material-ui/icons/Home";
import { Autorizacion } from "./Autorizacion";
import Administrador from "./Vistas/Administrador";
import AgregarCategoria from "./Vistas/AgregarCategoria";
import AgregarPaqueteVista from "./Vistas/AgregarPaqueteVista";
import axios from "axios";

function App() {
  // variable que tendra el estado de la autorización, falsa por defecto
  const [estadoAutorizacion, setEstadoAutorizacion] = useState({
    NombreUsuario: "",
    IdCuenta: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/Cuentas/Cuenta", {
        headers: {
          TokenAcceso: localStorage.getItem("TokenAcceso"),
        },
      })
      .then((respuesta) => {
        if (respuesta.data.error) {
          setEstadoAutorizacion({ ...estadoAutorizacion, status: false });
        } else {
          setEstadoAutorizacion({
            NombreUsuario: respuesta.data.NombreUsuario,
            IdCuenta: respuesta.data.IdCuenta,
            status: true,
          });
        }
      });
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("TokenAcceso");
    setEstadoAutorizacion({ NombreUsuario: "", IdCuenta: 0, status: false });
  };

  return (
    <div className="App">
      <Autorizacion.Provider
        value={{ estadoAutorizacion, setEstadoAutorizacion }}
      >
        <Router>
          <div className="barraNav">
            <div className="links">
              <Link to="/">
                <HomeIcon />
              </Link>
              {!estadoAutorizacion.status ? (
                <>
                  <Link to="/registro"> Registrarse</Link>
                  <Link to="/IniciarSesion"> Iniciar Sesión</Link>
                </>
              ) : (
                <>
                  <button onClick={cerrarSesion}> Cerrar Sesión </button>
                </>
              )}
              {estadoAutorizacion.IdCuenta === 1 ? (
                <>
                  <Link to="/admin"> Funciones Admin</Link>
                </>
              ) : null}
            </div>
            <h1>{estadoAutorizacion.NombreUsuario}</h1>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/registro" exact component={Registro} />
            <Route path="/IniciarSesion" exact component={IniciarSesion} />
            <Route path="/admin" exact component={Administrador} />
            <Route path="/agregarCategoria" exact component={AgregarCategoria} />
            <Route path="/AgregarPaqueteVista" exact component={AgregarPaqueteVista} />
          </Switch>
        </Router>
      </Autorizacion.Provider>
    </div>
  );
}

export default App;
