import "../stylesheets/App.scss";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import Relax from "./Relax";
import LocalStorage from "./LocalStorage";

function App() {
  // El componente Switch incluirá dentro tantos componentes Route como rutas queramos en nuestra web y se asegurará de que solo se pinte uno. Dentro de cada componente Switch el contenido variará dependiendo de la ruta de la aplicación. A cada componente Route le pasaremos por props la clase del componente que queremos que se renderize

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/relax">Relax</Link>
            </li>
            <li>
              <Link to="/localStorage">LocalStorage (clase)</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/relax" component={Relax} />
          <Route path="/localStorage" component={LocalStorage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
