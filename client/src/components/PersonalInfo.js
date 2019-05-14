import React from 'react';
import {connect} from 'react-redux';

class PersonalInfo extends React.Component {
    render(){
        return (
            <div className="container" id="personal-info-box" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
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
                    <button className="nav-button" style={{width: "100%"}} onClick={() => {
                        
                    }}>
                        CONFIRM
                    </button>
                </form>
                <h3>Warning! Entering false data could cause you refusal of lounching the ticket.</h3>
            </div>
        );
    }
}

export default connect(null)(PersonalInfo);