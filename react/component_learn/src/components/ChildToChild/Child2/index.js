import React,{Component} from 'react';
import "./index.css";

class Child2 extends Component {
    render(){
        return(
            <div>
                <p className={`text ${this.props.color}`}>Text</p>
            </div>
        )
    }
}

export default Child2;