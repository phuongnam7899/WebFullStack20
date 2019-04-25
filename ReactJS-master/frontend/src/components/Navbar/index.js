import React, {Component} from 'react';
import Searchfield from "../Searchfield";
import ProfilePanel from "../ProfilePanel";

class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <div className="container">
                    <Searchfield/>
                    <div className="col-6">
                        <img src="https://static.topcv.vn/company_logos/techkids-coding-school-5839bff44088b.jpg"/>
                    </div>
                    <ProfilePanel/>
                </div>
            </div>
        )
    }
}

export default Navbar;