import React from "react";

class RandomCat extends React.Component {
  render() {
    return (
      <a href="http://loremflickr.com">
            <img src="http://loremflickr.com/400/200/cats/" alt="Random cat" />
            <p>Gaticos random</p>
      </a>
    );
  }
}

export default RandomCat;