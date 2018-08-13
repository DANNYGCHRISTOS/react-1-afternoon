import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenPart: [],
      oddPart: [],
      userInput: ""
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  differentiateEvenAndOdds(userInput) {
    var arr = userInput.split(",");
    var even_numbers = [];
    var odd_numbers = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even_numbers.push(parseInt(arr[i], 10));
      } else {
        odd_numbers.push(parseInt(arr[i], 10));
      }
    }

    this.setState({ evenPart: even_numbers, oddPart: odd_numbers });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.differentiateEvenAndOdds(this.state.userInput);
          }}
        >
          {" "}
          Split{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Evens: {JSON.stringify(this.state.evenPart)}{" "}
        </span>
        <span className="resultsBox">
          {" "}
          Odds: {JSON.stringify(this.state.oddPart)}{" "}
        </span>
      </div>
    );
  }
}
