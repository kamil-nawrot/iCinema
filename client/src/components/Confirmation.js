import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { confirmBooking } from '../actions'

class Confirmation extends React.Component
{
    render() {
        return (
            <div className = "container" id = "personal-info-box" >
            <hr></hr>
            <h1>Confirm your reservation</h1>
            <hr></hr>
            <h2>Movie info</h2>
            <hr></hr>
            <p>Movie:</p>
            <p>Time: </p>
            <p>Ticket: </p>
            <p>Seat: </p>
            <hr></hr>
            <h2>Personal info:</h2>
            <hr></hr>
            <p>First name: </p>
            <p>Last name: </p>
            <p>E-mail: </p>
            <p>Phone: </p>
            <NavLink className = "arrowleft" to = "/personal-details"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <button className="option-button" onClick={() => {
                    this.props.confirmBooking(this.props);
                }}> Confirm changes </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        region: state.region,
        selectedMovie: state.selectedMovie,
        selectedShowing: state.selectedShowing,
        selectedSeats: state.selectedSeats
    }
}

export default connect(mapStateToProps, { confirmBooking })(Confirmation);