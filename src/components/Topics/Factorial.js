import React, { Component } from "react";

export default class Factorial extends Component {
  constructor() {
    super();

    this.state = {
      number: 0,
      factorial: null
    };
  }

  userValueInput(value) {
    this.setState({ number: parseInt(value, 10) });
  }

  factorial(number) {
      var factOfOne=1;
      var factOfNegative=-1;
    if (number === 0) 
    this.setState({ factorial: factOfOne });
    else if (number < 1) 
    this.setState({ factorial: factOfNegative });
    for (let i = number - 1; i >= 1; i--) {
      number = number * i;

      this.setState({ factorial: number });
    }
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Factorial </h4>
        <input
          className="inputLine"
          type="number"
          onChange={e => this.userValueInput(e.target.value)}
        />

        <button
          className="confirmationButton"
          onClick={() => this.factorial(this.state.number)}
        >
          {" "}
          Factorial{" "}
        </button>
        <span className="resultsBox"> Factorial: {this.state.factorial} </span>
      </div>
    );
  }
}
