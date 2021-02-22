import React from "react";
import CityPhoto from "./CityPhoto";

let isTravellingTo;
class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeListener = this.onChangeListener.bind(this);
  }
  //Destiny

  onChangeListener = (ev) => {
    isTravellingTo = ev.target.value;
    this.forceUpdate();
  };
  render() {
    const cities = ["Buenos Aires", "Sydney", "Praga", "Boston", "Tokio"];
    const result = cities.map((city) => {
      return (
        <option onChange={this.onChangeListener} value={city}>
          {city}
        </option>
      );
    });
    return (
      <>
        <select id="destiny" name="destiny">
          {result}
        </select>
        <CityPhoto city={isTravellingTo} />
      </>
    );
  }
}

export default Destiny;
