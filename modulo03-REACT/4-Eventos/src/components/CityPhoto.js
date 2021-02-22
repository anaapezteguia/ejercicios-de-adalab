import React from "react";

class CityPhoto extends React.Component {
  constructor(props) {
    super(props);
  }
  //Images
  render() {
    const citiesImg = {
      BuenosAires:
        "https://cdn.pixabay.com/photo/2014/10/30/00/15/buenos-aires-508790_1280.jpg",
      Sydney:
        "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
      Praga:
        "https://cdn.pixabay.com/photo/2016/01/29/16/57/prague-1168302_1280.jpg",
      Boston:
        "https://cdn.pixabay.com/photo/2014/07/29/12/32/boston-404526_1280.jpg",
      Tokyo:
        "https://cdn.pixabay.com/photo/2015/09/04/23/04/shibuya-crossing-923000_1280.jpg",
    };
    console.log(citiesImg[[this.props.isTravellingTo]]);
    return (
      <>
        <h2>{this.props.isTravellingTo}</h2>
        <p>{this.props.isTravellingTo}</p>
        <img
          src={citiesImg[this.props.isTravellingTo]}
          alt={this.props.isTravellingTo}
        />
      </>
    );
  }
}

export default CityPhoto;
