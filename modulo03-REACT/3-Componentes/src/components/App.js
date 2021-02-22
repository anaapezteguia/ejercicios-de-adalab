import "../stylesheets/App.scss";
import React from "react";
import HalfPage from "./HalfPage";
import Promos from "./Promos";

function App() {
  return (
    <>
      <HalfPage side="izquierda">
        <h1>H1</h1>
      </HalfPage>
      <HalfPage side="derecha">
        <h2>H2</h2>
      </HalfPage>
      <Promos />
    </>
  );
}

export default App;
