import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class PersonalInfo extends React.Component {
    render(){
        return (
            <div className="container" id="personal-info-box" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
            <NavLink className = "arrowleft" to = "/tickets"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <h1>Enter your personal data</h1>
                <form id="personal-info">
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />
                    </div>
                    <div>
                        <label htmlFor="email">EMail</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="telephone">Phone Number</label>
                        <input type="tel" id="telephone" />
                    </div>
                    <h3>Warning! Entering false data could cause you refusal of lounching the ticket.</h3>
                    <button className="nav-button" style={{width: "100%"}} onClick={() => {
                        
                    }}>
                        CONFIRM
                    </button>
                </form>
                <NavLink className = "arrowright" to = "/confirmation" > <i className = "fas fa-angle-double-right"> </i></NavLink>
            </div>
        );
    }
}

export default connect(null)(PersonalInfo);