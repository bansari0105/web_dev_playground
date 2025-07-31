import React from "react";

class Sum2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt1: "",
      txt2: "",
      errortype: {},
      ans: ""
    };
  }

  isvalidation() {
    const { txt1, txt2 } = this.state;
    let temperror = {};
    let isvalid = true;

    if (!txt1) {
      temperror.txt1 = "Enter no1";
      isvalid = false;
    } else if (!/^\d+$/.test(txt1)) {
      temperror.txt1 = "Enter only digits in no1";
      isvalid = false;
    }

    if (!txt2) {
      temperror.txt2 = "Enter no2";
      isvalid = false;
    } else if (!/^\d+$/.test(txt2)) {
      temperror.txt2 = "Enter only digits in no2";
      isvalid = false;
    }

    this.setState({ errortype: temperror });
    return isvalid;
  }

  doSum() {
    if (this.isvalidation()) {
      const a = parseInt(this.state.txt1);
      const b = parseInt(this.state.txt2);
      const c = a + b;
      this.setState({ ans: "Sum is " + c });
    }
  }

  render() {
    return (
      <>
        <h1>Sum</h1>
        No1:{" "}
        <input
          type="text"
          onChange={(e) => this.setState({ txt1: e.target.value })}
        />
        <p style={{ color: "red" }}>{this.state.errortype.txt1}</p>
        No2:{" "}
        <input
          type="text"
          onChange={(e) => this.setState({ txt2: e.target.value })}
        />
        <p style={{ color: "red" }}>{this.state.errortype.txt2}</p>
        <input type="button" value="+" onClick={this.doSum.bind(this)} />
        <p>{this.state.ans}</p>
      </>
    );
  }
}

export default Sum2;