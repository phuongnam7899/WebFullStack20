import React,{Component} from 'react';

class Child extends Component {
    constructor() {
        super();
        this.state = {
            content : ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e){
        this.setState({
            content : e.target.value
        })
    }
    render(){
        
        return(
            <div>
                <input onChange={this.handleInputChange} placeholder="write sthg" />
                <button onClick={() => this.props.onSubmit(this.state.content)}>Submit</button>
            </div>
        );
    }
}
export default Child;