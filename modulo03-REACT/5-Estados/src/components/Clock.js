import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <p className="hour">
        {this.props.time.hour}:{this.props.time.minutes}:
        {this.props.time.seconds}
      </p>
    );
  }
}

export default Clock;
