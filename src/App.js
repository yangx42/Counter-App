import React from "react";

import "./layout/App.css";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <CounterTwo />
      </div>
    );
  }
}
