import React from "react";
import Clock from "./Clock";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      hour: this.date.getHours(),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds(),
      // poner a cero...
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    // hacer constante y llamarla 3 veces
    this.setState({
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
  }

  render() {
    return (
      <div className="App">
        <Clock time={this.state} />
      </div>
    );
  }
}

export default App;
