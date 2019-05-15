import React from 'react';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';


import { selectTickets } from '../actions';

class TicketSelection extends React.Component 
{
    constructor(props) {
        super(props);
        console.log(this.props.tickets);
        this.state = {
            juniorNumber: this.props.tickets.juniorNumber || 0,
            studentNumber: this.props.tickets.studentNumber || 0,
            normalNumber: this.props.tickets.normalNumber || 0,
            seniorNumber: this.props.tickets.seniorNumber || 0,
            totalPrice: this.props.tickets.totalPrice || 0,
            quantity: this.props.tickets.quantity || 0
        };
    }

    onFormSubmit = event =>{
        event.preventDefault();
        var total_value = this.calcTotalPrice(this.state);
        var total_quantity = this.state.juniorNumber + this.state.normalNumber + this.state.studentNumber + this.state.seniorNumber;
        console.log('total quantity: ' + total_quantity); 
        this.setState({totalPrice: total_value, quantity: total_quantity});
        this.props.selectTickets(this.state);
    }

    componentDidUpdate(prevProps) {
        this.props.selectTickets(this.state);
    }

    currency(param) {
        if (param.region === 'PL') return 'PLN';
        else if (param.region === 'gb' ) return "GPB"
        else if (param.region === 'fr' || param.region === 'es' || param.region === 'de' ) return "EUR"
        else return 'USD';
    };
    
    calcTotalPrice(param){
        return (param.juniorNumber*5) + (param.studentNumber*3) +
        (param.normalNumber*10) + (param.seniorNumber*3) 
    }

    render(){
        var curr = this.currency(this.props.region);
        return(
            <div className="container" id="tickets-box" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
            <NavLink className = "arrowleft" to="/schedule"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <h1>Choose your tickets here</h1>
                <form id="tickets-info" onSubmit={(e) => this.onFormSubmit(e)} >
                    <div className="ticket-field">
                        <label>Junior Ticket (5 {curr}) </label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.juniorNumber}
                            onChange={e => this.setState({juniorNumber: e})} 
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Student Ticket (3 {curr}) </label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.studentNumber}
                            onChange={e => this.setState({studentNumber: e})} 
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Normal Ticket (10 {curr})</label>
                        <NumericInput id="numeric-input" 
                            min={0} 
                            max={20} 
                            value={this.state.normalNumber}
                            onChange={e => this.setState({normalNumber: e})} 
                            />
                    </div>
                    <div className="ticket-field">
                        <label>Senior Ticket (3 {curr})</label>
                        <NumericInput id="numeric-input"
                            min={0} 
                            max={20} 
                            value={this.state.seniorNumber}
                            onChange={e => this.setState({seniorNumber: e})} 
                            />
                    </div>
                    <div className="sum-field">
                        <label>Full price:</label>
                        <label>{this.calcTotalPrice(this.state)}  {curr}</label>
                    </div>
                    <button className="nav-button" id="confirm-btn" style={{width: "100%"}}>SAVE</button>
                </form>
                <NavLink className="arrowright" to="/seats"> <i className="fas fa-angle-double-right"> </i></NavLink>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        region: state.region,
        tickets: state.tickets
     };
}

export default connect(mapStateToProps, { selectTickets })(TicketSelection);