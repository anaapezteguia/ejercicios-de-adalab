import "../stylesheets/App.scss";
import React from "react";
// import OnionHater from "./OnionHater";
import OnionHater2 from "./OnionHater2";
import Destiny from "./Destiny";

// function App() {
//   return (
//     <div className='App'>
//       {/* <OnionHater /> */}
//       <Destiny />
//     </div>
//   );
// }
let isHatingValue;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
  }
  // OnionHater
  isHating(ev) {
    if (ev.target.value.includes("cebolla")) {
      return true;
    }
  }
  onKeyUpListener(ev) {
    isHatingValue = this.isHating(ev) ? "background" : "";
    this.forceUpdate();
  }

  render() {
    return (
      <div className={`wrapper ${isHatingValue}`}>
        <OnionHater2 onKeyUpListener={this.onKeyUpListener} />
        <div>
          <Destiny />
        </div>
      </div>
    );
  }
}

export default App;
