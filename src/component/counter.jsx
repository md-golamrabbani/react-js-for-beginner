import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleCount = product => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={product => this.handleCount(product)}
          className="btn btn-success"
        >
          Submit
        </button>
        <button className="btn btn-danger m-4" onClick={() => this.props.onDelete(counterId)}>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
