import React from "react";
import "../stylesheets/OnionHater.scss";

const onKeyUpListener = (ev) =>
  ev.target.value.includes("cebolla") ? alert("ODIO LA CEBOLLA") : "";

class OnionHater extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <label for="comments" className="label">
          Lover or hater?
        </label>
        <textarea
          id="comments"
          name="comments"
          rows="8"
          cols="80"
          onKeyUp={onKeyUpListener}
        ></textarea>
      </div>
    );
  }
}

export default OnionHater;
