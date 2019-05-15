import React from 'react';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';


import { selectRegion, selectMovie, selectShowing } from '../actions';

class TicketSelection extends React.Component {
    state = {
            juniorNumber: 0,
            studentNumber: 0,
            normalNumber: 0,
            seniorNumber: 0,
    };

    onFormSubmit = event =>{
        event.preventDefault();
    }


    renderTickets(){
        console.log(this.props.region);
        return(
            <div className="container" id="tickets-box" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
                <h1>Choose your tickets here.</h1>
                <form id="tickets-info" onSubmit={(e) => this.onFormSubmit(e)} >
                    <div className="ticket-field">
                        <label>Junior Tickets Number</label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.juniorNumber}
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Student Tickets Number</label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.studentNumber}
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Normal Tickets Number</label>
                        <NumericInput id="numeric-input" 
                            min={0} 
                            max={20} 
                            value={this.state.normalNumber}
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Senior Tickets Number</label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.juniorNumber}
                            />
                    </div>
                    <button className="nav-button" id="confirm-btn" style={{width: "50%"}}>CONFIRM</button>
                </form>
            </div>
        );
    }

    
    render(){
        return (
            <div className="container" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
            <NavLink className = "arrowleft" to="/schedule"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <div className="option">
                    {this.renderTickets()}
                </div>
                <NavLink className="arrowright" to="/seats"> <i className="fas fa-angle-double-right"> </i></NavLink>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        juniorNumber: state.juniorNumber,
        studentNumber: state.studentNumber,
        normalNumber: state.normalNumber,
        seniorNumber: state.seniorNumber,
        region: state.region
     };
}

export default connect(mapStateToProps)(TicketSelection);