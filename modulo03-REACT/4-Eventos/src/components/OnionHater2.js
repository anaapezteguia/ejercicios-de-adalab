import React from "react";
import "../stylesheets/OnionHater.scss";

class OnionHater2 extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label for="comments" className="label">
          Lover or hater?
        </label>
        <textarea
          className="onionHater"
          id="comments"
          name="comments"
          rows="8"
          cols="80"
          onKeyUp={this.props.onKeyUpListener}
        ></textarea>
      </>
    );
  }
}

export default OnionHater2;
