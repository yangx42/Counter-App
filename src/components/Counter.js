import React from "react";
import "../layout/Button.css";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  decrementButton = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  incrementButton = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="counterBody">
        <div className="countText">Count:</div>{" "}
        <div id="numberDisplay">{this.state.count}</div>
        <button onClick={this.decrementButton} className="buttonOne">
          Decrement
        </button>
        <button onClick={this.incrementButton} className="buttonOne">
          Increment
        </button>
      </div>
    );
  }
}
