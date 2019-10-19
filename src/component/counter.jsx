import React, { Component } from "react";

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200"
    }

    render() {
        return (
            <div>
                <img src={ this.state.imageUrl } alt=""/>
                <span className="badge badge-primary m-4">{ this.formateCount() }</span>
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
