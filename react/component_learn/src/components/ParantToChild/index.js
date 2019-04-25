import React,{Component} from "react";
import Child from "./Child";

class ParentToChild extends Component {
    constructor(){
        super();
        this.state = {
            colors : ["red","blue","green","black","yellow","pink"],
            color : ""
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(color){
        this.setState({
            color : this.state.colors[Math.round(Math.random()*(this.state.colors.length))]
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.changeColor}>Change color</button>
                <Child color={this.state.color}/>
            </div>
        )
    }
}
export default ParentToChild;