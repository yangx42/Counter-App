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

  zeroButton = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className="counterBody">
        <div className="countText">Team 1</div>{" "}
        <div id="numberDisplay">{this.state.count}</div>
        <button onClick={this.decrementButton} className="buttonOne">
          Decrement
        </button>
        <button onClick={this.incrementButton} className="buttonOne">
          Increment
        </button>
        <div>
          <button onClick={this.zeroButton} className="buttonClear">
            Clear Team One
          </button>
        </div>
      </div>
    );
  }
}
