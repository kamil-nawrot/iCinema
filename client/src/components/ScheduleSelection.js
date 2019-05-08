import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { fetchSchedule, selectShowing } from '../actions';

class ScheduleSelection extends React.Component
{  
    componentDidMount() {
        if (this.props.selectedMovie) this.props.fetchSchedule(this.props.selectedMovie.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedMovie !== this.props.selectedMovie)   fetchSchedule(this.props.selectedMovie.id);
    }

    renderSchedule() {
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
            <div className="container">
                <div className="option">
                    {this.renderSchedule()}
                </div>
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

export default connect(mapStateToProps, { fetchSchedule, selectShowing })(ScheduleSelection);