import React,{Component} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
class ChildToChild extends Component {
    constructor(){
        super();
        this.state = {
            color : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(color) {
        this.setState({
            color : color
        })
    }
    render(){
        return(
            <div>
                <Child1 onSubmit={this.handleSubmit}/>
                <br/>
                <Child2 color={this.state.color}/>
            </div>
        );
    }
}

export default ChildToChild;