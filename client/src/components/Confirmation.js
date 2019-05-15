import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { confirmBooking } from '../actions'

class Confirmation extends React.Component
{
    render() {
        if (!this.props.selectedMovie || !this.props.selectedShowing || !this.props.selectedSeats || !this.props.tickets) {
            return (
                <div className="container" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
                <NavLink className = "arrowleft" to = "/tickets" > <i className = "fas fa-angle-double-left"> </i></NavLink>
                    <div className="option">
                        <div className="empty" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
                            There is some information missing. Fill all previous windows and then come back here.
                        </div>
                    </div>
                    <NavLink className = "arrowright" to = "/personal-details"> <i className = "fas fa-angle-double-right"> </i></NavLink>
                </div>
            );
        }
        return (
            <div className="container" id="personal-info-box" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}> 
            <h1>Confirm your reservation</h1>
            <h3>Movie info</h3>
            <p>Movie: <strong>{this.props.selectedMovie.title}</strong></p> 
            <p>Time: {this.props.selectedShowing.substring(0,10)} {this.props.selectedShowing.substring(11,16)}</p>
            <p>Tickets: {`JUNIOR: ${this.props.tickets.juniorNumber} | STUDENT: ${this.props.tickets.studentNumber} | NORMAL: ${this.props.tickets.normalNumber} | SENIOR: ${this.props.tickets.seniorNumber}`}</p>
            <p>Seats: {this.props.selectedSeats.join(", ")}</p>
            <p>Total to pay: {this.props.tickets.totalPrice}</p>
            <h3>Personal info:</h3>
            <p>First name: {this.props.person.firstName}</p>
            <p>Last name: {this.props.person.lastName}</p>
            <p>E-mail: {this.props.person.email}</p>
            <p>Phone: {this.props.person.phone} </p> 
            <NavLink className = "arrowleft" to = "/personal-details"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <button className="option-button" style={{marginTop: '50px'}} onClick={() => {
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
        person: state.person,
        tickets: state.tickets
    }
}

export default connect(mapStateToProps, { confirmBooking })(Confirmation);