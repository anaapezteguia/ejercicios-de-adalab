import React from "react";
import RandomCat from "./RandomCat";
import MediaCard from "./MediaCard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomCat />
        <MediaCard />
      </div>
    );
  }
}

export default App;