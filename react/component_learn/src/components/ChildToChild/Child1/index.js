import React,{Component} from 'react';

class Child1 extends Component {
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
                <input onChange={this.handleInputChange} placeholder="write color" />
                <button onClick={() => this.props.onSubmit(this.state.content)}>Change color magically</button>
            </div>
        );
    }
}
export default Child1;