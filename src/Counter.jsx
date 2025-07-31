import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      msg: ""
    };
  }

  incrementData = () => {
    if (this.state.counter >= 3) {
      this.setState({ msg: "Sorry Value is >3" });
    } else {
      this.setState({ counter: this.state.counter + 1, msg: "" });
    }
  };

  decrementData = () => {
    if (this.state.counter <= 1) {
      this.setState({ msg: "Sorry Value is <1" });
    } else {
      this.setState({ counter: this.state.counter - 1, msg: "" });
    }
  };

  render() {
    const { counter, msg } = this.state;
    const a = 10;

    return (
      <>
        <h1>Counter App</h1>
        <p>A value is {a}</p>
        <p>Counter value is {counter}</p>

        {/* Buttons */}
        <input type="button" value="+" onClick={this.incrementData} />
        <input type="button" value="-" onClick={this.decrementData} />

        {/* Message */}
        <p style={{ color: "red" }}>{msg}</p>
      </>
    );
  }
}

export default Counter;