import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  //we are using arrow function here to

  handelIncrementDecrement = (porcess) => {
    porcess == "+"
      ? this.setState({ count: this.state.count + 1 })
      : porcess == "-"
      ? this.setState({ count: this.state.count - 1 })
      : this.setState({ count: this.state.count });
  };

  // hahandelIncrement = () => {
  //   console.log("maruma");
  //   this.setState( {count: this.state.count + 1} );
  // };
  // hahandelDncrement = () => {
  //   console.log("maruma");
  //   this.setState({count: this.state.count -1 });
  // };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button
          // onClickCapture={this.hahandelIncrement}
          onClick={() => this.handelIncrementDecrement("+")}
          className="btn btn-primary"
        >
          {/* in the above we lean how we can pass argument to a function  */}
          <strong>counter +</strong>
        </button>

        <button
          onClick={() => this.handelIncrementDecrement("-")}
          className="btn btn-warning"
        >
          <strong>counter -</strong>
        </button>
        <h2> this is the counter components </h2>
      </>
    );
  }
}
export default Counter;
