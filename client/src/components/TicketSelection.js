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
        console.log(this.state.juniorNumber);
    }

    currency(props) {
        if (props.region === 'PL'){
            return 'PLN'
        } else if(props.region === 'us'){
            return 'USD'
        } else if (props.region === 'gb' ){
            return "GPB"
        } else if (props.region === 'fr' ){
            return "EUR"
        }else if (props.region === 'es' ){
            return"EUR"
        }else if (props.region === 'de' ){
            return "EUR"
        }else {
            return ''
        }

    };
    

    renderTickets(){
        
        console.log(this.props.region);
        console.log(this.state.juniorNumber);
        return(
            <div className="container" id="tickets-box" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
                <h1>Choose your tickets here.</h1>
                <form id="tickets-info" onSubmit={(e) => this.onFormSubmit(e)} >
                    <div className="ticket-field">
                        <label>Junior Tickets (5 waluta) {this.props.region.region}<currency region = {this.props.region}/></label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.juniorNumber}
                            onChange={this._handleUpdate} 
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Student Tickets (5 waluta) </label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.studentNumber}
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Normal Tickets (10 waluta)</label>
                        <NumericInput id="numeric-input" 
                            min={0} 
                            max={20} 
                            value={this.state.normalNumber}
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Senior Tickets (5 waluta)</label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.seniorNumber}
                            />
                    </div>
                    <div className="sum-field">
                        <label>Full price:</label>
                        <label id = "price">tu kwota i waluta</label>
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