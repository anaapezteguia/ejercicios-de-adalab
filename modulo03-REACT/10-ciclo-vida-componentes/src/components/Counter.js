// import React from "react";
import "../stylesheets/counter.scss";
import React, { useState, useEffect } from "react";

const Counter = () => {
  // usamos el hook useState para crear counter en el estado del componente
  const [counter, setCounter] = useState(0);
  console.log("Me estoy renderizando");
  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente,
    // corresponden al método componentDidMount() de un componente de clase
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    console.log("Me estoy montando");
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    //    corresponden al método componentWillUnmount() de un componente de clase
    return () => {
      clearInterval(intervalId);
      console.log("Me estoy desmontando");
    };
  });
  return <div>Contador: {counter}</div>;
};

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//     this.incrementCounter = this.incrementCounter.bind(this);
//   }
//   componentDidMount() {
//     this.intervalId = setInterval(this.incrementCounter, 1000);
//     console.log("Se está ejecutando el método componentDidMount");
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//     console.log("Se está ejecutando el método componentWillUnmount");
//     // si eliminamos este método nos aparece un warning para avisaarnos de que consumimos memoria, que el componente está desmontado y que hay que cancelar el montaje para ahorrar
//   }
//   incrementCounter() {
//     this.setState((prevState) => {
//       return { counter: prevState.counter + 1 };
//     });
//     console.log("Se está ejecutando el método incrementCounter");
//   }
//   render() {
//     return <div>Contador: {this.state.counter}</div>;
//   }
// }

export default Counter;
