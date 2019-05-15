import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { selectSeats, findBookings } from '../actions';

class PlaceSelection extends React.Component 
{
    constructor(props) {
        super(props);
        this.props.findBookings(this.props.selectedMovie.id, this.props.selectedShowing);
        console.log(this.props.tickets);
        this.state = {
            place: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
                'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
                'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
                'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
            ],
            placeAvailable: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
                'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
                'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
                'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'
            ],
            placeChecked: this.props.tickets.quantity >= this.props.selectedSeats.length ? this.props.selectedSeats : [],
            placeReserved: this.props.foundBookings,
            maxChecked: this.props.tickets.quantity
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSeats !== prevProps.selectedSeats) {
            this.setState({placeChecked: this.props.selectedSeats});
        }
        if (this.props !== prevProps) {
            this.setState({
                placeReserved: this.props.foundBookings.map(booking => {
                    return booking.seats;
                })
                .flat()
            });
        }
    }

    onClickChoice(place) {
        if (this.state.placeReserved.indexOf(place) === -1) {
            if (this.state.placeChecked.indexOf(place) > -1) {
                this.setState({
                    placeAvailable: this
                        .state
                        .placeAvailable
                        .concat(place),
                    placeChecked: this
                        .state
                        .placeChecked
                        .filter(res => res !== place)
                });
            } else if (this.state.placeChecked.length < this.state.maxChecked) {
                console.log(this.state.placeChecked.length);
                console.log(this.state.maxChecked);
                this.setState({
                    placeChecked: this
                        .state
                        .placeChecked
                        .concat(place),
                    placeAvailable: this
                        .state
                        .placeAvailable
                        .filter(res => res !== place)
                })
                this.props.selectSeats([...this.state.placeChecked, place]);
            }
        }
        
    }

    render() {
        if (!this.props.selectedMovie || !this.props.selectedShowing) {  
            return (
                <div className="container" style={{ backgroundColor: "rgba(34, 34, 34, 0.3)" }}> 
                <NavLink className = "arrowleft" to = "/tickets" > <i className = "fas fa-angle-double-left"> </i></NavLink>
                    <div className="option">
                        <div className="empty" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
                            You have to choose movie and showing time first
                        </div>
                    </div>
                    <NavLink className = "arrowright" to = "/personal-details"> <i className = "fas fa-angle-double-right"> </i></NavLink>
                </div>
            );
        }
        return (
            <div className = "container1">
            <NavLink className = "arrowleft" to="/tickets"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <div className = "list1"> 
                    <h2 className = "selectplace"> Select your place! </h2>
                    <Legend /> 
                    <CheckedList checked = {this.state.placeChecked}/>
                 </div>
                <ChairGrid place={this.state.place}
                          available={this.state.placeAvailable}
                          reserved={this.state.placeReserved}
                          checked={this.state.placeChecked}
                          onClickChoice={this.onClickChoice.bind(this)}/> 
            <NavLink className = "arrowright" to="/personal-details"><i className = "fas fa-angle-double-right"> </i></NavLink>
            </div>
        )
    }
}
    
class ChairGrid extends React.Component
{   
    render() {
        return (
            <div className = "cinema">
                <h4 className="screen"> SCREEN </h4>
                <div>
                <div className = "chairgrid">
                            {this.props.place.map(place => 
                                <div className={this.props.checked.indexOf(place) > -1 ?'chairchecked' :
                                               this.props.reserved.indexOf(place) > -1 ?'chairreserved' :'chairavailable'}
                                    key={place}
                                    onClick={ e => this.onClickPlace(place)}>
                                    <span> {place} </span>
                                </div>)
                            } 
                </div></div>
            </div> 
        )
    }
                        
    onClickPlace(place) {
        this.props.onClickChoice(place);
    }
}
                                    
class CheckedList extends React.Component
{
    render() {
        return ( 
            <div className="counting">
                <h4> <span className = "boldtext"> The number of tickets: </span> {
            this.props.checked.length
            } </h4>
                <h4> <span className = "boldtext"> Your chairs: </span> <span> {
                        this.props.checked.map(res =>
                            <span key = {res}
                            className = 'seats'> {res} </span>)} </span></h4>
            </div>
        )
    }
}

class Legend extends React.Component {
    render() {
        return (<div className = 'legend'>
            <span></span>
            <span className = 'chairchecked'> Chosen </span> 
            <span className = 'chairavailable'> Available </span>
            <span className = 'chairreserved' > Reserved </span>
            <span></span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedSeats: state.selectedSeats,
        selectedMovie: state.selectedMovie,
        selectedShowing: state.selectedShowing,
        foundBookings: state.foundBookings,
        tickets: state.tickets
    };
}
                            
export default connect(mapStateToProps, { selectSeats, findBookings })(PlaceSelection);