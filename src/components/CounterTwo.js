import React from "react";
import "../layout/ButtonTwo.css";

export default class CounterTwo extends React.Component {
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
      <div className="counterTwoBody">
        <div className="countText">Team 2</div>{" "}
        <div id="numberDisplay">{this.state.count}</div>
        <button onClick={this.decrementButton} className="buttonTwo">
          Decrement
        </button>
        <button onClick={this.incrementButton} className="buttonTwo">
          Increment
        </button>
        <div>
          <button onClick={this.zeroButton} className="buttonTwoClear">
            Clear Team Two
          </button>
        </div>
      </div>
    );
  }
}
