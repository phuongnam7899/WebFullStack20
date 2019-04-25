import React, { Component } from 'react';
import Button from "./Button";
import "./index.css";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          point: 0
        };
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
      }
    
    add() {
        this.setState({
          point: this.state.point + 1
        })
      }
    sub() {
        this.setState({
          point: this.state.point - 1
        })
      }
    
      render() {
        const point= this.state.point;
        return (
          <div className="counter">
            <Button role={this.sub} content="-" color="x-green"/>
            <div className="point">{point}</div>
            <Button role={this.add} content="+" color="x-red"/>
          </div>
        );
      }
}

export default Counter;