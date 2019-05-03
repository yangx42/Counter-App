import React from "react";

import "./layout/App.css";
import Counter from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
