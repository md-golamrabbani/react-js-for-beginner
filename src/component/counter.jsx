import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 0
    }

    style = {
        fontSize: 50,
        fontWeight: 'bold'
    }

    render() {
        return (
            <div>
                <span style={ this.style } className="badge badge-primary m-4">{ this.formateCount() }</span>
                <button className="btn btn-success">Submit</button>
            </div>
        );
    }

    formateCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

}

export default Counter;
