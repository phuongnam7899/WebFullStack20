import React , {Component} from "react";

class Searchfield extends Component {
    render(){
        return(
            <form className="col-3">
                <input className="form-control" type="text" placeholder="Search" />
            </form>
        )
    }
}
export default Searchfield