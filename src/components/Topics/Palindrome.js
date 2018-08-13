import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    var forwards = userInput;
    for (var i = 0, j = forwards.length - 1; i < forwards.length; i++, j--) {
      if (forwards[i] !== forwards[j]) {
        this.setState({ palindrome: "false" });
        break;
      }
      this.setState({ palindrome: "true" });
    }
  }
  

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          {" "}
          Check{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Palindrome: {this.state.palindrome}{" "}
        </span>
      </div>
    );
  }
}
