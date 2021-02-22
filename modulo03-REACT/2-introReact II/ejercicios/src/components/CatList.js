import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li>
            <RandomCat width={this.props.width} height={this.props.width} />
          </li>
          <li>
            <RandomCat width={this.props.height} height={this.props.height} />
          </li>
          <li>
            <RandomCat />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
