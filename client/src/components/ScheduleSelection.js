import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import moment from 'moment';

import { fetchSchedule, selectShowing, selectSeats } from '../actions';

class ScheduleSelection extends React.Component
{  
    constructor(props) {
        super(props);
        this.props.fetchSchedule(this.props.selectedMovie.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedShowing !== prevProps.selectedShowing)
            this.props.selectSeats([]);
    }

    renderSchedule() {
        if (!this.props.selectedMovie)  
            return (
                <div className="empty" style={{ backgroundColor: "rgba(0,0,0,0)" }}> 
                    You have to choose movie first
                </div>
            );
        return this.props.schedule.map(showing => {
            return (
                <div className={`option-button ${this.props.selectedShowing === showing ? 'active' : ''}`} key={showing} onClick={() => {
                    this.props.selectShowing(showing);
                }}>
                    {moment(showing).format('D MMMM YYYY | HH:mm')}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container" style={{backgroundColor: 'rgba(34,34,34,0.3)'}}>
            <NavLink className = "arrowleft" to="/movies"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <div className="option">
                    {this.renderSchedule()}
                </div>
                <NavLink className="arrowright" to="/tickets"> <i className="fas fa-angle-double-right"> </i></NavLink>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        selectedMovie: state.selectedMovie,
        selectedShowing: state.selectedShowing,
        schedule: state.schedule };
}

export default connect(mapStateToProps, { fetchSchedule, selectShowing, selectSeats })(ScheduleSelection);