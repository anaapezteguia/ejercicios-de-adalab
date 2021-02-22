import React from "react";
const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    if (this.props) {
      this.props.imgSrc = `http://loremflickr.com/${this.props.width}/${this.props.width}/cats/?random=${randomCat}`;
    } else {
      this.props.imgSrc = `http://loremflickr.com/400/200/cats/?random=${randomCat}`;
    }
    return (
      <a href="http://loremflickr.com">
        <img src={this.props.imgSrc} alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
