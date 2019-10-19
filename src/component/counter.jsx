import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleCount() {
    console.log("Increment!");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button onClick={this.handleCount} className="btn btn-success">
          Submit
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
