import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends React.Component
{
    render() {
        return (
            <div className="nav">                    
                <NavLink to="/region" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>select region</NavLink>
                <NavLink to="/movies" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>select movie</NavLink>
                <NavLink to="/tickets" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>specify tickets type</NavLink>
                <NavLink to="/seats" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>choose seats</NavLink>
                <NavLink to="/personal-details" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>add personal data</NavLink>
                <NavLink to="/confirmation" className="nav-button" activeStyle={{backgroundColor: '#960018' }}>confirm booking</NavLink>
            </div>
        );
    }
}

export default connect(null)(Navigation);