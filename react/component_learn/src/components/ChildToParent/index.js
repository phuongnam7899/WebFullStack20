import React, { Component } from "react";
import Child from "./Child";

class ChildToParent extends Component {
    constructor() {
        super();
        this.state = {
            content : ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(content) {
        this.setState({
            content : content
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.content}</p>
                <div>
                    <Child onSubmit={this.handleSubmit} />
                </div>
            </div>
        )

    }
}

export default ChildToParent;