import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Vistas/Home";
import Registro from "./Vistas/Registro";
import InicioSesion from "./Vistas/InicioSesion";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="barraNav">
          <div className="links">
            <Link to="/registro"> Registrarse</Link>
            <Link to="/IniciarSesion"> Iniciar Sesión</Link>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registro" exact component={Registro} />
          <Route path="/IniciarSesion" exact component={InicioSesion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
