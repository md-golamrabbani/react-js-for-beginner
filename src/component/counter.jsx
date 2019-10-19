import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    colors: []
  };

  renderColors() {
    if (this.state.colors.length === 0) return <p>There are no colors!</p>;

    return (
      <ul>
        {this.state.colors.map(color => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        { this.state.colors.length === 0 && "Please, create a new color!" }
        { this.renderColors() }
      </div>
    );
  }
}

export default Counter;
