import React from "react";
import "../stylesheets/localStorage.scss";

class LocalStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    const localStorage = ls.get("data");
    if (localStorage) {
      this.setState(localStorage);
    }
    console.log("Se está ejecutando el método componentDidMount");
  }
  componentDidUpdate() {
    ls.set("data", this.state);
  }
  handleInput(ev) {
    this.setState({ input: ev.target.value });
    console.log("Albricias!Eureka, mi manejador funciona!");
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleInput}
        ></input>
        <p>Mi input contiene: {this.state.input}</p>
      </div>
    );
  }
}
export default LocalStorage;
