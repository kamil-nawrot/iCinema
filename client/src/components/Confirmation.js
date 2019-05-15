import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { confirmBooking } from '../actions'

class Confirmation extends React.Component
{
    render() {
        console.log(this.props.person);

        return (
            <div className = "container" id = "personal-info-box">
            <h1>Confirm your reservation</h1>
            <h3>Movie info</h3>
            <p>Movie: {this.props.selectedMovie.title} </p> 
            <p>Time: {this.props.selectedShowing.substring(0,10)} {this.props.selectedShowing.substring(11,16)}</p>
            <p>Tickets: </p>
            <p>Seats: {this.props.selectedSeats.join(", ")}</p>
            <p>Total to pay: </p>
            <h3>Personal info:</h3>
            <p>First name: {this.props.person.firstName}</p>
            <p>Last name: {this.props.person.lastName}</p>
            <p>E-mail: {this.props.person.email}</p>
            <p>Phone: {this.props.person.phone} </p> 
            <NavLink className = "arrowleft" to = "/personal-details"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <button className="option-button" onClick={() => {
                    this.props.confirmBooking(this.props);
                    console.log(this.props)
                }}> Confirm reservation </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        region: state.region,
        selectedMovie: state.selectedMovie,
        selectedShowing: state.selectedShowing,
        selectedSeats: state.selectedSeats,
        person: state.person
    }
}

export default connect(mapStateToProps, { confirmBooking })(Confirmation);