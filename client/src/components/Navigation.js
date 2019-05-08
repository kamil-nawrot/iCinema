import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends React.Component
{
    render() {
        return (
            <div className="nav">                    
                <NavLink to="/region" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>REGION</NavLink>
                <NavLink to="/movies" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>MOVIE</NavLink>
                <NavLink to="/schedule" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>SCHEDULE</NavLink>
                <NavLink to="/tickets" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>TICKETS</NavLink>
                <NavLink to="/seats" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>SEATS</NavLink>
                <NavLink to="/personal-details" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>PERSONAL INFO</NavLink>
                <NavLink to="/confirmation" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>CONFIRM</NavLink>
            </div>
        );
    }
}

export default connect(null)(Navigation);