import "../stylesheets/App.scss";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";

function App() {
  // El componente Switch incluirá dentro tantos componentes Route como rutas queramos en nuestra web y se asegurará de que solo se pinte uno. Dentro de cada componente Switch el contenido variará dependiendo de la ruta de la aplicación. A cada componente Route le pasaremos por props la clase del componente que queremos que se renderize

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
