import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <span style={ { fontSize: 10 } } className="badge badge-primary m-4">{ this.formateCount() }</span>
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
