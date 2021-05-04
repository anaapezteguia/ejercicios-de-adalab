import React from "react";
import "../stylesheets/App.scss";

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberArray: numbers.map((number) => <li key={number}>{number}</li>),
      evenOdd: [],
    };
    this.handleFilterNumber = this.handleFilterNumber.bind(this);
    this.handleFilterEven = this.handleFilterEven.bind(this);
  }

  handleFilterNumber = (ev) => {
    const target = ev.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const myNumber = ev.target.value;
    const filterNumbers = numbers
      .filter((number) => number > myNumber)
      .map((number) => <li key={number}>{number}</li>);
    this.setState({
      numberArray: filterNumbers,
      [name]: value,
    });
  };
  // solucionar el checkbox filter...¿necesito un array?
  handleFilterEven(ev) {
    const evenNumbers = numbers
      .filter((number) => number % 2 === 0)
      .map((number) => <li key={number}>{number}</li>);
    this.setState({ numberArray: evenNumbers });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="input">Escribe un número: </label>
          <input
            type="text"
            id="input"
            onChange={this.handleFilterNumber}
          ></input>
          <div>
            <input
              type="checkbox"
              value="Par"
              name="paresNones"
              checked={this.state.numberArray.includes("Par")}
              onChange={this.handleFilterEven}
            ></input>
            <input
              type="checkbox"
              value="Impar"
              name="paresNones"
              checked={this.state.numberArray.includes("Impar")}
              onChange={this.handleFilterEven}
            ></input>
          </div>
        </form>
        <ul>{this.state.numberArray}</ul>
      </div>
    );
  }
}

export default App;
