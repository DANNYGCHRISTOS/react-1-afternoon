import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: "Daniel Hagos",
          title: "Student",
          age: 27
        },
        {
          name: "Dani Hag",
          age: 26,
          hairColor: "black"
        },
        {
          name: "Dan Ha",
          title: "Engineer"
        }
      ],

      userInput: "",
      filteredEmployees: []
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  filterEmployees(prop) {
    var employees = this.state.employees;
    var filteredEmployees = [];

    for (var i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.employees, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(
            this.state.filteredEmployees,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}
