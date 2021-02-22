import React from "react";

function ItemPromos(props) {
  return (
    <li>
      <p className="App__text">Nombre: {props.student.name}</p>
      <p className="App__text">Edad: {props.student.age}</p>
    </li>
  );
}

export default ItemPromos;
